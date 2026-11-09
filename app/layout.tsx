import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marage-inv.vercel.app"),
  title: "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா | திருமண அழைப்பிதழ் - Wedding Invitation",
  description:
    "நிகழும் மங்களகரமான ஸ்ரீ பராபவ வருடம் கார்த்திகை மாதம் 4-ம் நாள் (20-11-2026) வெள்ளிக்கிழமை அம்மாபேட்டை ஸ்ரீ பட்டீஸ்வரர் திருக்கோவில் & அயோத்தியாப்பட்டணம் அன்னை கஸ்தூரிபா திருமண மண்டபத்தில் நடைபெறும் P. ஸ்ரீ ராமச்சந்திரன் (எ) பீம் & S. கோபிகா திருமண அழைப்பிதழ்.",
  authors: [{ name: "இரு இல்லங்களின் இனிய அழைப்பு" }],
  openGraph: {
    title: "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா | திருமண அழைப்பிதழ்",
    description:
      "20-11-2026 வெள்ளிக்கிழமை அதிகாலை 4:30 - 6:00 மணிக்குள் பிரம்ம முகூர்த்தத்தில் திருமணம் மற்றும் காலை 7:00 மணி முதல் வரவேற்பு & விருந்து.",
    url: "https://marage-inv.vercel.app/",
    siteName: "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா திருமண அழைப்பிதழ்",
    images: [
      {
        url: "/images/invitation-share.jpg",
        width: 1200,
        height: 630,
        alt: "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா திருமண அழைப்பிதழ்",
        type: "image/jpeg",
      },
    ],
    locale: "ta_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா | திருமண அழைப்பிதழ்",
    description:
      "20-11-2026 வெள்ளிக்கிழமை அம்மாபேட்டை பட்டீஸ்வரர் கோவில் திருமணம் மற்றும் அயோத்தியாப்பட்டணம் மண்டபத்தில் வரவேற்பு.",
    images: ["/images/invitation-share.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#6b0508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arima:wght@400;500;600;700&family=Noto+Serif+Tamil:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#3f000b] text-[#ffdfaf] antialiased selection:bg-[#f2c06e] selection:text-[#6b0508]">
        {children}
      </body>
    </html>
  );
}
