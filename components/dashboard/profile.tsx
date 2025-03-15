// FILE: pages/driver/profile.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarDrive } from "@/components/dashboard/driverside";

const ProfileSettings = () => {
  return (
    <div className="flex">
      <SidebarDrive />
      <div className="ml-64 p-4 w-full bg-white text-black">
        <div className="flex flex-col items-center">
          <Card className="w-full md:w-2/3 lg:w-1/2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <Input type="text" placeholder="John Doe" className="mt-1 block w-full" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="mt-1 block w-full" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Input type="tel" placeholder="+1234567890" className="mt-1 block w-full" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <Input type="password" placeholder="********" className="mt-1 block w-full" />
                </div>
                <Button type="submit" className="mt-4">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;