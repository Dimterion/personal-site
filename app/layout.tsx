import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollBtn from "@/components/scroll-btn";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Dimterion's personal site",
  description:
    "A personal site of Dimterion, technical consultant and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.variable,
          playfair.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <ScrollBtn />
        </Providers>
      </body>
    </html>
  );
}
