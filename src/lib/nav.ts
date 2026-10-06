import {
  BarChart3,
  BookOpen,
  Briefcase,
  GraduationCap,
  Home,
  MapPin,
  MessageCircle,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Shown in the mobile bottom bar. Keep to 5. */
  primary: boolean;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Dashboard", icon: Home, primary: true },
  { href: "/goethe", label: "Goethe Practice", icon: GraduationCap, primary: true },
  { href: "/topics", label: "Topics", icon: BookOpen, primary: true },
  { href: "/alltag", label: "Alltag", icon: MapPin, primary: true },
  { href: "/interview", label: "Interview", icon: Briefcase, primary: false },
  { href: "/conversation", label: "Conversation", icon: MessageCircle, primary: false },
  { href: "/diskussion", label: "Diskussion", icon: MessagesSquare, primary: false },
  { href: "/progress", label: "Progress", icon: BarChart3, primary: true },
];
