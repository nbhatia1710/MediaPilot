"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

interface Publication {
  id: string;
  name: string;
  domain: string;
  badge: string;
  badgeType: "blue" | "green";
  logoComponent: React.ReactNode;
}

const publications: Publication[] = [
  {
    id: "sina",
    name: "Sina Hong Kong",
    domain: "sina.com.hk",
    badge: "20M viewers",
    badgeType: "blue",
    logoComponent: (
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight text-foreground">sina</span>
        <span className="text-xs text-muted-foreground font-sans">新浪香港</span>
      </div>
    ),
  },
  {
    id: "yahoo",
    name: "Yahoo! Finance",
    domain: "finance.yahoo.com",
    badge: "92 DR Score",
    badgeType: "green",
    logoComponent: (
      <div className="flex items-center gap-1">
        <span className="text-xl font-black text-[#6001d2] dark:text-[#9b51e0] tracking-tight">yahoo!</span>
        <span className="text-sm font-semibold text-muted-foreground">finance</span>
      </div>
    ),
  },
  {
    id: "bi",
    name: "Business Insider",
    domain: "businessinsider.com",
    badge: "67.9M viewers",
    badgeType: "blue",
    logoComponent: (
      <span className="text-base font-black tracking-tighter uppercase text-foreground">
        BUSINESS INSIDER
      </span>
    ),
  },
  {
    id: "ap",
    name: "AP News",
    domain: "apnews.com",
    badge: "90 DR Score",
    badgeType: "green",
    logoComponent: (
      <div className="flex items-center gap-1.5">
        <span className="bg-red-600 text-white text-xs font-extrabold px-1.5 py-0.5 rounded-xs">AP</span>
        <span className="text-base font-bold tracking-tight text-foreground">NEWS</span>
      </div>
    ),
  },
  {
    id: "marketwatch",
    name: "MarketWatch",
    domain: "marketwatch.com",
    badge: "45M viewers",
    badgeType: "blue",
    logoComponent: (
      <span className="text-lg font-bold tracking-tight text-foreground">
        MarketWatch
      </span>
    ),
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
    domain: "bloomberg.com",
    badge: "95 DR Score",
    badgeType: "green",
    logoComponent: (
      <span className="text-lg font-extrabold tracking-tight text-foreground">
        Bloomberg
      </span>
    ),
  },
  {
    id: "forbes",
    name: "Forbes",
    domain: "forbes.com",
    badge: "94 DR Score",
    badgeType: "green",
    logoComponent: (
      <span className="text-xl font-serif font-bold text-foreground">
        Forbes
      </span>
    ),
  },
];

const Hero = () => {
  // Duplicate for smooth vertical infinite marquee loop
  const scrollItems = [...publications, ...publications, ...publications];

  return (
    <motion.div
      className="flex flex-col gap-12 lg:gap-16 items-center justify-center py-2 lg:pt-8 w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-xl:gap-6 max-w-7xl lg:max-w-6xl">
        <h1 className="max-md:font-medium text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:max-w-lg xl:max-w-2xl tracking-tighter text-center lg:text-left">
          Get featured on 500+ top media outlets in 48 hours
        </h1>
        <section className="flex flex-col gap-8">
          <p className="text-md md:text-xl max-w-xl lg:max-w-md text-center lg:text-left text-muted-foreground">
            Guaranteed placements with live links on Yahoo Finance, Business Insider, AP News, and 500+ trusted publications. Build instant social proof, authority, and AI visibility.
          </p>
          <div className="flex flex-row">
            <Button className="rounded-none h-9 px-5 text-base w-full sm:w-auto font-medium shadow-sm hover:shadow-md transition-all">
              Book a call
            </Button>
          </div>
        </section>
      </section>

      {/* Custom Hero Container (Replacing original black window graphic) */}
      <div className="w-full max-w-7xl mx-auto rounded-2xl lg:rounded-[2.5rem] border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header Bar with MediaPilot Logo on Top Left */}
        <div className="flex items-center justify-between border-b border-border/60 px-6 sm:px-8 py-4 bg-muted/30">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/mediapilot.png"
              alt="MediaPilot Logo"
              width={200}
              height={66}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-background/90 px-3.5 py-1.5 rounded-full border border-border/60 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Media Distribution Network
          </div>
        </div>

        {/* Content Body: Vertical Stats Cards (Left) + Vertical Media Scroller (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 items-stretch">
          {/* Vertical Stats Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Stat Card 1 */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 text-center transition-transform hover:scale-[1.01]">
              <span className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                500+
              </span>
              <span className="text-sm sm:text-base font-semibold text-muted-foreground mt-1.5">
                Media Outlets
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 text-center transition-transform hover:scale-[1.01]">
              <span className="text-4xl sm:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                82
              </span>
              <span className="text-sm sm:text-base font-semibold text-muted-foreground mt-1.5">
                Avg DR
              </span>
            </div>

            {/* Stat Card 3 */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40 text-center transition-transform hover:scale-[1.01]">
              <span className="text-4xl sm:text-5xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tight">
                432M+
              </span>
              <span className="text-sm sm:text-base font-semibold text-muted-foreground mt-1.5">
                Readers
              </span>
            </div>
          </div>

          {/* Vertical Media Scroller Column (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3 bg-muted/20 dark:bg-muted/10 p-5 rounded-2xl border border-border/50 h-[380px] sm:h-[420px]">
            <div className="flex items-center justify-between pb-1 px-1">
              <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                Featured Publications
              </span>
              <span className="text-[11px] font-medium text-muted-foreground/80">
                Auto-updating
              </span>
            </div>

            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex flex-col gap-3"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
              >
                {scrollItems.map((pub, idx) => (
                  <div
                    key={`${pub.id}-${idx}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-background/90 dark:bg-card border border-border/70 shadow-xs hover:border-primary/40 transition-colors"
                  >
                    <div className="flex flex-col gap-0.5">
                      {pub.logoComponent}
                      <span className="text-[11px] text-muted-foreground/70 font-mono">
                        {pub.domain}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                        pub.badgeType === "green"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 4.5h4.5v4.5" />
                      </svg>
                      {pub.badge}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
