export type ThemeMode = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'kavinkumar_portfolio_theme';

export function getNextTheme(current: ThemeMode): ThemeMode {
  return current === 'light' ? 'dark' : 'light';
}

export function resolveInitialTheme(
  storedTheme: string | null | undefined,
  systemPrefersDark: boolean
): ThemeMode {
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  return systemPrefersDark ? 'dark' : 'light';
}

export function applyThemeToDocument(theme: ThemeMode): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
  } else {
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
  }
}
