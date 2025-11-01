import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SidebarProvider } from "@/contexts/sidebar-context"
import { BottomNav } from "@/components/layout/bottom-nav"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uvoy-US",
  description: "Premium Tote Bags - Uvoy",
  generator: "v0.app",
  icons: {
    icon: "/uvoy-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <style>{`
html {
  font-family: ${montserrat.style.fontFamily};
  --font-sans: ${montserrat.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <SidebarProvider>{children}</SidebarProvider>
        <BottomNav />
        <Analytics />
      </body>
    </html>
  )
}
