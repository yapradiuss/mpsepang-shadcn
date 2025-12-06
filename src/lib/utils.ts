import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the API base URL.
 * Uses relative path in browser (which will be proxied via Next.js rewrites)
 * Falls back to environment variable or default HTTP URL for server-side or explicit overrides
 */
export function getApiBaseUrl(): string {
  // If explicitly set via environment variable, use it
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // In browser, use relative path which will be proxied via Next.js rewrites
  if (typeof window !== 'undefined') {
    return '';
  }
  
  // Server-side fallback
  return 'http://43.216.228.155:3001';
}
