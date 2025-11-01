"use client"

import { Home, Mail, Settings, ShoppingBag, User2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/messages", label: "Messages", icon: Mail },
    { href: "/cart", label: "Cart", icon: ShoppingBag },
    { href: "/profile", label: "Profile", icon: User2 },
    { href: "/settings", label: "Settings", icon: Settings },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white border-t border-gray-200 md:hidden safe-area-inset-bottom">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full py-2 px-1 transition-colors ${
              isActive ? "text-[#415444] border-t-2 border-[#415444]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
