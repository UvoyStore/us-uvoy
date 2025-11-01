"use client"

import { useSidebar } from "@/contexts/sidebar-context"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"

export default function MessagesPage() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div className="flex h-screen bg-[#fcfdfd] flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <Header title="Messages" subtitle="Your conversations" />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
          <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
            <CardContent className="py-12 text-center">
              <p className="text-sm md:text-base text-gray-500">No messages yet</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
