"use client"

import { Home, LogOut, Mail, Settings, ShoppingBag, User2, ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface SidebarProps {
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
}

export function Sidebar({ isOpen = true, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const shouldExpand = isHovered && !isOpen

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/profile", label: "Profile", icon: User2 },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/messages", label: "Message", icon: Mail },
    { href: "/cart", label: "My Cart", icon: ShoppingBag },
    { href: "/support", label: "Support", icon: User2 },
  ]

  return (
    <>
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden md:flex flex-col border-r bg-white transition-all duration-300 ease-in-out h-screen ${
          isOpen || shouldExpand ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 h-20">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${
              isOpen || shouldExpand ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src="/uvoy-logo.png" alt="Uvoy" width={40} height={40} className="h-10 w-10 flex-shrink-0" />
            <span className="whitespace-nowrap text-xl font-bold text-gray-900">Uvoy US</span>
          </div>

          {!isOpen && !shouldExpand && (
            <Image src="/uvoy-logo.png" alt="Uvoy" width={40} height={40} className="h-10 w-10 flex-shrink-0" />
          )}
        </div>

        <nav className="space-y-2 px-2 py-4 flex-1 overflow-hidden flex flex-col">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg transition-all duration-300 text-sm ${
                  isOpen || shouldExpand ? "px-3" : "justify-center px-0"
                } py-2 ${
                  isActive ? "bg-[#e0e5ce] text-[#415444]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
                title={!isOpen && !shouldExpand ? item.label : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span
                  className={`whitespace-nowrap transition-all duration-300 ${
                    isOpen || shouldExpand ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}

          <Link
            href="/logout"
            className={`flex items-center gap-3 rounded-lg transition-all duration-300 text-red-500 hover:text-red-600 hover:bg-red-50 text-sm py-2 ${
              isOpen || shouldExpand ? "px-3" : "justify-center px-0"
            }`}
            title={!isOpen && !shouldExpand ? "Logout" : undefined}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                isOpen || shouldExpand ? "opacity-100" : "opacity-0 w-0"
              }`}
            >
              Logout
            </span>
          </Link>
        </nav>

        <div className="border-t px-2 py-3 flex items-center justify-center">
          <button
            onClick={() => onToggle?.(!isOpen)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                isOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </aside>
    </>
  )
}
