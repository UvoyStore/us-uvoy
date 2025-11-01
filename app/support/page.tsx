"use client"

import { useSidebar } from "@/contexts/sidebar-context"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div className="flex h-screen bg-[#fcfdfd] flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <Header title="Support" subtitle="Get help and support" />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
          <div className="max-w-2xl space-y-6">
            <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
              <CardContent className="space-y-4 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold">How can we help?</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Contact our support team for any questions or issues
                </p>
                <Button className="bg-[#415444] hover:bg-[#415444]/90 w-full md:w-auto text-sm md:text-base">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
