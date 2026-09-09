import { SITE } from '../data/site';

/**
 * Returns a strictly clean, absolute canonical URL.
 * Strips all query parameters (e.g. utm_source=chatgpt.com, fbclid, session IDs)
 * and hash fragments to prevent duplicate content issues.
 */
export function getCanonicalUrl(rawPathOrUrl: string | URL): string {
  let pathname = '';

  if (rawPathOrUrl instanceof URL) {
    pathname = rawPathOrUrl.pathname;
  } else if (rawPathOrUrl.startsWith('http://') || rawPathOrUrl.startsWith('https://')) {
    try {
      const parsed = new URL(rawPathOrUrl);
      pathname = parsed.pathname;
    } catch {
      pathname = rawPathOrUrl.split('?')[0].split('#')[0];
    }
  } else {
    pathname = rawPathOrUrl.split('?')[0].split('#')[0];
  }

  // Ensure pathname starts with a slash
  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`;
  }

  // Normalize duplicate slashes
  pathname = pathname.replace(/\/+/g, '/');

  // Handle root URL
  if (pathname === '/') {
    return `${SITE.url}/`;
  }

  // Preserve standard Astro clean URL without trailing slash or with trailing slash consistently.
  // In Astro static mode with trailingSlash: 'ignore' (default), pages are written to folder/index.html.
  // Standardizing: if pathname doesn't have an extension (.xml, .html, .txt), ensure no trailing slash or standard trailing slash.
  // Let's strip trailing slash for subpaths, e.g. /packages/kashmir-paradise, so it's clean and consistent.
  const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  return `${SITE.url}${cleanPath}`;
}

/**
 * Returns an absolute URL for any asset or media path.
 */
export function getAbsoluteUrl(path: string): string {
  if (!path) return `${SITE.url}/logo.webp`;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${clean}`;
}

export const ROBOTS_DIRECTIVES = {
  default: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  noindex: 'noindex, nofollow',
};
