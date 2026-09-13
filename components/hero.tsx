"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col gap-16 items-center justify-center py-2 lg:pt-8"
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
      <div className="relative">
        <Image
          src="/images/templates/axis/hero.svg"
          alt="Hero"
          width={1200}
          height={800}
          className="w-full max-w-7xl h-auto rounded-xl lg:rounded-[2.5rem]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div className="max-md:hidden absolute bottom-0 left-0 h-12 lg:h-24 w-full dark:bg-gradient-to-b from-transparent to-background" />
      </div>
    </motion.div>
  );
};

export default Hero;
