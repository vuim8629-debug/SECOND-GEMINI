/**
 * Maps asset filenames to their resolved media URLs.
 * References assets located in src/assets/media (and served from /assets/media).
 */
export const mediaUrl = (filename: string): string => {
  return `/assets/media/${filename}`;
};

export default mediaUrl;
