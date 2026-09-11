"use client"

import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="pt-2 pb-4 pl-0 pr-4">
        <Image
          src="/logo/mediapilot.png"
          alt="MediaPilot Logo"
          width={260}
          height={86}
          priority
          className="-ml-[9px] h-16 w-auto object-contain"
        />
      </SidebarHeader>
      <SidebarContent />
      <SidebarFooter />
    </Sidebar>
  )
}
