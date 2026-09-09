import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "MediaPilot - Get Featured on 500+ Media Outlets in 48 Hours",
  description: "Guaranteed placements with live links on Yahoo Finance, Business Insider, AP News and 500+ trusted publications. Build social proof, credibility, and AI visibility.",
};

const fontSans =
  "var(--font-inter), ui-sans-serif, system-ui, sans-serif";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background font-light w-full text-foreground`}
        style={{ fontFamily: fontSans }}
      >
        <div
          className={`${inter.variable} min-h-screen w-full bg-background font-light text-foreground`}
          style={{ fontFamily: fontSans }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
