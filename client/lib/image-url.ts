/**
 * Utility to handle backend image URLs
 *
 * Converts relative paths to full URLs and fixes localhost URLs in production
 */

// Get backend API URL
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
export const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

/**
 * Get the full URL for displaying an image/media from the backend
 *
 * @param url - The URL from the database (can be relative or absolute)
 * @returns Full URL that can be used in img/video src
 *
 * @example
 * // Relative path (new format)
 * getImageUrl('/public/images/123-abc.jpg')
 * // Returns: https://api.donatebed.palliativeindia.in/public/images/123-abc.jpg
 *
 * @example
 * // Old localhost URL (legacy data)
 * getImageUrl('http://127.0.0.1:5002/public/images/123-abc.jpg')
 * // Returns: https://api.donatebed.palliativeindia.in/public/images/123-abc.jpg
 */
export function getImageUrl(url: string | undefined | null): string {
  if (!url) return '';

  // If it's an external URL (not from our backend), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    // Check if it's a localhost/dev URL that needs to be replaced
    if (url.includes('127.0.0.1') || url.includes('localhost')) {
      // Extract the path part and prepend current API_URL
      const path = url.replace(/^https?:\/\/[^/]+/, '');
      return `${API_URL}${path}`;
    }
    return url;
  }

  // If relative URL, prepend API_URL
  if (url.startsWith('/')) {
    return `${API_URL}${url}`;
  }

  // Return as-is for other cases
  return url;
}

/**
 * Check if a URL is a valid image URL from our backend
 */
export function isBackendImageUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  return url.includes('/public/images/') || url.includes('/public/video/');
}
