import { Building2, FileText, LayoutDashboard, ReplaceAll } from "lucide-react";

export const mainBankItems = [
  {
    icon: <LayoutDashboard size={40} />,
    name: "Dashboard",
    path: "/bfi",
  },

  {
    icon: <FileText size={40} />,
    name: "Application",
    path: "/bfi/application",
  },

  {
    icon: <ReplaceAll size={40} />,
    name: "Branches",
    path: "/bfi/branches",
  },

  {
    icon: <Building2 size={40} />,
    name: "SME",
    path: "/bfi/sme",
  },
];
