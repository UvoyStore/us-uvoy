"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function SettingsSections() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Notification Settings */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Email Notifications</p>
              <p className="text-xs md:text-sm text-gray-500">Receive email updates about your orders</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">SMS Notifications</p>
              <p className="text-xs md:text-sm text-gray-500">Receive SMS updates about your orders</p>
            </div>
            <Switch />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Marketing Emails</p>
              <p className="text-xs md:text-sm text-gray-500">Receive promotional offers and updates</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg">Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Two-Factor Authentication</p>
              <p className="text-xs md:text-sm text-gray-500">Add an extra layer of security</p>
            </div>
            <Button variant="outline" className="rounded-lg bg-transparent w-full sm:w-auto text-sm md:text-base">
              Enable
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Change Password</p>
              <p className="text-xs md:text-sm text-gray-500">Update your password regularly</p>
            </div>
            <Button variant="outline" className="rounded-lg bg-transparent w-full sm:w-auto text-sm md:text-base">
              Change
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Dark Mode</p>
              <p className="text-xs md:text-sm text-gray-500">Use dark theme for the app</p>
            </div>
            <Switch />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Show Product Recommendations</p>
              <p className="text-xs md:text-sm text-gray-500">Display personalized recommendations</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-red-50">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-base md:text-lg text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm md:text-base font-medium">Delete Account</p>
              <p className="text-xs md:text-sm text-gray-500">Permanently delete your account and data</p>
            </div>
            <Button variant="destructive" className="rounded-lg w-full sm:w-auto text-sm md:text-base">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
