import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guglex Technologies - Innovating Tomorrow's Technology Today",
  description:
    "Transform your business with cutting-edge technology solutions. Web development, mobile apps, cloud solutions, AI/ML, and more. 7 years of experience, 22 projects completed.",
  keywords:
    "technology solutions, web development, mobile apps, cloud services, AI, machine learning, software development",
  icons: {
    icon: [
      { url: "/favicon/icon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/icon1.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/favicon/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/manifest.json",
  other: {
    "facebook-domain-verification": "q4ga7k3y5i0busmqpm7744flbxvo67",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
