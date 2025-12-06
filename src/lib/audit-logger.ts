/**
 * Audit Logger Utility
 * Logs user activities to the backend audit trail API
 */

// Use relative path in browser (proxied via Next.js rewrites) to avoid mixed content issues
const API_BASE_URL = typeof window !== 'undefined' 
  ? '' // Browser: use relative path (proxied)
  : (process.env.NEXT_PUBLIC_API_URL || 'http://43.216.228.155:3001'); // Server-side fallback

export type ActionType = 
  | "CREATE" 
  | "UPDATE" 
  | "DELETE" 
  | "VIEW" 
  | "LOGIN" 
  | "LOGOUT" 
  | "PERMISSION_CHANGE"
  | "SETTINGS_CHANGE";

export type ActionCategory = "USER" | "SYSTEM" | "SECURITY" | "DATA";

export interface AuditLogData {
  user_id?: string;
  user_name?: string;
  user_email?: string;
  action: ActionType;
  category: ActionCategory;
  resource?: string;
  description?: string;
  ip_address?: string;
  user_agent?: string;
  status?: "SUCCESS" | "FAILED";
  metadata?: Record<string, any>;
}

/**
 * Get current user info from localStorage or session
 * This should be replaced with your actual auth system
 */
const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  
  // Try to get user from localStorage (adjust based on your auth system)
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
  } catch (e) {
    // Ignore parse errors
  }
  
  return {
    id: 'anonymous',
    name: 'Anonymous User',
    email: 'anonymous@example.com',
  };
};

/**
 * Get client IP address (will be determined by backend)
 */
const getClientInfo = () => {
  if (typeof window === 'undefined') return { ip: undefined, userAgent: undefined };
  
  return {
    ip: undefined, // Will be determined by backend from request
    userAgent: navigator.userAgent,
  };
};

/**
 * Log an activity to the audit trail
 */
export const logActivity = async (data: AuditLogData): Promise<void> => {
  try {
    const user = getCurrentUser();
    const clientInfo = getClientInfo();
    
    const logData: AuditLogData = {
      ...data,
      user_id: data.user_id || user?.id,
      user_name: data.user_name || user?.name,
      user_email: data.user_email || user?.email,
      ip_address: data.ip_address || clientInfo.ip,
      user_agent: data.user_agent || clientInfo.userAgent,
      status: data.status || 'SUCCESS',
    };

    // Fire and forget - don't block the UI
    fetch(`${API_BASE_URL}/api/audit-trail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData),
    }).catch((error) => {
      // Silently fail - don't interrupt user experience
      console.error('Failed to log activity:', error);
    });
  } catch (error) {
    // Silently fail
    console.error('Error in logActivity:', error);
  }
};

/**
 * Log a page view
 */
export const logPageView = (pagePath: string, pageTitle?: string): void => {
  logActivity({
    action: 'VIEW',
    category: 'DATA',
    resource: pagePath,
    description: `Viewed page: ${pageTitle || pagePath}`,
  });
};

/**
 * Log a user action
 */
export const logUserAction = (
  action: ActionType,
  category: ActionCategory,
  resource: string,
  description: string,
  metadata?: Record<string, any>
): void => {
  logActivity({
    action,
    category,
    resource,
    description,
    metadata,
  });
};

