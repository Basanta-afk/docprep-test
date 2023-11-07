import {
  Building2,
  FileText,
  Landmark,
  LayoutDashboard,
  ReplaceAll,
  SlidersHorizontal,
} from "lucide-react";

export const adminLayoutItems = [
  {
    icon: <LayoutDashboard size={40} />,
    name: "Dashboard",
    path: "/admin",
  },
  {
    icon: <Landmark size={40} />,
    name: "BFI",
    path: "/admin/bfi",
  },

  {
    icon: <Building2 size={40} />,
    name: "SME",
    path: "/admin/sme",
  },
  {
    icon: <FileText size={40} />,
    name: "Application",
    path: "/admin/application",
  },
  {
    icon: <SlidersHorizontal size={40} />,
    name: "CMS",
    path: "/admin/cms",
  },
];
