/**
 * Helper to resolve static assets in the public directory,
 * ensuring they load correctly on localhost, custom domains, and GitHub Pages subfolders.
 */
export function getAssetPath(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;

  if (typeof window !== 'undefined') {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const knownRoutes = ['about', 'policies', 'publications', 'for-authors', 'editorial-board', 'contact', 'articles'];

    // If first path segment is not a page route, it's the GitHub repository name (e.g. /October/)
    if (segments.length > 0 && !knownRoutes.includes(segments[0])) {
      const repo = segments[0];
      return `/${repo}/${clean}`;
    }
  }

  return `/${clean}`;
}
