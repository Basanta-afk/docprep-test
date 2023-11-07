import { Building2, FileText, LayoutDashboard, ReplaceAll } from "lucide-react";

export const branchBankItems = [
  {
    icon: <LayoutDashboard size={40} />,
    name: "Dashboard",
    path: "/bfi-branch",
  },

  {
    icon: <FileText size={40} />,
    name: "Application",
    path: "/bfi-branch/application",
  },

  {
    icon: <Building2 size={40} />,
    name: "SME",
    path: "/bfi-branch/sme",
  },
];
