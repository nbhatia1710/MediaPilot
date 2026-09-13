"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navSections = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: "/icons/glass/dashboard.svg" },
    ],
  },
  {
    title: "Press Releases",
    items: [
      { title: "My Releases", url: "/releases", icon: "/icons/glass/releases.svg" },
      { title: "Submit Releases", url: "/releases/new", icon: "/icons/glass/submit.svg" },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

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
      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      render={<Link href={item.url} />}
                      isActive={pathname === item.url}
                      size="lg"
                      className="h-14 gap-3 px-4 text-base"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-950 ring-1 ring-white/10">
                        <Image
                          src={item.icon}
                          alt=""
                          width={24}
                          height={24}
                          unoptimized
                          className="size-6"
                        />
                      </span>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
