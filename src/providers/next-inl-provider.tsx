'use client';
import { NextIntlClientProvider } from "next-intl";

interface IProvidersProps {
  children: React.ReactNode;
  messages: Record<string, unknown>;
  locale: string;
};

export function NextIntlProvider({ children, messages, locale }: IProvidersProps) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      onError={() => null}
    >
      {children}
    </NextIntlClientProvider>
  );
}
