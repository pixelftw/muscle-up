import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/providers";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Vianlix",
  description: "Acieve fitness goals with Vianlix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
