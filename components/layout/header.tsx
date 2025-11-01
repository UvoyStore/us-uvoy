"use client"

import { Bell, Search } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSidebar } from "@/contexts/sidebar-context"

interface HeaderProps {
  isCartOpen?: boolean
  onToggleCart?: () => void
  title?: string
  subtitle?: string
  showBrandText?: boolean
}

export function Header({ isCartOpen = true, onToggleCart, title, subtitle, showBrandText = false }: HeaderProps) {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-[#fcfdfd] px-4 md:px-8 border-b h-20 safe-area-inset-top">
      <div className="flex items-center gap-4">
        <button
          onClick={() => toggleSidebar()}
          className="md:hidden flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle sidebar"
        >
          <Image src="/uvoy-logo.png" alt="Uvoy" width={32} height={32} className="object-contain" />
          {showBrandText && <span className="text-lg font-bold text-[#415444]">Uvoy</span>}
        </button>
        {showBrandText && (
          <div className="hidden md:flex items-center gap-2">
            <Image src="/uvoy-logo.png" alt="Uvoy" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-[#415444]">Uvoy</span>
          </div>
        )}
        {title && (
          <div className="space-y-1 min-w-0">
            <h2 className="text-lg md:text-2xl font-bold truncate">{title}</h2>
            {subtitle && <p className="text-xs md:text-sm text-gray-600 truncate">{subtitle}</p>}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        <div className="hidden sm:flex relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="w-40 md:w-64 pl-10 text-sm" placeholder="Search destination" />
        </div>
        <Button size="icon" variant="ghost" className="hidden sm:flex">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
          <AvatarImage src="/images/design-mode/dd.jpg.jpeg" alt="User avatar" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>

        {onToggleCart && (
          <button
            onClick={onToggleCart}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-gray-300 bg-transparent hover:bg-gray-100 transition-colors flex items-center justify-center flex-shrink-0"
            aria-label={isCartOpen ? "Close cart" : "Open cart"}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-6"
            >
              <path
                d={isCartOpen ? "M9 5L15 12L9 19" : "M15 5L9 12L15 19"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  )
}
