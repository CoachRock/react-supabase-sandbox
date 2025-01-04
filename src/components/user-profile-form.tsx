import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface UserProfileFormProps {
  user: typeof mockUser;
  emailNotifications: boolean;
  appNotifications: boolean;
  onEmailNotificationsChange: (checked: boolean) => void;
  onAppNotificationsChange: (checked: boolean) => void;
  onEdit: () => void;
}

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

const labelClasses = "font-bold text-right whitespace-nowrap w-[200px] self-start pt-1";
const valueClasses = "pl-3 min-w-0";
const rowClasses = "grid grid-cols-[200px_1fr] items-start gap-y-4";

export function UserProfileForm({
  user,
  emailNotifications,
  appNotifications,
  onEmailNotificationsChange,
  onAppNotificationsChange,
  onEdit
}: UserProfileFormProps) {
  return (
    <div className="space-y-6">
      <PageHeader 
        heading="User Profile Details" 
        description="View and manage your profile information" 
      />
      
      <Card>
        <CardContent className="p-6">
          {/* Profile header section */}
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 border-2 border-primary/10">
              <AvatarImage 
                src={user.avatar_url}
                alt={user.name}
              />
              <AvatarFallback className="text-4xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold m-0">{user.name}</h2>
              <p className="text-lg dark:text-white text-muted-foreground m-0">{user.role}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">Department:</span>
                <span>{user.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Profile Created:</span>
                <span>{user.profileCreated}</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-500 underline m-0">Contact Information</h3>
            <div className={rowClasses}>
              <Label className={labelClasses}>E-Mail Address:</Label>
              <div className={valueClasses}>{user.email}</div>
              
              <Label className={labelClasses}>Office Phone Number:</Label>
              <div className={valueClasses}>
                {user.officePhone}
                <span className="ml-2">Ext: {user.extension}</span>
              </div>
              
              <Label className={labelClasses}>Cell Phone Number:</Label>
              <div className={valueClasses}>{user.cellPhone}</div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Office Location Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-500 underline m-0">Office Location</h3>
            <div className={rowClasses}>
              <Label className={labelClasses}>Address:</Label>
              <div className={valueClasses}>
                <p className="m-0">{user.address}</p>
                <p className="m-0">{user.city}, {user.state} {user.zipCode}</p>
              </div>
              
              <Label className={labelClasses}>My Local Time Zone:</Label>
              <div className={valueClasses}>
                <span className="font-bold">EST:</span> {user.timezone}
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Preferences Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-500 underline m-0">Preferences</h3>
            <div className={rowClasses}>
              <Label className={labelClasses}>Enable E-Mail Notifications:</Label>
              <div className={`${valueClasses} flex items-center`}>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={onEmailNotificationsChange}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>
              
              <Label className={labelClasses}>Enable App Notifications:</Label>
              <div className={`${valueClasses} flex items-center`}>
                <Switch
                  checked={appNotifications}
                  onCheckedChange={onAppNotificationsChange}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Edit Profile Button Section */}
          <div className={rowClasses}>
            <div className={labelClasses}></div>
            <div className={`${valueClasses} flex justify-end`}>
              <Button 
                className="bg-blue-500 hover:bg-blue-600"
                onClick={onEdit}
              >
                Edit My Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}