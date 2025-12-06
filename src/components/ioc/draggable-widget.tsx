"use client";

import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Move, Maximize2 } from "lucide-react";

interface DraggableWidgetProps {
  children: ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  widgetId: string;
  onPositionChange?: (position: { x: number; y: number }) => void;
  onSizeChange?: (size: { width: number; height: number }) => void;
  className?: string;
  disabled?: boolean;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export function DraggableWidget({
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize,
  widgetId,
  onPositionChange,
  onSizeChange,
  className,
  disabled = false,
  minWidth = 250,
  minHeight = 200,
  maxWidth = 1200,
  maxHeight = 900,
}: DraggableWidgetProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState<{ width: number; height: number } | null>(initialSize || null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<string | null>(null);
  
  const dragStartRef = useRef<{ x: number; y: number; posX: number; posY: number } | null>(null);
  const resizeStartRef = useRef<{ x: number; y: number; width: number; height: number; posX: number; posY: number } | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Only set position after mount to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    if (initialPosition) {
      setPosition(initialPosition);
    }
    if (initialSize) {
      setSize(initialSize);
    }
  }, []);

  // Update position when initialPosition changes (after mount)
  useEffect(() => {
    if (isMounted && initialPosition) {
      setPosition(initialPosition);
    }
  }, [initialPosition, isMounted]);

  // Update size when initialSize changes (after mount)
  useEffect(() => {
    if (isMounted && initialSize) {
      setSize(initialSize);
    }
  }, [initialSize, isMounted]);

  // Drag handlers
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (disabled || !isMounted || isResizing) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      posX: position.x,
      posY: position.y,
    };
    
    setIsDragging(true);
  }, [disabled, isMounted, position, isResizing]);

  // Resize handlers
  const handleResizeStart = useCallback((e: React.MouseEvent | React.TouchEvent, direction: string) => {
    if (disabled || !isMounted || isDragging) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const currentWidth = widgetRef.current?.offsetWidth || 300;
    const currentHeight = widgetRef.current?.offsetHeight || 200;
    
    resizeStartRef.current = {
      x: clientX,
      y: clientY,
      width: currentWidth,
      height: currentHeight,
      posX: position.x,
      posY: position.y,
    };
    
    setResizeDirection(direction);
    setIsResizing(true);
  }, [disabled, isMounted, isDragging, position]);

  // Drag movement effect
  useEffect(() => {
    if (!isDragging || !isMounted) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragStartRef.current) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const deltaX = clientX - dragStartRef.current.x;
      const deltaY = clientY - dragStartRef.current.y;
      
      let newX = dragStartRef.current.posX + deltaX;
      let newY = dragStartRef.current.posY + deltaY;
      
      // Constrain to viewport
      const padding = 10;
      const headerHeight = 64; // Header is h-16 (64px)
      const widgetWidth = widgetRef.current?.offsetWidth || 300;
      const widgetHeight = widgetRef.current?.offsetHeight || 200;
      const maxX = window.innerWidth - widgetWidth - padding;
      const maxY = window.innerHeight - widgetHeight - padding;
      const minY = headerHeight + padding; // Prevent going above/behind header
      
      newX = Math.max(padding, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));
      
      setPosition({ x: newX, y: newY });
    };

    const handleEnd = () => {
      if (dragStartRef.current && onPositionChange) {
        onPositionChange(position);
      }
      dragStartRef.current = null;
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, isMounted, onPositionChange, position]);

  // Resize movement effect
  useEffect(() => {
    if (!isResizing || !isMounted || !resizeDirection) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!resizeStartRef.current) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const deltaX = clientX - resizeStartRef.current.x;
      const deltaY = clientY - resizeStartRef.current.y;
      
      let newWidth = resizeStartRef.current.width;
      let newHeight = resizeStartRef.current.height;
      let newX = resizeStartRef.current.posX;
      let newY = resizeStartRef.current.posY;
      
      // Handle different resize directions
      if (resizeDirection.includes('e')) {
        newWidth = resizeStartRef.current.width + deltaX;
      }
      if (resizeDirection.includes('w')) {
        newWidth = resizeStartRef.current.width - deltaX;
        newX = resizeStartRef.current.posX + deltaX;
      }
      if (resizeDirection.includes('s')) {
        newHeight = resizeStartRef.current.height + deltaY;
      }
      if (resizeDirection.includes('n')) {
        newHeight = resizeStartRef.current.height - deltaY;
        newY = resizeStartRef.current.posY + deltaY;
      }
      
      // Apply constraints
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));
      
      // Fix position if resizing from top or left
      if (resizeDirection.includes('w')) {
        const widthDiff = resizeStartRef.current.width - newWidth;
        newX = resizeStartRef.current.posX + widthDiff;
      }
      if (resizeDirection.includes('n')) {
        const heightDiff = resizeStartRef.current.height - newHeight;
        newY = resizeStartRef.current.posY + heightDiff;
      }
      
      // Constrain to viewport and prevent going above/behind header
      const padding = 10;
      const headerHeight = 64; // Header is h-16 (64px)
      const maxX = window.innerWidth - newWidth - padding;
      const maxY = window.innerHeight - newHeight - padding;
      const minY = headerHeight + padding; // Prevent going above/behind header
      
      newX = Math.max(padding, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));
      
      setSize({ width: newWidth, height: newHeight });
      setPosition({ x: newX, y: newY });
    };

    const handleEnd = () => {
      if (resizeStartRef.current) {
        if (onSizeChange && size) {
          onSizeChange(size);
        }
        if (onPositionChange) {
          onPositionChange(position);
        }
      }
      resizeStartRef.current = null;
      setResizeDirection(null);
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isResizing, isMounted, resizeDirection, onSizeChange, onPositionChange, size, position, minWidth, minHeight, maxWidth, maxHeight]);

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="absolute" style={{ left: '0px', top: '0px' }}>
        {children}
      </div>
    );
  }

  const isActive = isDragging || isResizing;

  return (
    <div
      ref={widgetRef}
      className={cn(
        "absolute group",
        isActive ? "z-[200]" : "z-[90]",
        className
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: size ? `${size.width}px` : 'auto',
        height: size ? `${size.height}px` : 'auto',
        transform: isDragging ? "scale(1.01)" : "scale(1)",
        transition: isActive ? "none" : "transform 0.2s ease",
        userSelect: isActive ? "none" : "auto",
      }}
    >
      {/* Drag Handle - Top center */}
      {!disabled && (
        <div
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 z-[100]",
            "flex items-center gap-1 px-3 py-1.5",
            "bg-slate-800 text-white rounded-full shadow-lg",
            "cursor-move select-none",
            "hover:bg-slate-700 active:bg-slate-900",
            "transition-colors duration-150"
          )}
          style={{ touchAction: "none" }}
        >
          <Move className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">Drag</span>
        </div>
      )}
      
      {/* Resize Handles */}
      {!disabled && (
        <>
          {/* Corner handles */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            onTouchStart={(e) => handleResizeStart(e, 'se')}
            className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize z-[100] group-hover:opacity-100 opacity-0 transition-opacity"
            style={{ touchAction: "none" }}
          >
            <div className="absolute bottom-1 right-1 w-4 h-4 flex items-center justify-center">
              <Maximize2 className="h-3 w-3 text-slate-600 rotate-90" />
            </div>
          </div>
          
          <div
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
            onTouchStart={(e) => handleResizeStart(e, 'sw')}
            className="absolute bottom-0 left-0 w-6 h-6 cursor-sw-resize z-[100] group-hover:opacity-100 opacity-0 transition-opacity"
            style={{ touchAction: "none" }}
          />
          
          <div
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
            onTouchStart={(e) => handleResizeStart(e, 'ne')}
            className="absolute top-0 right-0 w-6 h-6 cursor-ne-resize z-[100] group-hover:opacity-100 opacity-0 transition-opacity"
            style={{ touchAction: "none" }}
          />
          
          <div
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
            onTouchStart={(e) => handleResizeStart(e, 'nw')}
            className="absolute top-0 left-0 w-6 h-6 cursor-nw-resize z-[100] group-hover:opacity-100 opacity-0 transition-opacity"
            style={{ touchAction: "none" }}
          />
          
          {/* Edge handles */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'e')}
            onTouchStart={(e) => handleResizeStart(e, 'e')}
            className="absolute top-1/4 right-0 w-2 h-1/2 cursor-e-resize z-[100] group-hover:bg-slate-400/30 rounded-l transition-colors"
            style={{ touchAction: "none" }}
          />
          
          <div
            onMouseDown={(e) => handleResizeStart(e, 'w')}
            onTouchStart={(e) => handleResizeStart(e, 'w')}
            className="absolute top-1/4 left-0 w-2 h-1/2 cursor-w-resize z-[100] group-hover:bg-slate-400/30 rounded-r transition-colors"
            style={{ touchAction: "none" }}
          />
          
          <div
            onMouseDown={(e) => handleResizeStart(e, 's')}
            onTouchStart={(e) => handleResizeStart(e, 's')}
            className="absolute bottom-0 left-1/4 w-1/2 h-2 cursor-s-resize z-[100] group-hover:bg-slate-400/30 rounded-t transition-colors"
            style={{ touchAction: "none" }}
          />
          
          <div
            onMouseDown={(e) => handleResizeStart(e, 'n')}
            onTouchStart={(e) => handleResizeStart(e, 'n')}
            className="absolute top-0 left-1/4 w-1/2 h-2 cursor-n-resize z-[100] group-hover:bg-slate-400/30 rounded-b transition-colors"
            style={{ touchAction: "none" }}
          />
        </>
      )}
      
      {/* Widget Content */}
      <div 
        className={cn(
          "w-full h-full overflow-hidden",
          isActive && "opacity-90"
        )}
        style={{ pointerEvents: isActive ? 'none' : 'auto' }}
      >
        {children}
      </div>
    </div>
  );
}
