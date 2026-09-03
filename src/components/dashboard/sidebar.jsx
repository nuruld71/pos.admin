"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Truck,
  BarChart3,
  Boxes,
  Settings,
  Store,
} from "lucide-react";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "shopping-cart": ShoppingCart,
  package: Package,
  users: Users,
  truck: Truck,
  "bar-chart": BarChart3,
  boxes: Boxes,
  settings: Settings,
};

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600">
          <Store className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">POS Admin</p>
          <p className="text-xs text-slate-500">Control Panel</p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-4 py-6">
        {navItems.map((group) => (
          <div key={group.section}>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {group.section}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-slate-900">Admin</p>
            <p className="truncate text-xs text-slate-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
