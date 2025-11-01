"use client"

import { useSidebar } from "@/contexts/sidebar-context"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { ProfileForm } from "@/components/profile/profile-form"

export default function ProfilePage() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div className="flex h-screen bg-[#fcfdfd] flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <Header title="My Profile" subtitle="Manage your profile information" />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
          <div className="max-w-2xl">
            <ProfileForm />
          </div>
        </main>
      </div>
    </div>
  )
}
