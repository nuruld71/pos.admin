"use client";

import { useState } from "react";
import {
  Building2,
  Percent,
  Receipt,
  ShieldCheck,
  Save,
  Plus,
  Trash2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input, Label, Select, Textarea, Toggle } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "business", label: "Business Info", icon: Building2 },
  { id: "tax", label: "Tax & Currency", icon: Percent },
  { id: "receipt", label: "Receipt", icon: Receipt },
  { id: "users", label: "Users & Roles", icon: ShieldCheck },
];

const taxRates = [
  { id: 1, name: "Standard VAT", rate: 10, type: "Percentage" },
  { id: 2, name: "Reduced VAT", rate: 5, type: "Percentage" },
  { id: 3, name: "Zero Rated", rate: 0, type: "Percentage" },
];

const staff = [
  { id: 1, name: "Admin User", email: "admin@example.com", role: "Owner", active: true },
  { id: 2, name: "Jane Cooper", email: "jane@example.com", role: "Manager", active: true },
  { id: 3, name: "Mark Stevens", email: "mark@example.com", role: "Cashier", active: false },
];

const roleColors = {
  Owner: "bg-indigo-50 text-indigo-700",
  Manager: "bg-emerald-50 text-emerald-700",
  Cashier: "bg-amber-50 text-amber-700",
};

export default function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState("business");
  const [saved, setSaved] = useState(false);
  const [taxEnabled, setTaxEnabled] = useState(true);
  const [autoPrint, setAutoPrint] = useState(false);
  const [rounding, setRounding] = useState(true);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Configuration</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your store settings, taxes, receipts, and user permissions.
          </p>
        </div>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4" />
          {saved ? "Saved" : "Save Changes"}
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-slate-200 pb-px">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "border-indigo-600 text-indigo-700"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-4xl">
        {activeTab === "business" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>
                  Details shown on receipts and reports.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="b-name">Business name</Label>
                  <Input id="b-name" defaultValue="Acme Coffee Roasters" />
                </div>
                <div>
                  <Label htmlFor="b-email">Email</Label>
                  <Input id="b-email" type="email" defaultValue="hello@acmecoffee.com" />
                </div>
                <div>
                  <Label htmlFor="b-phone">Phone</Label>
                  <Input id="b-phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="b-reg">Registration / VAT number</Label>
                  <Input id="b-reg" defaultValue="VAT-88451239" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="b-address">Address</Label>
                  <Textarea
                    id="b-address"
                    rows={2}
                    defaultValue="120 Market Street, Suite 40, Portland, OR 97210"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Currency & Locale</CardTitle>
                <CardDescription>How prices and numbers are displayed.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="b-cur">Currency</Label>
                  <Select id="b-cur" defaultValue="USD">
                    <option value="USD">USD - US Dollar ($)</option>
                    <option value="EUR">EUR - Euro (€)</option>
                    <option value="GBP">GBP - British Pound (£)</option>
                    <option value="INR">INR - Indian Rupee (₹)</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="b-tz">Timezone</Label>
                  <Select id="b-tz" defaultValue="pst">
                    <option value="pst">(GMT-8) Pacific Time</option>
                    <option value="est">(GMT-5) Eastern Time</option>
                    <option value="ist">(GMT+5:30) India Standard Time</option>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "tax" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Tax Settings</CardTitle>
                    <CardDescription>Enable automatic tax calculation.</CardDescription>
                  </div>
                  <Toggle checked={taxEnabled} onChange={setTaxEnabled} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {taxRates.map((tax) => (
                  <div
                    key={tax.id}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">{tax.name}</p>
                      <p className="text-xs text-slate-500">{tax.type}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{tax.rate}%</span>
                    <button className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <Button variant="outline">
                  <Plus className="h-4 w-4" /> Add Tax Rate
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Rounding</CardTitle>
                    <CardDescription>Round invoice totals to the nearest whole number.</CardDescription>
                  </div>
                  <Toggle checked={rounding} onChange={setRounding} />
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="tax-rnd">Rounding method</Label>
                  <Select id="tax-rnd" defaultValue="nearest">
                    <option value="nearest">Round to nearest</option>
                    <option value="up">Round up</option>
                    <option value="down">Round down</option>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "receipt" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Receipt Preferences</CardTitle>
                <CardDescription>Customize how receipts are generated.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="text-sm font-medium text-slate-800">Auto print receipt</p>
                    <p className="text-xs text-slate-500">Print a receipt after every sale.</p>
                  </div>
                  <Toggle checked={autoPrint} onChange={setAutoPrint} />
                </div>
                <div>
                  <Label htmlFor="r-header">Receipt header text</Label>
                  <Input id="r-header" defaultValue="Thank you for shopping with Acme Coffee Roasters" />
                </div>
                <div>
                  <Label htmlFor="r-footer">Receipt footer text</Label>
                  <Textarea
                    id="r-footer"
                    rows={2}
                    defaultValue="Please keep this receipt for your records. Items can be returned within 14 days."
                  />
                </div>
                <div>
                  <Label htmlFor="r-logo">Logo</Label>
                  <div className="flex items-center gap-3">
                    <button className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400 hover:border-indigo-400 hover:text-indigo-500">
                      <Plus className="h-5 w-5" />
                    </button>
                    <p className="text-xs text-slate-500">Upload a square logo (PNG, JPG, max 2MB).</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "users" && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Users & Roles</CardTitle>
                  <CardDescription>Manage staff accounts and permissions.</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4" /> Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {staff.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-800">{user.name}</p>
                      <p className="truncate text-xs text-slate-500">{user.email}</p>
                    </div>
                    <span
                      className={cn(
                        "hidden rounded-full px-2.5 py-1 text-xs font-medium sm:inline-flex",
                        roleColors[user.role]
                      )}
                    >
                      {user.role}
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-1 text-xs font-medium",
                        user.active ? "text-emerald-600" : "text-slate-400"
                      )}
                    >
                      {user.active ? <Check className="h-3.5 w-3.5" /> : "Inactive"}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
