"use client";

import {
  ShoppingBag,
  TrendingUp,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Today's Sales",
    value: "$12,480",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Total Orders",
    value: "1,284",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingBag,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Products",
    value: "486",
    change: "+3.1%",
    trend: "up",
    icon: Package,
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Customers",
    value: "2,140",
    change: "-1.4%",
    trend: "down",
    icon: Users,
    color: "bg-rose-50 text-rose-600",
  },
];

const weeklyData = [
  { day: "Mon", sales: 8200 },
  { day: "Tue", sales: 9800 },
  { day: "Wed", sales: 7200 },
  { day: "Thu", sales: 11500 },
  { day: "Fri", sales: 13400 },
  { day: "Sat", sales: 9800 },
  { day: "Sun", sales: 12480 },
];

const orders = [
  { id: "#ORD-1042", customer: "Sarah Johnson", amount: "$245.00", status: "Completed", time: "2 min ago" },
  { id: "#ORD-1041", customer: "Michael Chen", amount: "$89.50", status: "Paid", time: "15 min ago" },
  { id: "#ORD-1040", customer: "Amanda Lee", amount: "$1,230.00", status: "Pending", time: "32 min ago" },
  { id: "#ORD-1039", customer: "David Miller", amount: "$58.75", status: "Completed", time: "1 hr ago" },
  { id: "#ORD-1038", customer: "Emily Davis", amount: "$412.20", status: "Refunded", time: "2 hrs ago" },
  { id: "#ORD-1037", customer: "James Wilson", amount: "$156.30", status: "Completed", time: "3 hrs ago" },
];

const topProducts = [
  { name: "Espresso Beans 1kg", sold: 124, revenue: "$4,832", trend: 18 },
  { name: "Croissant", sold: 98, revenue: "$1,372", trend: 12 },
  { name: "Cold Brew 500ml", sold: 76, revenue: "$1,901", trend: 9 },
  { name: "Almond Milk", sold: 54, revenue: "$1,080", trend: -3 },
];

const statusStyles = {
  Completed: "bg-emerald-50 text-emerald-700",
  Paid: "bg-sky-50 text-sky-700",
  Pending: "bg-amber-50 text-amber-700",
  Refunded: "bg-rose-50 text-rose-700",
};

export default function DashboardPage() {
  const max = Math.max(...weeklyData.map((d) => d.sales));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Welcome back! Here&apos;s what&apos;s happening at your store today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            defaultValue="Today"
          >
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-start justify-between py-5">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
                <p
                  className={cn(
                    "mt-2 inline-flex items-center gap-1 text-sm font-medium",
                    stat.trend === "up" ? "text-emerald-600" : "text-rose-600"
                  )}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {stat.change}
                  <span className="text-xs font-normal text-slate-400">vs yesterday</span>
                </p>
              </div>
              <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", stat.color)}>
                <stat.icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Weekly sales performance</CardDescription>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1 text-xs font-medium">
              <button className="rounded-md bg-white px-3 py-1.5 shadow-sm text-slate-700">7d</button>
              <button className="rounded-md px-3 py-1.5 text-slate-500">30d</button>
              <button className="rounded-md px-3 py-1.5 text-slate-500">90d</button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-end gap-3">
              {weeklyData.map((d) => (
                <div key={d.day} className="group flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-lg bg-indigo-600 transition-all duration-300 group-hover:bg-indigo-500"
                      style={{ height: `${(d.sales / max) * 100}%` }}
                    >
                      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        ${d.sales.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{d.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of today&apos;s sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {[
                { label: "Cash", pct: 42, color: "bg-emerald-500", amount: "$5,242" },
                { label: "Card", pct: 36, color: "bg-indigo-500", amount: "$4,493" },
                { label: "Digital Wallet", pct: 22, color: "bg-amber-500", amount: "$2,745" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{m.label}</span>
                    <span className="text-slate-500">{m.amount}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={cn("h-full rounded-full", m.color)}
                      style={{ width: `${m.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CreditCard className="h-4 w-4" /> Total collected
              </div>
              <span className="text-lg font-bold text-slate-900">$12,480</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest transactions at your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="pb-3 pr-4">Order</th>
                    <th className="pb-3 pr-4">Customer</th>
                    <th className="pb-3 pr-4">Amount</th>
                    <th className="pb-3 pr-4">Status</th>
                    <th className="pb-3 text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-50">
                      <td className="py-3.5 pr-4 font-medium text-indigo-600">{o.id}</td>
                      <td className="py-3.5 pr-4 font-medium text-slate-800">{o.customer}</td>
                      <td className="py-3.5 pr-4 text-slate-600">{o.amount}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                            statusStyles[o.status]
                          )}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-right text-slate-500">{o.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best selling items this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {topProducts.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold",
                      ["bg-indigo-50 text-indigo-600", "bg-emerald-50 text-emerald-600", "bg-amber-50 text-amber-600", "bg-rose-50 text-rose-600"][i]
                    )}
                  >
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-800">{p.name}</p>
                    <p className="text-xs text-slate-500">{p.sold} sold · {p.revenue}</p>
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      p.trend >= 0 ? "text-emerald-600" : "text-rose-600"
                    )}
                  >
                    {p.trend >= 0 ? "+" : ""}
                    {p.trend}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-dashed border-slate-200 p-4">
              <TrendingUp className="h-4 w-4 text-indigo-500" />
              <p className="text-xs text-slate-500">
                Inventory level at <span className="font-semibold text-slate-700">78%</span> — 5
                products low on stock.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
