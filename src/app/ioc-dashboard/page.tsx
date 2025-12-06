"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Activity, 
  Radio, 
  Bell,
  Maximize2,
  RefreshCw,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import { getCurrentUser, type User as UserType } from "@/lib/auth";
import { logActivity } from "@/lib/audit-logger";
import { 
  loadPreferences, 
  savePreferences, 
  type MapFilterPreference, 
  type WidgetPreference 
} from "@/lib/ioc-preferences";
import { DraggableWidget } from "@/components/ioc/draggable-widget";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
import MapFilters from "@/components/ioc/map-filters";
import ExampleWidget from "@/components/ioc/widgets/example-widget";
import WeatherWidget from "@/components/ioc/widgets/weather-widget";
import StreetlightStatus from "@/components/ioc/widgets/streetlight-status";
import CCTVStatus from "@/components/ioc/widgets/cctv-status";
import AIBoxDetection from "@/components/ioc/widgets/aibox-detection";
import CompoundChart from "@/components/ioc/widgets/compound-chart";
import TaxAnalytics from "@/components/ioc/widgets/tax-analytics";

// Dynamically import GoogleMap with no SSR to prevent hydration issues
const GoogleMap = dynamic(() => import("@/components/ioc/google-map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-muted">
      <div className="text-center">
        <Radio className="h-16 w-16 mx-auto mb-4 text-primary animate-spin" />
        <p className="text-sm text-muted-foreground">Loading Map...</p>
      </div>
    </div>
  ),
});

export default function IOCDashboardPage() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mapError, setMapError] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [newsItems, setNewsItems] = useState<string[]>([]);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const [landmarksEnabled, setLandmarksEnabled] = useState(false);
  const [blokPerancanganEnabled, setBlokPerancanganEnabled] = useState(false);
  const [bridgeEnabled, setBridgeEnabled] = useState(false);
  const [cctvEnabled, setCctvEnabled] = useState(false);
  const [chartingKmEnabled, setChartingKmEnabled] = useState(false);
  const [constructedSlopeEnabled, setConstructedSlopeEnabled] = useState(false);
  const [drainageEnabled, setDrainageEnabled] = useState(false);
  const [earthWorkEnabled, setEarthWorkEnabled] = useState(false);
  const [feederPillarEnabled, setFeederPillarEnabled] = useState(false);
  const [flexiblePostEnabled, setFlexiblePostEnabled] = useState(false);
  const [gtmixEnabled, setGtmixEnabled] = useState(false);
  const [sempadanTamanEnabled, setSempadanTamanEnabled] = useState(false);
  const [gtnhSemasaEnabled, setGtnhSemasaEnabled] = useState(false);
  const [jalanEnabled, setJalanEnabled] = useState(false);
  const [jalanKejuruteraanEnabled, setJalanKejuruteraanEnabled] = useState(false);
  const [komitedKmEnabled, setKomitedKmEnabled] = useState(false);
  const [locationMapAsetEnabled, setLocationMapAsetEnabled] = useState(false);
  const [locationMapAsetItemEnabled, setLocationMapAsetItemEnabled] = useState(false);
  const [lokasiBanjirEnabled, setLokasiBanjirEnabled] = useState(false);
  const [ndcdb20Enabled, setNdcdb20Enabled] = useState(false);
  const [ndcdb23Enabled, setNdcdb23Enabled] = useState(false);
  const [pasarAwamEnabled, setPasarAwamEnabled] = useState(false);
  const [pasarMalamEnabled, setPasarMalamEnabled] = useState(false);
  const [pasarSariEnabled, setPasarSariEnabled] = useState(false);
  const [pasarTaniEnabled, setPasarTaniEnabled] = useState(false);
  const [roadHumpEnabled, setRoadHumpEnabled] = useState(false);
  const [roadMarkingLinearEnabled, setRoadMarkingLinearEnabled] = useState(false);
  const [roadMarkingPointEnabled, setRoadMarkingPointEnabled] = useState(false);
  const [roadMedianEnabled, setRoadMedianEnabled] = useState(false);
  const [roadShoulderEnabled, setRoadShoulderEnabled] = useState(false);
  const [sampahHaramEnabled, setSampahHaramEnabled] = useState(false);
  const [sempadanDaerahEnabled, setSempadanDaerahEnabled] = useState(false);
  const [signboardEnabled, setSignboardEnabled] = useState(false);
  const [sportFacilityEnabled, setSportFacilityEnabled] = useState(false);
  const [streetLightingEnabled, setStreetLightingEnabled] = useState(false);
  const [loranetStreetlightEnabled, setLoranetStreetlightEnabled] = useState(false);
  const [tamanPerumahanEnabled, setTamanPerumahanEnabled] = useState(false);
  const [trafficLightEnabled, setTrafficLightEnabled] = useState(false);
  const [wartaKawasanLapangEnabled, setWartaKawasanLapangEnabled] = useState(false);
  const [zonAhliMajlisEnabled, setZonAhliMajlisEnabled] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(false);
  // Weather widget is always visible, no state needed
  const [streetlightVisible, setStreetlightVisible] = useState(true); // Default visible
  const [compoundVisible, setCompoundVisible] = useState(true); // Default visible
  const [taxVisible, setTaxVisible] = useState(true); // Default visible
  const [aiboxVisible, setAiboxVisible] = useState(true); // Default visible
  const [cctvVisible, setCctvVisible] = useState(true); // Default visible
  
  // Widget positions state
  const [widgetPositions, setWidgetPositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const headerHeight = 64; // Header is h-16 (64px)
    const padding = 10;
    const minY = headerHeight + padding; // Minimum Y position below header
    
    if (typeof window === 'undefined') {
      return {
        weather: { x: 0, y: minY + 10 },
        streetlight: { x: 20, y: minY + 30 },
        cctv: { x: 20, y: minY + 180 },
        aibox: { x: 20, y: minY + 330 },
        compound: { x: 20, y: minY + 480 },
        tax: { x: 20, y: minY + 630 },
      };
    }
    const centerX = window.innerWidth / 2;
    return {
      weather: { x: centerX - 150, y: minY + 10 },
      streetlight: { x: 20, y: minY + 30 },
      cctv: { x: 20, y: minY + 180 },
      aibox: { x: window.innerWidth - 350, y: minY + 30 },
      compound: { x: window.innerWidth - 350, y: minY + 230 },
      tax: { x: window.innerWidth - 350, y: minY + 430 },
    };
  });

  // Widget sizes state
  const [widgetSizes, setWidgetSizes] = useState<Record<string, { width: number; height: number }>>({
    weather: { width: 300, height: 200 },
    streetlight: { width: 380, height: 600 },
    cctv: { width: 380, height: 600 },
    aibox: { width: 380, height: 600 },
    compound: { width: 500, height: 600 },
    tax: { width: 600, height: 700 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch news ticker items from API
  const fetchNewsTicker = async () => {
    try {
      setIsLoadingNews(true);
      const response = await fetch(`${API_BASE_URL}/api/news-ticker/active`);
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        // Format news items: combine title and content
        const formattedItems = data.data.map((item: any) => {
          if (item.title && item.content) {
            return `${item.title} - ${item.content}`;
          }
          return item.title || item.content || '';
        }).filter((item: string) => item.length > 0);

        setNewsItems(formattedItems);
      } else {
        // Fallback to empty array if no items
        setNewsItems([]);
      }
    } catch (error) {
      console.error('Error fetching news ticker:', error);
      // Keep existing items on error, or set empty array
      setNewsItems([]);
    } finally {
      setIsLoadingNews(false);
    }
  };

  // Fetch news ticker on mount and set up auto-refresh
  useEffect(() => {
    // Initial fetch
    fetchNewsTicker();

    // Refresh every 30 seconds
    const refreshInterval = setInterval(() => {
      fetchNewsTicker();
    }, 30000);

    return () => clearInterval(refreshInterval);
  }, []);

  // Get user from localStorage
  useEffect(() => {
    const updateUser = () => {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    };

    updateUser();

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'user' || e.key === null) {
        updateUser();
      }
    };

    const handleCustomStorageChange = () => {
      updateUser();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userUpdated', handleCustomStorageChange);

    const interval = setInterval(() => {
      updateUser();
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userUpdated', handleCustomStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Load user preferences on mount
  useEffect(() => {
    const loadUserPreferences = () => {
      const preferences = loadPreferences();
      if (preferences) {
        // Apply map filter preferences
        preferences.mapFilters.forEach((filter) => {
          const setterMap: Record<string, (value: boolean) => void> = {
            landmarks: setLandmarksEnabled,
            blokPerancangan: setBlokPerancanganEnabled,
            bridge: setBridgeEnabled,
            cctv: setCctvEnabled,
            chartingKm: setChartingKmEnabled,
            constructedSlope: setConstructedSlopeEnabled,
            drainage: setDrainageEnabled,
            earthWork: setEarthWorkEnabled,
            feederPillar: setFeederPillarEnabled,
            flexiblePost: setFlexiblePostEnabled,
            gtmix: setGtmixEnabled,
            sempadanTaman: setSempadanTamanEnabled,
            gtnhSemasa: setGtnhSemasaEnabled,
            jalan: setJalanEnabled,
            jalanKejuruteraan: setJalanKejuruteraanEnabled,
            komitedKm: setKomitedKmEnabled,
            locationMapAset: setLocationMapAsetEnabled,
            locationMapAsetItem: setLocationMapAsetItemEnabled,
            lokasiBanjir: setLokasiBanjirEnabled,
            ndcdb20: setNdcdb20Enabled,
            ndcdb23: setNdcdb23Enabled,
            pasarAwam: setPasarAwamEnabled,
            pasarMalam: setPasarMalamEnabled,
            pasarSari: setPasarSariEnabled,
            pasarTani: setPasarTaniEnabled,
            roadHump: setRoadHumpEnabled,
            roadMarkingLinear: setRoadMarkingLinearEnabled,
            roadMarkingPoint: setRoadMarkingPointEnabled,
            roadMedian: setRoadMedianEnabled,
            roadShoulder: setRoadShoulderEnabled,
            sampahHaram: setSampahHaramEnabled,
            sempadanDaerah: setSempadanDaerahEnabled,
            signboard: setSignboardEnabled,
            sportFacility: setSportFacilityEnabled,
            streetLighting: setStreetLightingEnabled,
            loranetStreetlight: setLoranetStreetlightEnabled,
            tamanPerumahan: setTamanPerumahanEnabled,
            trafficLight: setTrafficLightEnabled,
            wartaKawasanLapang: setWartaKawasanLapangEnabled,
            zonAhliMajlis: setZonAhliMajlisEnabled,
          };
          
          if (setterMap[filter.id]) {
            setterMap[filter.id](filter.enabled);
          }
        });

        // Apply widget preferences
        preferences.widgets.forEach((widget) => {
          const setterMap: Record<string, (value: boolean) => void> = {
            // weather is always visible, no setter needed
            streetlight: setStreetlightVisible,
            cctv: setCctvVisible,
            aibox: setAiboxVisible,
            compound: setCompoundVisible,
            tax: setTaxVisible,
            example: setWidgetVisible,
          };
          
          if (setterMap[widget.id]) {
            console.log(`[IOC Preferences] Loading widget ${widget.id}: enabled=${widget.enabled}`);
            setterMap[widget.id](widget.enabled);
          }
          
          // Apply widget positions (validate they're below header)
          if (widget.position) {
            const headerHeight = 64; // Header is h-16 (64px)
            const padding = 10;
            const minY = headerHeight + padding;
            
            // Ensure position is below header
            const validatedPosition = {
              x: widget.position.x,
              y: Math.max(minY, widget.position.y),
            };
            
            console.log(`[IOC Preferences] Loading widget ${widget.id} position:`, validatedPosition);
            setWidgetPositions((prev) => ({
              ...prev,
              [widget.id]: validatedPosition,
            }));
          }
          
          // Apply widget sizes
          if (widget.size) {
            console.log(`[IOC Preferences] Loading widget ${widget.id} size:`, widget.size);
            setWidgetSizes((prev) => ({
              ...prev,
              [widget.id]: widget.size!,
            }));
          }
        });
        console.log('[IOC Preferences] Loaded preferences successfully');
      } else {
        console.log('[IOC Preferences] No saved preferences found, using defaults');
      }
    };

    loadUserPreferences();
  }, []);

  // Ensure widgets have valid positions when enabled
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updatePositions = () => {
      setWidgetPositions((prev) => {
        const updated = { ...prev };
        const centerX = window.innerWidth / 2;
        const headerHeight = 64; // Header is h-16 (64px)
        const padding = 10;
        const minY = headerHeight + padding; // Minimum Y position below header
        
        // Set default positions for widgets that don't have positions (ensure they're below header)
        // Weather widget is always visible
        if (!updated.weather || updated.weather.x === 0 || updated.weather.y < minY) {
          updated.weather = { x: centerX - 150, y: minY + 10 };
        }
        if (streetlightVisible && (!updated.streetlight || updated.streetlight.x === 0 || updated.streetlight.y < minY)) {
          updated.streetlight = { x: 20, y: minY + 30 };
        }
        if (cctvVisible && (!updated.cctv || updated.cctv.x === 0 || updated.cctv.y < minY)) {
          updated.cctv = { x: 20, y: minY + 180 };
        }
        if (aiboxVisible && (!updated.aibox || updated.aibox.x === 0 || updated.aibox.y < minY)) {
          updated.aibox = { x: window.innerWidth - 350, y: minY + 30 };
        }
        if (compoundVisible && (!updated.compound || updated.compound.x === 0 || updated.compound.y < minY)) {
          updated.compound = { x: window.innerWidth - 350, y: minY + 230 };
        }
        if (taxVisible && (!updated.tax || updated.tax.x === 0 || updated.tax.y < minY)) {
          updated.tax = { x: window.innerWidth - 350, y: minY + 430 };
        }
        
        return updated;
      });
    };
    
    updatePositions();
  }, [streetlightVisible, cctvVisible, aiboxVisible, compoundVisible, taxVisible]);

  // Get user initials for avatar
  const getUserInitials = (): string => {
    if (!user) return 'IO';
    
    if (user.full_name) {
      const parts = user.full_name.trim().split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return user.full_name.substring(0, 2).toUpperCase();
    }
    
    if (user.username) {
      return user.username.substring(0, 2).toUpperCase();
    }
    
    return 'IO';
  };

  // Get user display name
  const getUserDisplayName = (): string => {
    if (!user) return 'IOC Operator';
    return user.full_name || user.username || 'IOC Operator';
  };

  // Get user email
  const getUserEmail = (): string => {
    if (!user) return 'operator@mpsepang.com';
    return user.email || 'operator@mpsepang.com';
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (token && token !== 'authenticated') {
        try {
          await fetch(`${API_BASE_URL}/api/auth/logout`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.error('Logout API error:', error);
        }
      }

      if (user) {
        logActivity({
          action: 'LOGOUT',
          category: 'SECURITY',
          resource: 'Authentication',
          description: `User logged out: ${user.username || user.email}`,
          status: 'SUCCESS',
        });
      }

      localStorage.removeItem('user');
      localStorage.removeItem('token');
      // Clear authentication cookie
      document.cookie = 'auth_token=; path=/; max-age=0; SameSite=Lax';
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      // Clear authentication cookie
      document.cookie = 'auth_token=; path=/; max-age=0; SameSite=Lax';
      router.push('/login');
    }
  };

  // Handle widget position change
  const handleWidgetPositionChange = (widgetId: string, position: { x: number; y: number }) => {
    console.log(`[IOC Dashboard] Widget ${widgetId} position changed to:`, position);
    setWidgetPositions((prev) => ({
      ...prev,
      [widgetId]: position,
    }));
    
    // Auto-save position change
    saveCurrentPreferences();
  };

  // Handle widget size change
  const handleWidgetSizeChange = (widgetId: string, size: { width: number; height: number }) => {
    console.log(`[IOC Dashboard] Widget ${widgetId} size changed to:`, size);
    setWidgetSizes((prev) => ({
      ...prev,
      [widgetId]: size,
    }));
    
    // Auto-save size change
    saveCurrentPreferences();
  };
  
  // Debug: Log widget visibility states
  useEffect(() => {
    console.log('[IOC Dashboard] Widget visibility states:', {
      weather: true, // Always visible
      streetlight: streetlightVisible,
      cctv: cctvVisible,
      aibox: aiboxVisible,
      compound: compoundVisible,
      tax: taxVisible,
      example: widgetVisible,
    });
  }, [streetlightVisible, cctvVisible, aiboxVisible, compoundVisible, taxVisible, widgetVisible]);

  // Save current preferences
  const saveCurrentPreferences = () => {
    const mapFilters: MapFilterPreference[] = [
      { id: 'landmarks', enabled: landmarksEnabled },
      { id: 'blokPerancangan', enabled: blokPerancanganEnabled },
      { id: 'bridge', enabled: bridgeEnabled },
      { id: 'cctv', enabled: cctvEnabled },
      { id: 'chartingKm', enabled: chartingKmEnabled },
      { id: 'constructedSlope', enabled: constructedSlopeEnabled },
      { id: 'drainage', enabled: drainageEnabled },
      { id: 'earthWork', enabled: earthWorkEnabled },
      { id: 'feederPillar', enabled: feederPillarEnabled },
      { id: 'flexiblePost', enabled: flexiblePostEnabled },
      { id: 'gtmix', enabled: gtmixEnabled },
      { id: 'sempadanTaman', enabled: sempadanTamanEnabled },
      { id: 'gtnhSemasa', enabled: gtnhSemasaEnabled },
      { id: 'jalan', enabled: jalanEnabled },
      { id: 'jalanKejuruteraan', enabled: jalanKejuruteraanEnabled },
      { id: 'komitedKm', enabled: komitedKmEnabled },
      { id: 'locationMapAset', enabled: locationMapAsetEnabled },
      { id: 'locationMapAsetItem', enabled: locationMapAsetItemEnabled },
      { id: 'lokasiBanjir', enabled: lokasiBanjirEnabled },
      { id: 'ndcdb20', enabled: ndcdb20Enabled },
      { id: 'ndcdb23', enabled: ndcdb23Enabled },
      { id: 'pasarAwam', enabled: pasarAwamEnabled },
      { id: 'pasarMalam', enabled: pasarMalamEnabled },
      { id: 'pasarSari', enabled: pasarSariEnabled },
      { id: 'pasarTani', enabled: pasarTaniEnabled },
      { id: 'roadHump', enabled: roadHumpEnabled },
      { id: 'roadMarkingLinear', enabled: roadMarkingLinearEnabled },
      { id: 'roadMarkingPoint', enabled: roadMarkingPointEnabled },
      { id: 'roadMedian', enabled: roadMedianEnabled },
      { id: 'roadShoulder', enabled: roadShoulderEnabled },
      { id: 'sampahHaram', enabled: sampahHaramEnabled },
      { id: 'sempadanDaerah', enabled: sempadanDaerahEnabled },
      { id: 'signboard', enabled: signboardEnabled },
      { id: 'sportFacility', enabled: sportFacilityEnabled },
      { id: 'streetLighting', enabled: streetLightingEnabled },
      { id: 'loranetStreetlight', enabled: loranetStreetlightEnabled },
      { id: 'tamanPerumahan', enabled: tamanPerumahanEnabled },
      { id: 'trafficLight', enabled: trafficLightEnabled },
      { id: 'wartaKawasanLapang', enabled: wartaKawasanLapangEnabled },
      { id: 'zonAhliMajlis', enabled: zonAhliMajlisEnabled },
    ];

    const widgets: WidgetPreference[] = [
      { id: 'weather', enabled: true, position: widgetPositions.weather, size: widgetSizes.weather }, // Always enabled
      { id: 'streetlight', enabled: streetlightVisible, position: widgetPositions.streetlight, size: widgetSizes.streetlight },
      { id: 'cctv', enabled: cctvVisible, position: widgetPositions.cctv, size: widgetSizes.cctv },
      { id: 'aibox', enabled: aiboxVisible, position: widgetPositions.aibox, size: widgetSizes.aibox },
      { id: 'compound', enabled: compoundVisible, position: widgetPositions.compound, size: widgetSizes.compound },
      { id: 'tax', enabled: taxVisible, position: widgetPositions.tax, size: widgetSizes.tax },
      { id: 'example', enabled: widgetVisible },
    ];

    const saved = savePreferences({ mapFilters, widgets });
    if (saved) {
      console.log('[IOC Dashboard] Preferences saved successfully');
    } else {
      console.error('[IOC Dashboard] Failed to save preferences');
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Full-Screen IOC Header - Glass Effect - Floating Above Map */}
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-background/5 backdrop-blur-2xl border-b border-white/3 shadow-lg">
        <div className="grid grid-cols-3 h-16 items-center px-6">
          {/* Left Section */}
            <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/Logo_mpsepang.png" 
                alt="MPSepang Logo" 
                className="h-full w-full object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
              <div>
              <h1 className="text-xl text-white font-bold flex items-center gap-2">
                MPSepang IOC Dashboard
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
                    <Activity className="h-3 w-3 animate-pulse text-green-500" />
                  <span className="text-xs">Live</span>
                  </Badge>
                </h1>
              <p className="text-xs text-white text-muted-foreground">Integrated Operations Center - Real-Time Monitoring</p>
            </div>
          </div>

          {/* Center Section - Time (Perfectly Centered) */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl text-white font-bold tabular-nums" suppressHydrationWarning>
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
            </div>
            <div className="text-xs text-white text-muted-foreground" suppressHydrationWarning>
              {currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 justify-end">
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/avatars/admin.png" alt={getUserDisplayName()} />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 z-[110]" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{getUserDisplayName()}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {getUserEmail()}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/admin')}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Admin Page</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Map Filters - Top Left */}
      <MapFilters 
        landmarksEnabled={landmarksEnabled}
        onLandmarksChange={(enabled) => {
          setLandmarksEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ landmarks: enabled });
        }}
        blokPerancanganEnabled={blokPerancanganEnabled}
        onBlokPerancanganChange={(enabled) => {
          setBlokPerancanganEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ blokPerancangan: enabled });
        }}
        bridgeEnabled={bridgeEnabled}
        onBridgeChange={(enabled) => {
          setBridgeEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ bridge: enabled });
        }}
        cctvEnabled={cctvEnabled}
        onCCTVChange={(enabled) => {
          setCctvEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ cctv: enabled });
        }}
        chartingKmEnabled={chartingKmEnabled}
        onChartingKmChange={(enabled) => {
          setChartingKmEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ chartingKm: enabled });
        }}
        constructedSlopeEnabled={constructedSlopeEnabled}
        onConstructedSlopeChange={(enabled) => {
          setConstructedSlopeEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ constructedSlope: enabled });
        }}
        drainageEnabled={drainageEnabled}
        onDrainageChange={(enabled) => {
          setDrainageEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ drainage: enabled });
        }}
        earthWorkEnabled={earthWorkEnabled}
        onEarthWorkChange={(enabled) => {
          setEarthWorkEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ earthWork: enabled });
        }}
        feederPillarEnabled={feederPillarEnabled}
        onFeederPillarChange={(enabled) => {
          setFeederPillarEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ feederPillar: enabled });
        }}
        flexiblePostEnabled={flexiblePostEnabled}
        onFlexiblePostChange={(enabled) => {
          setFlexiblePostEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ flexiblePost: enabled });
        }}
        gtmixEnabled={gtmixEnabled}
        onGtmixChange={(enabled) => {
          setGtmixEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ gtmix: enabled });
        }}
        sempadanTamanEnabled={sempadanTamanEnabled}
        onSempadanTamanChange={(enabled) => {
          setSempadanTamanEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ sempadanTaman: enabled });
        }}
        gtnhSemasaEnabled={gtnhSemasaEnabled}
        onGtnhSemasaChange={(enabled) => {
          setGtnhSemasaEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ gtnhSemasa: enabled });
        }}
        jalanEnabled={jalanEnabled}
        onJalanChange={(enabled) => {
          setJalanEnabled(enabled);
          // Future: API call to save preference
          // await updateMapPreferences({ jalan: enabled });
        }}
        jalanKejuruteraanEnabled={jalanKejuruteraanEnabled}
        onJalanKejuruteraanChange={(enabled) => {
          setJalanKejuruteraanEnabled(enabled);
          // Future: API call to save preference
        }}
        komitedKmEnabled={komitedKmEnabled}
        onKomitedKmChange={(enabled) => {
          setKomitedKmEnabled(enabled);
          // Future: API call to save preference
        }}
        locationMapAsetEnabled={locationMapAsetEnabled}
        onLocationMapAsetChange={(enabled) => {
          setLocationMapAsetEnabled(enabled);
          // Future: API call to save preference
        }}
        locationMapAsetItemEnabled={locationMapAsetItemEnabled}
        onLocationMapAsetItemChange={(enabled) => {
          setLocationMapAsetItemEnabled(enabled);
          // Future: API call to save preference
        }}
        lokasiBanjirEnabled={lokasiBanjirEnabled}
        onLokasiBanjirChange={(enabled) => {
          setLokasiBanjirEnabled(enabled);
          // Future: API call to save preference
        }}
        ndcdb20Enabled={ndcdb20Enabled}
        onNdcdb20Change={(enabled) => {
          setNdcdb20Enabled(enabled);
          // Future: API call to save preference
        }}
        ndcdb23Enabled={ndcdb23Enabled}
        onNdcdb23Change={(enabled) => {
          setNdcdb23Enabled(enabled);
          // Future: API call to save preference
        }}
        pasarAwamEnabled={pasarAwamEnabled}
        onPasarAwamChange={(enabled) => {
          setPasarAwamEnabled(enabled);
          // Future: API call to save preference
        }}
        pasarMalamEnabled={pasarMalamEnabled}
        onPasarMalamChange={(enabled) => {
          setPasarMalamEnabled(enabled);
          // Future: API call to save preference
        }}
        pasarSariEnabled={pasarSariEnabled}
        onPasarSariChange={(enabled) => {
          setPasarSariEnabled(enabled);
          // Future: API call to save preference
        }}
        pasarTaniEnabled={pasarTaniEnabled}
        onPasarTaniChange={(enabled) => {
          setPasarTaniEnabled(enabled);
          // Future: API call to save preference
        }}
        roadHumpEnabled={roadHumpEnabled}
        onRoadHumpChange={(enabled) => {
          setRoadHumpEnabled(enabled);
          // Future: API call to save preference
        }}
        roadMarkingLinearEnabled={roadMarkingLinearEnabled}
        onRoadMarkingLinearChange={(enabled) => {
          setRoadMarkingLinearEnabled(enabled);
          // Future: API call to save preference
        }}
        roadMarkingPointEnabled={roadMarkingPointEnabled}
        onRoadMarkingPointChange={(enabled) => {
          setRoadMarkingPointEnabled(enabled);
          // Future: API call to save preference
        }}
        roadMedianEnabled={roadMedianEnabled}
        onRoadMedianChange={(enabled) => {
          setRoadMedianEnabled(enabled);
          // Future: API call to save preference
        }}
        roadShoulderEnabled={roadShoulderEnabled}
        onRoadShoulderChange={(enabled) => {
          setRoadShoulderEnabled(enabled);
          // Future: API call to save preference
        }}
        sampahHaramEnabled={sampahHaramEnabled}
        onSampahHaramChange={(enabled) => {
          setSampahHaramEnabled(enabled);
          // Future: API call to save preference
        }}
        sempadanDaerahEnabled={sempadanDaerahEnabled}
        onSempadanDaerahChange={(enabled) => {
          setSempadanDaerahEnabled(enabled);
          // Future: API call to save preference
        }}
        signboardEnabled={signboardEnabled}
        onSignboardChange={(enabled) => {
          setSignboardEnabled(enabled);
          // Future: API call to save preference
        }}
        sportFacilityEnabled={sportFacilityEnabled}
        onSportFacilityChange={(enabled) => {
          setSportFacilityEnabled(enabled);
          // Future: API call to save preference
        }}
        streetLightingEnabled={streetLightingEnabled}
        onStreetLightingChange={(enabled) => {
          setStreetLightingEnabled(enabled);
          // Future: API call to save preference
        }}
        loranetStreetlightEnabled={loranetStreetlightEnabled}
        onLoranetStreetlightChange={(enabled) => {
          setLoranetStreetlightEnabled(enabled);
          // Future: API call to save preference
        }}
        tamanPerumahanEnabled={tamanPerumahanEnabled}
        onTamanPerumahanChange={(enabled) => {
          setTamanPerumahanEnabled(enabled);
          // Future: API call to save preference
        }}
        trafficLightEnabled={trafficLightEnabled}
        onTrafficLightChange={(enabled) => {
          setTrafficLightEnabled(enabled);
          // Future: API call to save preference
        }}
        wartaKawasanLapangEnabled={wartaKawasanLapangEnabled}
        onWartaKawasanLapangChange={(enabled) => {
          setWartaKawasanLapangEnabled(enabled);
          // Future: API call to save preference
        }}
        zonAhliMajlisEnabled={zonAhliMajlisEnabled}
        onZonAhliMajlisChange={(enabled) => {
          setZonAhliMajlisEnabled(enabled);
          // Future: API call to save preference
        }}
      />

      {/* Weather Widget - Always Visible */}
      <DraggableWidget
        widgetId="weather"
        initialPosition={widgetPositions.weather}
        initialSize={widgetSizes.weather}
        onPositionChange={(pos) => handleWidgetPositionChange('weather', pos)}
        onSizeChange={(size) => handleWidgetSizeChange('weather', size)}
      >
        <WeatherWidget />
      </DraggableWidget>

      {/* Streetlight Status Card - Draggable */}
      {streetlightVisible && (
        <DraggableWidget
          widgetId="streetlight"
          initialPosition={widgetPositions.streetlight}
          initialSize={widgetSizes.streetlight}
          onPositionChange={(pos) => handleWidgetPositionChange('streetlight', pos)}
          onSizeChange={(size) => handleWidgetSizeChange('streetlight', size)}
        >
          <StreetlightStatus disableInternalPositioning={true} />
        </DraggableWidget>
      )}

      {/* CCTV Status Card - Draggable */}
      {cctvVisible && (
        <DraggableWidget
          widgetId="cctv"
          initialPosition={widgetPositions.cctv}
          initialSize={widgetSizes.cctv}
          onPositionChange={(pos) => handleWidgetPositionChange('cctv', pos)}
          onSizeChange={(size) => handleWidgetSizeChange('cctv', size)}
        >
          <CCTVStatus disableInternalPositioning={true} />
        </DraggableWidget>
      )}

      {/* AI Box Detection Card - Draggable (Right Side) */}
      {aiboxVisible && (
        <DraggableWidget
          widgetId="aibox"
          initialPosition={widgetPositions.aibox}
          initialSize={widgetSizes.aibox}
          onPositionChange={(pos) => handleWidgetPositionChange('aibox', pos)}
          onSizeChange={(size) => handleWidgetSizeChange('aibox', size)}
        >
          <AIBoxDetection disableInternalPositioning={true} />
        </DraggableWidget>
      )}

      {/* Compound Chart Card - Draggable */}
      {compoundVisible && (
        <DraggableWidget
          widgetId="compound"
          initialPosition={widgetPositions.compound}
          initialSize={widgetSizes.compound}
          onPositionChange={(pos) => handleWidgetPositionChange('compound', pos)}
          onSizeChange={(size) => handleWidgetSizeChange('compound', size)}
        >
          <CompoundChart disableInternalPositioning={true} />
        </DraggableWidget>
      )}

      {/* Tax Analytics Card - Draggable */}
      {taxVisible && (
        <DraggableWidget
          widgetId="tax"
          initialPosition={widgetPositions.tax}
          initialSize={widgetSizes.tax}
          onPositionChange={(pos) => handleWidgetPositionChange('tax', pos)}
          onSizeChange={(size) => handleWidgetSizeChange('tax', size)}
        >
          <TaxAnalytics disableInternalPositioning={true} />
        </DraggableWidget>
      )}

      {/* Example Widget - Top Right (Demonstrates Widget Container) */}
      <ExampleWidget
        defaultVisible={widgetVisible}
        onVisibilityChange={(visible) => {
          setWidgetVisible(visible);
        }}
        streetlightVisible={streetlightVisible}
        onStreetlightVisibilityChange={(visible) => setStreetlightVisible(visible)}
        compoundVisible={compoundVisible}
        onCompoundVisibilityChange={(visible) => setCompoundVisible(visible)}
        taxVisible={taxVisible}
        onTaxVisibilityChange={(visible) => setTaxVisible(visible)}
        aiboxVisible={aiboxVisible}
        onAiboxVisibilityChange={(visible) => setAiboxVisible(visible)}
        cctvVisible={cctvVisible}
        onCctvVisibilityChange={(visible) => setCctvVisible(visible)}
        onSavePreferences={saveCurrentPreferences}
      />

      {/* Main Content - Google Map - Full Screen Behind Header */}
      <main className="relative pt-0">
        <div 
          className="w-full bg-muted" 
          style={{ 
            width: '100%',
            height: 'calc(100vh - 40px)',
            minHeight: '600px',
            position: 'relative',
            marginTop: '0'
          }}
        >
          <GoogleMap 
            showLandmarks={landmarksEnabled}
            showBlokPerancangan={blokPerancanganEnabled}
            showBridge={bridgeEnabled}
            showCCTV={cctvEnabled}
            showChartingKm={chartingKmEnabled}
            showConstructedSlope={constructedSlopeEnabled}
            showDrainage={drainageEnabled}
            showEarthWork={earthWorkEnabled}
            showFeederPillar={feederPillarEnabled}
            showFlexiblePost={flexiblePostEnabled}
            showGtmix={gtmixEnabled}
            showSempadanTaman={sempadanTamanEnabled}
            showGtnhSemasa={gtnhSemasaEnabled}
            showJalan={jalanEnabled}
            showJalanKejuruteraan={jalanKejuruteraanEnabled}
            showKomitedKm={komitedKmEnabled}
            showLocationMapAset={locationMapAsetEnabled}
            showLocationMapAsetItem={locationMapAsetItemEnabled}
            showLokasiBanjir={lokasiBanjirEnabled}
            showNdcdb20={ndcdb20Enabled}
            showNdcdb23={ndcdb23Enabled}
            showPasarAwam={pasarAwamEnabled}
            showPasarMalam={pasarMalamEnabled}
            showPasarSari={pasarSariEnabled}
            showPasarTani={pasarTaniEnabled}
            showRoadHump={roadHumpEnabled}
            showRoadMarkingLinear={roadMarkingLinearEnabled}
            showRoadMarkingPoint={roadMarkingPointEnabled}
            showRoadMedian={roadMedianEnabled}
            showRoadShoulder={roadShoulderEnabled}
            showSampahHaram={sampahHaramEnabled}
            showSempadanDaerah={sempadanDaerahEnabled}
            showSignboard={signboardEnabled}
            showSportFacility={sportFacilityEnabled}
            showStreetLighting={streetLightingEnabled}
            showLoranetStreetlight={loranetStreetlightEnabled}
            showTamanPerumahan={tamanPerumahanEnabled}
            showTrafficLight={trafficLightEnabled}
            showWartaKawasanLapang={wartaKawasanLapangEnabled}
            showZonAhliMajlis={zonAhliMajlisEnabled}
            onMapLoad={() => {
              console.log('Map loaded successfully');
              // Trigger resize after map loads to ensure it fills container
              setTimeout(() => {
                if (typeof window !== 'undefined' && window.google?.maps) {
                  // This will be handled by the map component's resize handler
                }
              }, 200);
            }}
            onMapError={(error) => setMapError(error)}
          />
                          </div>
      </main>

      {/* News Ticker Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-t-2 border-primary-foreground/20">
        <div className="flex items-center h-10 overflow-hidden">
          <div className="flex-shrink-0 px-4 py-2 bg-primary-foreground/10 font-bold text-sm flex items-center gap-2 border-r border-primary-foreground/20">
            <Radio className="h-4 w-4 animate-pulse" />
            <span>LIVE UPDATES</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            {isLoadingNews ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-sm text-primary-foreground/70">Loading news...</span>
              </div>
            ) : newsItems.length > 0 ? (
              <div className="animate-ticker flex gap-12 whitespace-nowrap py-2">
                {/* Duplicate the news items for seamless loop */}
                {[...newsItems, ...newsItems].map((item, index) => (
                  <div key={index} className="inline-flex items-center gap-2">
                    <span className="text-sm font-medium">•</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-sm text-primary-foreground/70">No news updates at this time</span>
              </div>
            )}
          </div>
                  </div>
      </footer>

      {/* Add ticker animation styles */}
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
}
