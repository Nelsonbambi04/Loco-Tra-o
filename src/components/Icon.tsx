import {
  Award,
  Users,
  Cpu,
  HardHat,
  Compass,
  ClipboardCheck,
  Map,
  GraduationCap,
  Target,
  Eye,
  Gem,
  Ruler,
  Lightbulb,
  Clock,
  ShieldCheck,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Printer,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  award: Award,
  users: Users,
  cpu: Cpu,
  "hard-hat": HardHat,
  compass: Compass,
  "clipboard-check": ClipboardCheck,
  map: Map,
  "graduation-cap": GraduationCap,
  target: Target,
  eye: Eye,
  gem: Gem,
  ruler: Ruler,
  lightbulb: Lightbulb,
  clock: Clock,
  shield: ShieldCheck,
  handshake: Handshake,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  printer: Printer,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Award;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
