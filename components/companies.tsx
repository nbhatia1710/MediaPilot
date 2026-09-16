"use client";

import { motion } from "motion/react";

function LogoAdKit() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="h-5 w-5 text-muted-foreground/80" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-muted-foreground/90">AdKit</span>
    </div>
  );
}

function LogoVoxfor() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="h-6 w-6 text-muted-foreground/80" viewBox="0 0 32 32" fill="currentColor">
        <path d="M22 10a7 7 0 0 0-13.6-1.7A5 5 0 0 0 4 13a5 5 0 0 0 3.5 4.8A6.5 6.5 0 0 0 14 24h9a5 5 0 0 0 1-9.9A7 7 0 0 0 22 10z" />
        <circle cx="14" cy="14" r="2.5" className="fill-background" />
      </svg>
      <span className="text-lg font-extrabold tracking-wider text-muted-foreground/90 uppercase">VOXFOR</span>
    </div>
  );
}

function LogoMotionSocials() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="h-5 w-5 text-muted-foreground/80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h4l5 9 5-9h4v16h-4V10.5L12 19.5 7 10.5V20H3V4z" />
      </svg>
      <div className="text-lg text-muted-foreground/90">
        <span className="font-bold">Motion</span>
        <span className="font-normal text-muted-foreground/70">Socials</span>
      </div>
    </div>
  );
}

function LogoMBank() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex items-baseline gap-0.5 h-5 py-0.5">
        <div className="w-1 h-full bg-muted-foreground/80 rounded-xs" />
        <div className="w-2.5 h-full bg-muted-foreground/80 rounded-xs" />
        <div className="w-0.5 h-full bg-muted-foreground/80 rounded-xs" />
        <div className="w-1.5 h-full bg-muted-foreground/80 rounded-xs" />
        <div className="w-1 h-full bg-muted-foreground/80 rounded-xs" />
      </div>
      <span className="text-lg font-semibold tracking-tight text-muted-foreground/90">mBank</span>
    </div>
  );
}

function LogoKonstruction() {
  return (
    <div className="border border-muted-foreground/70 px-2 py-0.5 text-muted-foreground/90 flex flex-col justify-center select-none">
      <span className="text-[11px] font-black tracking-widest leading-none">KONSTRUCTION</span>
      <span className="text-[7.5px] font-bold tracking-widest leading-none text-right mt-0.5">GROUP INC.</span>
    </div>
  );
}

function LogoBitget() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="h-5 w-5 text-muted-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17V5m0 0L3 9m4-4l4 4" />
        <path d="M17 7v12m0 0l4-4m-4 4l-4-4" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-muted-foreground/90">Bitget</span>
    </div>
  );
}

const companyLogos = [
  { name: "AdKit", component: LogoAdKit },
  { name: "VOXFOR", component: LogoVoxfor },
  { name: "MotionSocials", component: LogoMotionSocials },
  { name: "mBank", component: LogoMBank },
  { name: "KONSTRUCTION GROUP INC.", component: LogoKonstruction },
  { name: "Bitget", component: LogoBitget },
];

const Companies = () => {
  // Multiply list 4 times for smooth seamless infinite scroll loop
  const logoItems = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <section className="flex flex-col gap-6 w-full py-4 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm md:text-base font-medium text-muted-foreground/80 tracking-wide">
          Trusted by 500+ companies
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max items-center gap-12 md:gap-16 lg:gap-20 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {logoItems.map((item, index) => {
            const Component = item.component;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
              >
                <Component />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;