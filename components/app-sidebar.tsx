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
      <SidebarHeader className="px-4 py-3">
        <Image
          src="/logo/mediapilot.png"
          alt="MediaPilot Logo"
          width={160}
          height={53}
          priority
          className="h-8 w-auto object-contain"
        />
      </SidebarHeader>
      <SidebarContent />
      <SidebarFooter />
    </Sidebar>
  )
}
