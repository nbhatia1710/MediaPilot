"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { Footer1, type FooterLinkGroup } from "./ui/footer-1";

const Footer = () => {
    const linkGroups: FooterLinkGroup[] = [
        {
            title: "Product",
            links: [
                { label: "Features", href: "#" },
                { label: "Usecases", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Customers", href: "#" },
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", href: "#" },
                { label: "Docs", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Support", href: "#" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Security", href: "#" },
            ],
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <Footer1
                logo={
                    <Image
                        className="h-8 w-auto object-contain"
                        src="/logo/mediapilot.png"
                        alt="MediaPilot Logo"
                        width={150}
                        height={50}
                    />
                }
                brandName="MediaPilot"
                newsletterTitle="Stay in the loop"
                newsletterDescription="Get product updates, growth playbooks, and creative tips delivered to your inbox."
                newsletterPlaceholder="Enter your email"
                newsletterButtonText="Subscribe"
                linkGroups={linkGroups}
                copyright={`© ${new Date().getFullYear()} MediaPilot. All rights reserved.`}
            />
        </motion.div>
    )
}

export default Footer
