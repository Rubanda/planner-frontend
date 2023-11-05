import { type SidebarNavItem } from "@/types"

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
     {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      items: [],
    },
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "user",
      items: [],
    },
    {
      title: "Task",
      href: "/dashboard/task",
      icon: "media",
      items: [],
    },
    // {
    //   title: "Billing",
    //   href: "/dashboard/billing",
    //   icon: "credit",
    //   items: [],
    // },
    // {
    //   title: "Purchases",
    //   href: "/dashboard/purchases",
    //   icon: "dollarSign",
    //   items: [],
    // },
  ],
}