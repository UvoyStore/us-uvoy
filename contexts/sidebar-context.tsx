"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface SidebarContextType {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarOpen")
    if (savedState !== null) {
      setIsSidebarOpen(JSON.parse(savedState))
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen))
    }
  }, [isSidebarOpen, isHydrated])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
