import { useTranslations } from "next-intl";

export function useSafeTranslate(namespace?: string) {
  const t = useTranslations(namespace);

  const safeT = (key: string, options?: Record<string, unknown>) =>
    t(key, { defaultMessage: key, ...options });
  return { t: safeT };
}