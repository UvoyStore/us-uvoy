"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileForm() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Profile Picture Section */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg">Profile Picture</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <Avatar className="h-20 w-20 md:h-24 md:w-24">
              <AvatarImage src="/images/design-mode/dd.jpg.jpeg" alt="User avatar" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Button className="bg-[#415444] hover:bg-[#415444]/90 w-full sm:w-auto text-sm md:text-base">
              Change Picture
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="mb-2 block text-xs md:text-sm font-medium">First Name</label>
              <Input placeholder="Dollar" className="rounded-lg text-sm" />
            </div>
            <div>
              <label className="mb-2 block text-xs md:text-sm font-medium">Last Name</label>
              <Input placeholder="Smith" className="rounded-lg text-sm" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs md:text-sm font-medium">Email</label>
            <Input placeholder="dollar@example.com" type="email" className="rounded-lg text-sm" />
          </div>
          <div>
            <label className="mb-2 block text-xs md:text-sm font-medium">Phone</label>
            <Input placeholder="+1 (555) 000-0000" className="rounded-lg text-sm" />
          </div>
          <Button className="w-full bg-[#415444] hover:bg-[#415444]/90 text-sm md:text-base">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Address Information */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg">Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div>
            <label className="mb-2 block text-xs md:text-sm font-medium">Street Address</label>
            <Input placeholder="123 Main Street" className="rounded-lg text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="mb-2 block text-xs md:text-sm font-medium">City</label>
              <Input placeholder="New York" className="rounded-lg text-sm" />
            </div>
            <div>
              <label className="mb-2 block text-xs md:text-sm font-medium">State</label>
              <Input placeholder="NY" className="rounded-lg text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="mb-2 block text-xs md:text-sm font-medium">Zip Code</label>
              <Input placeholder="10001" className="rounded-lg text-sm" />
            </div>
            <div>
              <label className="mb-2 block text-xs md:text-sm font-medium">Country</label>
              <Input placeholder="United States" className="rounded-lg text-sm" />
            </div>
          </div>
          <Button className="w-full bg-[#415444] hover:bg-[#415444]/90 text-sm md:text-base">Save Address</Button>
        </CardContent>
      </Card>
    </div>
  )
}
