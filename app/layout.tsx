import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "MediaPilot - Get Featured on 500+ Media Outlets in 48 Hours",
  description: "Guaranteed placements with live links on Yahoo Finance, Business Insider, AP News and 500+ trusted publications. Build social proof, credibility, and AI visibility.",
};

const fontSans =
  "var(--font-satoshi), ui-sans-serif, system-ui, sans-serif";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} bg-background font-light w-full text-foreground`}
        style={{ fontFamily: fontSans }}
      >
        <ClerkProvider appearance={{ theme: shadcn }}>
          <div
            className={`${satoshi.variable} min-h-screen w-full bg-background font-light text-foreground`}
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
        </ClerkProvider>
      </body>
    </html>
  );
}
