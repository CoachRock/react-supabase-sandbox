"use client";

import { useState } from 'react';
import { UserProfileForm } from '@/components/user-profile-form';
import { UserProfileEditForm } from '@/components/user-profile-edit-form';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const mockUser = {
  name: "UsersFN UsersLN",
  role: "Hiring Manager Admin",
  avatar_url: "https://github.com/shadcn.png",
  department: "Human Resources",
  profileCreated: "November 18, 2024",
  email: "coachrock@comapany1.com",
  officePhone: "317-555-1212",
  extension: "341",
  cellPhone: "317-555-1212",
  address: "121 North Mill St.",
  city: "Plainfield",
  state: "IN",
  zipCode: "46151",
  timezone: "Eastern Standard Time (UTC-05:00)"
};

export default function UserProfile() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="relative">
      <UserProfileForm 
        user={mockUser}
        emailNotifications={emailNotifications}
        appNotifications={appNotifications}
        onEmailNotificationsChange={setEmailNotifications}
        onAppNotificationsChange={setAppNotifications}
        onEdit={() => setIsEditing(true)}
      />
      
      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent side="right" className="w-full sm:max-w-[600px] overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <UserProfileEditForm 
            user={mockUser}
            onCancel={() => setIsEditing(false)}
            onSave={(data) => {
              console.log('Save profile:', data);
              setIsEditing(false);
            }}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}