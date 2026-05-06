import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praise Center Ministry | A Place of Love and Faith",
  description: "Welcome to Praise Center Ministry. Join our spiritually enriching community and experience the unconditional love of God through powerful worship, life-changing teachings, and genuine fellowship.",
  keywords: ["church", "praise center", "ministry", "worship", "faith", "christian", "community", "prayer"],
  authors: [{ name: "Praise Center Ministry" }],
  icons: {
    icon: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778069021/Untitled_10_dce73h.png",
  },
  openGraph: {
    title: "Praise Center Ministry | A Place of Love and Faith",
    description: "Welcome to Praise Center Ministry. Join our spiritually enriching community and experience the unconditional love of God through powerful worship, life-changing teachings, and genuine fellowship.",
    url: "https://praisecenter.org",
    siteName: "Praise Center Ministry",
    images: [
      {
        url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png",
        width: 800,
        height: 600,
        alt: "Praise Center Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praise Center Ministry | A Place of Love and Faith",
    description: "Welcome to Praise Center Ministry. Join our spiritually enriching community and experience the unconditional love of God through powerful worship, life-changing teachings, and genuine fellowship.",
    images: ["https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
