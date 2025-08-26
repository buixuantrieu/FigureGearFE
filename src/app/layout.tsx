import type { Metadata } from "next";
import "./globals.css";
import { InterFont } from "@/fonts";
import QueryProvider from "@/providers/query-provider";
import { NextIntlProvider } from "@/providers/next-inl-provider";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Figure Gear | Mô Hình Anime Chính Hãng Giá Tốt",
  icons: {
    icon: "/images/Logo.png",
  },
  description:
    "Figure Gear chuyên cung cấp mô hình anime chính hãng, figure Nhật Bản, PVC, resin và các phụ kiện sưu tầm với giá ưu đãi. Mua hàng nhanh, uy tín, hỗ trợ ship toàn quốc.",
  keywords: [
    "Figure Gear",
    "mô hình anime",
    "figure chính hãng",
    "figure Nhật Bản",
    "mô hình One Piece",
    "mô hình Dragon Ball",
    "mô hình Naruto",
    "figure giá rẻ",
    "anime figure shop"
  ],
  authors: [{ name: "Figure Gear Team", url: "https://figuregear.vn" }],
  creator: "Figure Gear",
  metadataBase: new URL("https://figuregear.vn"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://figuregear.vn",
    title: "Figure Gear | Mô Hình Anime Chính Hãng Giá Tốt",
    description:
      "Cửa hàng mô hình anime chính hãng, figure Nhật Bản, PVC, resin và các phụ kiện sưu tầm giá ưu đãi. Ship toàn quốc.",
    siteName: "Figure Gear",
    images: [
      {
        url: "https://figuregear.vn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Figure Gear - Mô Hình Anime Chính Hãng",
      },
    ],
  },
};

interface IRootLayoutProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: IRootLayoutProps) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${InterFont.className} bg-[#ebebe6]`}>
        <NextIntlProvider locale={locale} messages={messages}>
          <QueryProvider>
            <Toaster position="top-right" />
            {children}
          </QueryProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
