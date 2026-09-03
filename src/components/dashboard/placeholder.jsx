"use client";

import { Construction } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const featureMap = {
  pos: { title: "Point of Sale", icon: Construction },
  products: { title: "Products", icon: Construction },
  customers: { title: "Customers", icon: Construction },
  suppliers: { title: "Suppliers", icon: Construction },
  "reports/sales": { title: "Sales Report", icon: Construction },
  "reports/inventory": { title: "Inventory Report", icon: Construction },
};

export default function PlaceholderPage({ name }) {
  const feature = featureMap[name];
  const Icon = feature.icon;
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{feature.title}</h1>
        <p className="mt-1 text-sm text-slate-500">This module is coming soon.</p>
      </div>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
            <Icon className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h2>
          <p className="mt-1 max-w-sm text-sm text-slate-500">
            The {feature.title.toLowerCase()} module is under construction. Check back soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
