export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
};

export const scrollBehavior = (): ScrollBehavior => {
  return prefersReducedMotion() ? 'auto' : 'smooth';
};
