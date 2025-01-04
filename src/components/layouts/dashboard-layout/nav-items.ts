import {
  Home,
  FileText,
  Headphones,
  Users,
  Archive,
  UserCog,
  LifeBuoy,
  Settings,
  LayoutGrid,
} from "lucide-react";

export const navItems = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Create A Job",
    icon: FileText,
    href: "/create-job",
  },
  {
    label: "Manage Jobs",
    icon: LayoutGrid,
    href: "/manage-jobs",
  },
  {
    label: "Create An Interview",
    icon: Headphones,
    href: "/create-interview",
  },
  {
    label: "Active Jobs",
    icon: Users,
    href: "/active-jobs",
  },
  {
    label: "Archived Jobs",
    icon: Archive,
    href: "/archived-jobs",
  },
  {
    label: "User Manager",
    icon: UserCog,
    href: "/user-manager",
  },
  {
    label: "Support",
    icon: LifeBuoy,
    href: "/support",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];