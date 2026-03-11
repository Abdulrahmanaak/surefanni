import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surefanni.com"),
  title: 'شور فني | منصتك الذكية للسيارات',
  description: 'المنصة السعودية الذكية الشاملة لخدمات السيارات التي تتيح لك أخذ الاستشارات الفنية وتشخيص أعطالك بتقنيات الذكاء الاصطناعي، ومقارنة السيارات، وحجز أفضل ورش صيانة وسمكرة السيارات.',
  icons: {
    icon: '/public/images/logo.png',
  },
  openGraph: {
    title: 'شور فني | منصتك الذكية للسيارات',
    description: 'كل خدمات سيارتك في مكان واحد: استشارات، تشخيص ذكاء اصطناعي، تقييم حوادث، ورش صيانة. ابدأ الآن.',
    url: 'https://surefanni.com',
    siteName: 'شور فني - Surefanni',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شور فني | منصتك الذكية للسيارات',
    description: 'استشر فنياً، شخص الأعطال، واختر ورشة الصيانة المناسبة لسيارتك بكل ذكاء عبر منصة شور فني.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.variable} font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
