import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/providers/Providers";

export const metadata: Metadata = {
  title: "macaan | ai",
  description: "macaan ai description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
