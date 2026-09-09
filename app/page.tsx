"use client";

import BlurredOrb from "@/components/blurred-orb";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Companies from "@/components/companies";
import Feature from "@/components/feature";
import ToolFeature from "@/components/tools";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <div className="relative px-4 py-6 mx-auto w-full overflow-hidden">
      <Navbar />
      <BlurredOrb
        className="absolute top-0 left-0 h-[45rem] w-[45rem] lg:h-[65rem] lg:w-[65rem] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[7.5rem]"
        style={{
          background: `radial-gradient(circle at center, var(--color-hero-start) 00%, var(--color-hero-mid) 100%, var(--color-hero-end) 100%)`,
        }}
      />
      <div className="flex flex-col gap-24 lg:gap-44 mt-32 mb-14 lg:my-28  mx-auto w-full">
        <div className="flex flex-col gap-24 lg:gap-12">
          <Hero />
          <Companies />
        </div>
        <Feature />
        <ToolFeature />
        <Stats />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
