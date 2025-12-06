"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, RefreshCw, Video, AlertCircle, Grid3x3, LayoutGrid, Square, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// HLS Stream devices for MPS IOC CCTV
interface HLSDevice {
  name: string;
  hlsUrl: string;
  site: string;
}

const hlsDevices: HLSDevice[] = [
  { 
    name: "192.168.0.12", 
    hlsUrl: "http://127.0.0.1:8080/memfs/de5c8d30-58e3-423f-b4f7-da8e597babe1.m3u8", 
    site: "MPS IOC CCTV" 
  },
  { 
    name: "192.168.0.13", 
    hlsUrl: "http://127.0.0.1:8080/memfs/9fa73373-8833-4d33-8eb9-54054bfd3987.m3u8", 
    site: "MPS IOC CCTV" 
  },
  { 
    name: "192.168.0.14", 
    hlsUrl: "http://127.0.0.1:8080/memfs/fcf54593-b775-4fe2-a7ff-7dbe0aa58de8.m3u8", 
    site: "MPS IOC CCTV" 
  },
  { 
    name: "192.168.0.15", 
    hlsUrl: "http://127.0.0.1:8080/memfs/e6cda9f9-f166-40f9-ab55-f50f13686030.m3u8", 
    site: "MPS IOC CCTV" 
  },
  { 
    name: "192.168.0.16", 
    hlsUrl: "http://127.0.0.1:8080/memfs/9bea2e13-ab9b-413e-a854-27a3d962d69c.m3u8", 
    site: "MPS IOC CCTV" 
  },
  { 
    name: "192.168.0.17", 
    hlsUrl: "http://127.0.0.1:8080/memfs/bbeb988c-00d9-40a0-a2c4-32bb15fbf686.m3u8", 
    site: "MPS IOC CCTV" 
  },
];

// CCTV device list with names and device IDs
const cctvDevices = [
  { name: "MPSp- Industrial Park", hid: "c8155800002f", site: "MPS CCTV Sites" },
  { name: "MPSp-Depo BBST 1", hid: "c81558000137", site: "MPS CCTV Sites" },
  { name: "MPSp-Depo BBST 2", hid: "c81558000086", site: "MPS CCTV Sites" },
  { name: "MPSp-Depo Putra Perdana 1", hid: "c8155800004c", site: "MPS CCTV Sites" },
  { name: "MPSp-Depo Putra Perdana 2", hid: "c81559000094", site: "MPS CCTV Sites" },
  { name: "MPSp-JPS 1", hid: "c81558000035", site: "MPS CCTV Sites" },
  { name: "MPSp-Kapal Korek 1", hid: "c815580000d1", site: "MPS CCTV Sites" },
  { name: "MPSp-Kapal Korek 2", hid: "c81558000139", site: "MPS CCTV Sites" },
  { name: "MPSp-KG SG Melut", hid: "c81558000084", site: "MPS CCTV Sites" },
  { name: "MPSp-Rambutan Kg. Sg. Buah Dua", hid: "c81558000031", site: "MPS CCTV Sites" },
  { name: "MPSp-Sg Pelek", hid: "c815580000ac", site: "MPS CCTV Sites" },
  { name: "MPSp-Taman Ixora", hid: "c81558000051", site: "MPS CCTV Sites" },
  { name: "MPSp-Tepi Lombong Batu Satu", hid: "c815580000d9", site: "MPS CCTV Sites" },
  { name: "MPSp-Tmn Dahlia 1", hid: "c81558000180", site: "MPS CCTV Sites" },
  { name: "MPSp-Tmn Seri Delima", hid: "c8155800016c", site: "MPS CCTV Sites" },
  { name: "MPSp06-C01 APEC Bomba", hid: "c81559000091", site: "MPS CCTV Sites" },
  { name: "MPSp06-C02 Hospital Cyberjaya", hid: "c81558000122", site: "MPS CCTV Sites" },
  { name: "MPSp06-C03 Persiaran Semarak Api", hid: "c8155900008e", site: "MPS CCTV Sites" },
  { name: "MPSp06-C04 Radius Cyberjaya", hid: "c8155900008f", site: "MPS CCTV Sites" },
  { name: "MPSp06-C05 Setia Eco Glades", hid: "c815580001e1", site: "MPS CCTV Sites" },
  { name: "MPSp06-C06 Stesen MRT Cyberjaya", hid: "c81559000093", site: "MPS CCTV Sites" },
  { name: "MPSp06-C07 Medan Seroja", hid: "c815050004f6", site: "MPS CCTV Sites" },
  { name: "MPSp06-C08 Perhentian Bas Seroja", hid: "c815050004f9", site: "MPS CCTV Sites" },
  { name: "MPSp06-C09 Psr Mlm Seroja", hid: "c815050004f5", site: "MPS CCTV Sites" },
  { name: "MPSp06-C10 Simpang Seroja", hid: "c815050004de", site: "MPS CCTV Sites" },
];

// Site/Group definitions
const cctvSites = [
  { id: "mps-cctv-sites", name: "MPS CCTV Sites", deviceIds: cctvDevices.map(d => d.hid), isHLS: false },
  { id: "mps-ioc-cctv", name: "MPS IOC CCTV", deviceIds: hlsDevices.map((_, i) => `hls-${i}`), isHLS: true },
];

interface CCTVFeed {
  id: string;
  name: string;
  location: string;
  status: "online" | "offline" | "maintenance";
  streamUrl?: string;
  snapshotUrl?: string;
  hlsUrl?: string;
  lastUpdate: string;
  hid: string;
  isHLS?: boolean;
}

// HLS Video Player Component - Dynamically loads hls.js
function HLSVideoPlayer({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsInstanceRef = useRef<any>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initHLS = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // Dynamically import hls.js
      const Hls = (await import('hls.js')).default;

      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });
        
        hlsInstanceRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          setError(false);
          video.play().catch(() => {
            // Autoplay blocked, user needs to interact
          });
        });

        hls.on(Hls.Events.ERROR, (_event: any, data: any) => {
          if (data.fatal) {
            console.error('HLS Error:', data);
            setError(true);
            setIsLoading(false);
            if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
              // Try to recover
              setTimeout(() => {
                hls.loadSource(src);
              }, 3000);
            }
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          setIsLoading(false);
          setError(false);
          video.play().catch(() => {});
        });
        video.addEventListener('error', () => {
          setError(true);
          setIsLoading(false);
        });
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Failed to load HLS.js:', err);
      // Try native video element as fallback
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          setIsLoading(false);
          video.play().catch(() => {});
        });
        video.addEventListener('error', () => {
          setError(true);
          setIsLoading(false);
        });
      } else {
        setError(true);
        setIsLoading(false);
      }
    }
  }, [src]);

  useEffect(() => {
    initHLS();

    return () => {
      if (hlsInstanceRef.current) {
        hlsInstanceRef.current.destroy();
        hlsInstanceRef.current = null;
      }
    };
  }, [initHLS]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-muted/50">
        <div className="text-center p-2">
          <AlertCircle className="h-6 w-6 mx-auto mb-1 text-red-500" />
          <p className="text-[10px] text-muted-foreground">Stream Error</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
          <div className="text-center p-2">
            <RefreshCw className="h-6 w-6 mx-auto mb-1 text-muted-foreground animate-spin" />
            <p className="text-[10px] text-muted-foreground">Connecting...</p>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}

type GridSize = "2x2" | "3x3" | "4x4" | "full";

const REFRESH_INTERVAL = 10 * 60 * 1000; // 10 minutes
const API_BASE_URL = 'http://43.216.228.155:3001';

export default function LiveCCTVFeedPage() {
  const [feeds, setFeeds] = useState<CCTVFeed[]>([]);
  const [selectedFeeds, setSelectedFeeds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [gridSize, setGridSize] = useState<GridSize>("full");
  const [showCameraSelector, setShowCameraSelector] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSite, setSelectedSite] = useState<string>("mps-cctv-sites");
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const cachedFeedsRef = useRef<CCTVFeed[]>([]); // Cache to keep previous snapshots visible
  const [loadingDevices, setLoadingDevices] = useState<Set<string>>(new Set()); // Track which devices are loading
  const [loadedCount, setLoadedCount] = useState(0); // Track how many devices have loaded
  const loadingRef = useRef(false); // Prevent concurrent loading

  // Check if current site is HLS-based
  const isHLSSite = () => {
    const site = cctvSites.find(s => s.id === selectedSite);
    return site?.isHLS ?? false;
  };

  // Get devices for selected site
  const getDevicesForSite = (siteId: string) => {
    const site = cctvSites.find(s => s.id === siteId);
    if (!site) return cctvDevices;
    if (site.isHLS) {
      return []; // HLS devices are handled separately
    }
    return cctvDevices.filter(device => site.deviceIds.includes(device.hid));
  };

  // Initialize feeds from device list based on selected site
  useEffect(() => {
    const site = cctvSites.find(s => s.id === selectedSite);
    
    if (site?.isHLS) {
      // Initialize HLS feeds
      const initialFeeds: CCTVFeed[] = hlsDevices.map((device, index) => ({
        id: `hls-${index}`,
        name: device.name,
        location: device.name,
        status: "online" as const,
        hid: `hls-${index}`,
        hlsUrl: device.hlsUrl,
        isHLS: true,
        lastUpdate: "Live Stream",
      }));
      setFeeds(initialFeeds);
      cachedFeedsRef.current = initialFeeds;
      setSelectedFeeds(initialFeeds.map(f => f.id));
      setCurrentPage(1);
      setIsLoading(false);
    } else {
      // Initialize snapshot-based feeds
      const siteDevices = getDevicesForSite(selectedSite);
      const initialFeeds: CCTVFeed[] = siteDevices.map((device) => ({
        id: device.hid,
        name: device.name,
        location: device.name,
        status: "offline" as const,
        hid: device.hid,
        lastUpdate: "Never",
        isHLS: false,
      }));
      setFeeds(initialFeeds);
      cachedFeedsRef.current = initialFeeds;
      setSelectedFeeds(initialFeeds.map(f => f.id));
      setCurrentPage(1);
      setIsLoading(false);
    }
  }, [selectedSite]);

  // Fetch snapshot for a single device
  const fetchSingleSnapshot = async (deviceId: string, deviceName: string): Promise<void> => {
    try {
      // Mark device as loading
      setLoadingDevices(prev => new Set(prev).add(deviceId));
      
      const response = await fetch(`${API_BASE_URL}/api/cctv-snapshot/${deviceId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch snapshot for ${deviceId}`);
      }

      const data = await response.json();
      
      // Update the specific feed
      setFeeds(prevFeeds => {
        const updatedFeeds = prevFeeds.map(feed => {
          if (feed.hid === deviceId) {
            if (data.success && data.image) {
              // New snapshot available - update
              return {
                ...feed,
                snapshotUrl: data.image || data.picBase64,
                status: "online" as const,
                lastUpdate: new Date().toLocaleTimeString(),
              };
            } else {
              // No new snapshot - keep cached one if available
              const cachedFeed = cachedFeedsRef.current.find(cf => cf.id === feed.id);
              if (cachedFeed && cachedFeed.snapshotUrl) {
                return {
                  ...feed,
                  snapshotUrl: cachedFeed.snapshotUrl,
                  status: data.msg?.includes('No Device Available') ? "offline" as const : "maintenance" as const,
                  lastUpdate: cachedFeed.lastUpdate,
                };
              } else {
                return {
                  ...feed,
                  status: data.msg?.includes('No Device Available') ? "offline" as const : "maintenance" as const,
                  lastUpdate: new Date().toLocaleTimeString(),
                };
              }
            }
          }
          return feed;
        });
        
        // Update cache
        cachedFeedsRef.current = updatedFeeds;
        return updatedFeeds;
      });
      
      setLoadedCount(prev => prev + 1);
    } catch (error) {
      console.error(`Error fetching snapshot for ${deviceId}:`, error);
      // On error, keep cached snapshot if available
      setFeeds(prevFeeds => {
        const updatedFeeds = prevFeeds.map(feed => {
          if (feed.hid === deviceId) {
            const cachedFeed = cachedFeedsRef.current.find(cf => cf.id === feed.id);
            if (cachedFeed && cachedFeed.snapshotUrl) {
              return {
                ...feed,
                snapshotUrl: cachedFeed.snapshotUrl,
                lastUpdate: cachedFeed.lastUpdate,
              };
            }
          }
          return feed;
        });
        return updatedFeeds;
      });
    } finally {
      // Remove from loading set
      setLoadingDevices(prev => {
        const next = new Set(prev);
        next.delete(deviceId);
        return next;
      });
    }
  };

  // Fetch snapshots for all devices one by one
  const fetchSnapshots = async (showLoading = false) => {
    // Prevent concurrent loading
    if (loadingRef.current) {
      console.log('Already loading snapshots, skipping...');
      return;
    }

    try {
      loadingRef.current = true;
      
      // Only show loading on initial load, not on auto-refresh
      if (showLoading) {
        setIsLoading(true);
        setLoadedCount(0);
      }
      
      // Use current feeds or cached feeds to get device IDs
      const currentFeeds = feeds.length > 0 ? feeds : cachedFeedsRef.current;
      const deviceIds = currentFeeds.map(f => f.hid);
      
      // Load devices one by one with a small delay between each
      const DELAY_BETWEEN_REQUESTS = 200; // 200ms delay between requests
      
      for (let i = 0; i < deviceIds.length; i++) {
        const deviceId = deviceIds[i];
        const device = currentFeeds.find(f => f.hid === deviceId);
        
        // Fetch snapshot for this device
        await fetchSingleSnapshot(deviceId, device?.name || deviceId);
        
        // Add delay between requests (except for the last one)
        if (i < deviceIds.length - 1) {
          await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
        }
      }
    } catch (error) {
      console.error('Error fetching snapshots:', error);
      // On error, keep using cached feeds - don't clear snapshots
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
      loadingRef.current = false;
    }
  };

  // Initial fetch (only once when feeds are initialized) - Skip for HLS
  useEffect(() => {
    if (!isHLSSite() && feeds.length > 0 && feeds[0].lastUpdate === "Never") {
      fetchSnapshots(true); // Show loading on initial fetch
    }
  }, [feeds.length, selectedSite]);

  // Auto-refresh interval - Skip for HLS
  useEffect(() => {
    if (!isHLSSite() && autoRefresh && feeds.length > 0 && feeds[0].lastUpdate !== "Never") {
      refreshIntervalRef.current = setInterval(() => {
        fetchSnapshots(false); // Silent refresh - keep cached images
      }, REFRESH_INTERVAL);

      return () => {
        if (refreshIntervalRef.current) {
          clearInterval(refreshIntervalRef.current);
        }
      };
    }
  }, [autoRefresh, feeds.length, selectedSite]);

  const filteredFeeds = feeds.filter((feed) =>
    feed.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    feed.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onlineCount = feeds.filter((f) => f.status === "online").length;
  const offlineCount = feeds.filter((f) => f.status === "offline").length;
  const maintenanceCount = feeds.filter((f) => f.status === "maintenance").length;

  const getStatusBadge = (status: CCTVFeed["status"]) => {
    switch (status) {
      case "online":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Online</Badge>;
      case "offline":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Offline</Badge>;
      case "maintenance":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Maintenance</Badge>;
    }
  };

  const handleFeedSelect = (feed: CCTVFeed) => {
    // Toggle selection in grid mode
    setSelectedFeeds((prev) =>
      prev.includes(feed.id)
        ? prev.filter((id) => id !== feed.id)
        : [...prev, feed.id].slice(0, getMaxFeedsForGrid(gridSize))
    );
  };

  const getMaxFeedsForGrid = (size: GridSize): number => {
    switch (size) {
      case "2x2":
        return 4;
      case "3x3":
        return 9;
      case "4x4":
        return 16;
      case "full":
        return feeds.length; // Show all devices
    }
  };

  const getGridColumns = (size: GridSize): string => {
    switch (size) {
      case "2x2":
        return "grid-cols-2";
      case "3x3":
        return "grid-cols-3";
      case "4x4":
        return "grid-cols-4";
      case "full":
        // Calculate optimal columns based on device count (aim for ~5 columns)
        // For small number of feeds, use appropriate columns
        if (feeds.length <= 2) return "grid-cols-2";
        if (feeds.length <= 4) return "grid-cols-2";
        if (feeds.length <= 6) return "grid-cols-3";
        if (feeds.length <= 9) return "grid-cols-3";
        const cols = Math.ceil(Math.sqrt(feeds.length));
        // Map to Tailwind classes (max 6 columns)
        const colMap: { [key: number]: string } = {
          1: "grid-cols-2",
          2: "grid-cols-2",
          3: "grid-cols-3",
          4: "grid-cols-4",
          5: "grid-cols-5",
          6: "grid-cols-6",
        };
        return colMap[Math.min(cols, 6)] || "grid-cols-5";
    }
  };

  const selectedFeedsData = feeds.filter((feed) =>
    selectedFeeds.includes(feed.id)
  );

  // Calculate pagination
  const maxFeedsPerPage = getMaxFeedsForGrid(gridSize);
  const totalPages = Math.max(1, Math.ceil(selectedFeedsData.length / maxFeedsPerPage));
  const startIndex = (currentPage - 1) * maxFeedsPerPage;
  const endIndex = startIndex + maxFeedsPerPage;
  const currentPageFeeds = selectedFeedsData.slice(startIndex, endIndex);
  
  // Debug: Log pagination info
  console.log('Pagination Debug:', {
    gridSize,
    selectedFeedsCount: selectedFeedsData.length,
    maxFeedsPerPage,
    totalPages,
    currentPage,
    currentPageFeedsCount: currentPageFeeds.length,
    feeds: feeds.map(f => ({ id: f.id, name: f.name, isHLS: f.isHLS, hlsUrl: f.hlsUrl })),
    selectedSite,
    isHLSSite: isHLSSite(),
  });

  // Reset to page 1 when grid size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [gridSize]);

  // Reset to page 1 if current page is out of bounds
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Live CCTV Feed</h1>
        <p className="text-muted-foreground mt-2">
          Monitor live camera feeds from all security cameras
        </p>
      </div>

      {/* Site Selection Tabs */}
      <Card>
        <CardContent className="pt-6">
          <Tabs value={selectedSite} onValueChange={setSelectedSite}>
            <TabsList className="grid w-full grid-cols-2">
              {cctvSites.map((site) => (
                <TabsTrigger key={site.id} value={site.id} className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {site.name}
                  <Badge variant="secondary" className="ml-2">
                    {site.deviceIds.length}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Stats Cards - Only show when camera selector is open */}
      {showCameraSelector && (
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cameras</CardTitle>
              <Camera className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{feeds.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Online</CardTitle>
              <div className="h-4 w-4 rounded-full bg-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{onlineCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Offline</CardTitle>
              <div className="h-4 w-4 rounded-full bg-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{offlineCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
              <div className="h-4 w-4 rounded-full bg-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">{maintenanceCount}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Full Grid View */}
      <div className="space-y-4">
        {/* Control Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Grid Size:</span>
                    <Button
                      variant={gridSize === "2x2" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setGridSize("2x2");
                        // Keep all feeds selected, pagination will handle display
                        if (selectedFeeds.length === 0) {
                          setSelectedFeeds(feeds.map(f => f.id));
                        }
                      }}
                    >
                      <Square className="h-4 w-4 mr-1" />
                      2x2
                    </Button>
                    <Button
                      variant={gridSize === "3x3" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setGridSize("3x3");
                        // Keep all feeds selected, pagination will handle display
                        if (selectedFeeds.length === 0) {
                          setSelectedFeeds(feeds.map(f => f.id));
                        }
                      }}
                    >
                      <Grid3x3 className="h-4 w-4 mr-1" />
                      3x3
                    </Button>
                    <Button
                      variant={gridSize === "4x4" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setGridSize("4x4");
                        // Keep all feeds selected, pagination will handle display
                        if (selectedFeeds.length === 0) {
                          setSelectedFeeds(feeds.map(f => f.id));
                        }
                      }}
                    >
                      <LayoutGrid className="h-4 w-4 mr-1" />
                      4x4
                    </Button>
                    <Button
                      variant={gridSize === "full" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setGridSize("full");
                        // Keep all feeds selected
                        if (selectedFeeds.length === 0) {
                          setSelectedFeeds(feeds.map(f => f.id));
                        }
                      }}
                    >
                      <LayoutGrid className="h-4 w-4 mr-1" />
                      Full
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={autoRefresh ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAutoRefresh(!autoRefresh)}
                  >
                    <RefreshCw className={`h-4 w-4 mr-1 ${autoRefresh ? 'animate-spin' : ''}`} />
                    Auto
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fetchSnapshots(false)}
                    disabled={isLoading || loadingRef.current}
                  >
                    <RefreshCw className={`h-4 w-4 mr-1 ${isLoading || loadingRef.current ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                  {isLoading && (
                    <span className="text-sm text-muted-foreground">
                      Loading: {loadedCount}/{feeds.length}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {selectedFeeds.length} cameras • {maxFeedsPerPage} per page • Page {currentPage}/{totalPages}
                  </span>
                  <Sheet open={showCameraSelector} onOpenChange={setShowCameraSelector}>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <Camera className="h-4 w-4 mr-2" />
                        Select Cameras
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                      <SheetHeader>
                        <SheetTitle>Select Cameras</SheetTitle>
                        <SheetDescription>
                          Select up to {getMaxFeedsForGrid(gridSize)} cameras for {gridSize} grid view
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-6 space-y-4">
                        {/* Search */}
                        <div className="relative">
                          <Input
                            placeholder="Search cameras..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                          />
                          <Camera className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        </div>

                        {/* Camera List */}
                        <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                          {filteredFeeds.map((feed) => {
                            const isSelected = selectedFeeds.includes(feed.id);
                            const canSelect =
                              selectedFeeds.length < getMaxFeedsForGrid(gridSize) || isSelected;

                            return (
                              <div
                                key={feed.id}
                                onClick={() => canSelect && handleFeedSelect(feed)}
                                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                                  isSelected
                                    ? "bg-primary/10 border-primary"
                                    : "bg-muted/50 border-border hover:bg-muted"
                                } ${!canSelect ? "opacity-50 cursor-not-allowed" : ""}`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => canSelect && handleFeedSelect(feed)}
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                    <Video className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-medium text-sm">{feed.name}</span>
                                  </div>
                                  {getStatusBadge(feed.status)}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  <div>{feed.location}</div>
                                  <div className="mt-1">Last update: {feed.lastUpdate}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Grid Display */}
          <Card className="overflow-visible">
            <CardContent className="p-0 flex flex-col overflow-visible">
              {isLoading && feeds.length === 0 ? (
                <div className="flex items-center justify-center h-[calc(100vh-300px)] bg-muted rounded-lg">
                  <div className="text-center">
                    <RefreshCw className="h-16 w-16 mx-auto mb-4 text-muted-foreground animate-spin" />
                    <p className="text-muted-foreground font-medium">Loading cameras...</p>
                  </div>
                </div>
              ) : selectedFeeds.length > 0 ? (
                <>
                  <div
                    className={`grid ${getGridColumns(gridSize)} gap-2 w-full p-4 flex-1`}
                    style={{ minHeight: "calc(100vh - 350px)" }}
                  >
                    {currentPageFeeds.map((feed) => {
                    const isLoadingDevice = loadingDevices.has(feed.hid);
                    return (
                      <div
                        key={feed.id}
                        className="relative bg-black rounded-lg overflow-hidden group"
                        style={{ aspectRatio: "16/9" }}
                      >
                        {/* HLS Video Stream */}
                        {feed.isHLS && feed.hlsUrl ? (
                          <>
                            <HLSVideoPlayer src={feed.hlsUrl} name={feed.name} />
                            <div className="absolute top-1 left-1 bg-red-500/80 text-white px-1.5 py-0.5 rounded text-[10px] font-medium flex items-center gap-1">
                              <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                              LIVE
                            </div>
                          </>
                        ) : isLoadingDevice ? (
                          <div className="flex items-center justify-center h-full bg-muted/50">
                            <div className="text-center p-2">
                              <RefreshCw className="h-6 w-6 mx-auto mb-1 text-muted-foreground animate-spin" />
                              <p className="text-[10px] text-muted-foreground">Loading...</p>
                            </div>
                          </div>
                        ) : feed.status === "online" && feed.snapshotUrl ? (
                        <>
                          <img
                            src={feed.snapshotUrl}
                            alt={feed.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <div className="absolute top-1 left-1 bg-red-500/80 text-white px-1.5 py-0.5 rounded text-[10px] font-medium flex items-center gap-1">
                            <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                            LIVE
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-center h-full bg-muted/50">
                          <div className="text-center p-2">
                            <AlertCircle className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                            <p className="text-[10px] text-muted-foreground">
                              {feed.status === "offline" ? "Offline" : "Maintenance"}
                            </p>
                          </div>
                        </div>
                      )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-1.5">
                          <p className="text-[10px] font-medium truncate">{feed.name}</p>
                          <p className="text-[9px] text-white/70 truncate">{feed.isHLS ? 'Live Stream' : `Updated: ${feed.lastUpdate}`}</p>
                        </div>
                      </div>
                    );
                    })}
                  </div>
                  
                  {/* Pagination Controls - Always show if more than one page */}
                  {/* Debug: totalPages = {totalPages}, currentPage = {currentPage}, selectedFeeds = {selectedFeedsData.length} */}
                  {totalPages > 1 ? (
                    <div className="flex items-center justify-between px-6 py-4 border-t-2 border-primary/20 bg-muted/50 w-full shadow-lg relative z-20">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Button
                          variant="outline"
                          size="default"
                          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                          disabled={currentPage === 1}
                          className="min-w-[110px] h-10"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>
                        <div className="flex items-center gap-1 flex-wrap">
                          {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                            let pageNum: number;
                            if (totalPages <= 7) {
                              pageNum = i + 1;
                            } else if (currentPage <= 4) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 3) {
                              pageNum = totalPages - 6 + i;
                            } else {
                              pageNum = currentPage - 3 + i;
                            }
                            
                            return (
                              <Button
                                key={pageNum}
                                variant={currentPage === pageNum ? "default" : "outline"}
                                size="default"
                                onClick={() => setCurrentPage(pageNum)}
                                className="min-w-[44px] h-10"
                              >
                                {pageNum}
                              </Button>
                            );
                          })}
                        </div>
                        <Button
                          variant="outline"
                          size="default"
                          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                          disabled={currentPage === totalPages}
                          className="min-w-[110px] h-10"
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap ml-4">
                        Page <span className="text-foreground font-bold">{currentPage}</span> of <span className="text-foreground font-bold">{totalPages}</span> ({selectedFeedsData.length} cameras)
                      </div>
                    </div>
                  ) : (
                    <div className="px-6 py-2 border-t bg-muted/10 text-xs text-muted-foreground text-center">
                      Showing all {selectedFeedsData.length} cameras
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-[calc(100vh-300px)] bg-muted rounded-lg">
                  <div className="text-center">
                    <LayoutGrid className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground font-medium">No cameras selected</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Click "Select Cameras" to choose cameras for grid view
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
    </div>
  );
}

