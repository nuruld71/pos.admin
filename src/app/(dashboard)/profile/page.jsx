"use client";

import { useState } from "react";
import {
  Camera,
  Eye,
  EyeOff,
  Save,
  Lock,
  LogIn,
  Settings,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";

const activity = [
  {
    id: 1,
    icon: LogIn,
    title: "Signed in to your account",
    detail: "Chrome · Windows · 192.168.1.10",
    time: "Today, 9:24 AM",
  },
  {
    id: 2,
    icon: Settings,
    title: "Updated business settings",
    detail: "Changed default currency to USD",
    time: "Yesterday, 4:12 PM",
  },
  {
    id: 3,
    icon: Lock,
    title: "Changed account password",
    detail: "Password was updated successfully",
    time: "Aug 28, 2:45 PM",
  },
  {
    id: 4,
    icon: Receipt,
    title: "Emailed a sales report",
    detail: "Weekly sales summary sent to admin@example.com",
    time: "Aug 25, 10:02 AM",
  },
];

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [passwordSaved, setPasswordSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handlePasswordSave() {
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 2000);
  }

  function togglePassword(field) {
    setShowPasswords((v) => ({ ...v, [field]: !v[field] }));
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your account settings and personal information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your account details and contact information.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-2xl font-semibold text-white">
                    AD
                  </div>
                  <button
                    type="button"
                    className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-slate-50"
                    aria-label="Upload photo"
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Admin</p>
                  <p className="text-xs text-slate-500">Owner · admin@example.com</p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="p-first">First name</Label>
                  <Input id="p-first" defaultValue="Admin" />
                </div>
                <div>
                  <Label htmlFor="p-last">Last name</Label>
                  <Input id="p-last" defaultValue="User" />
                </div>
                <div>
                  <Label htmlFor="p-email">Email</Label>
                  <Input id="p-email" type="email" defaultValue="admin@example.com" />
                </div>
                <div>
                  <Label htmlFor="p-phone">Phone</Label>
                  <Input id="p-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4" />
                  {saved ? "Saved" : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Use a strong password you don&apos;t use elsewhere.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {[
                { key: "current", id: "p-current", label: "Current password", placeholder: "Enter current password" },
                { key: "new", id: "p-new", label: "New password", placeholder: "Enter new password" },
                { key: "confirm", id: "p-confirm", label: "Confirm new password", placeholder: "Re-enter new password" },
              ].map((field) => (
                <div key={field.key}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <div className="relative">
                    <Input
                      id={field.id}
                      type={showPasswords[field.key] ? "text" : "password"}
                      placeholder={field.placeholder}
                      autoComplete="off"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => togglePassword(field.key)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label={showPasswords[field.key] ? "Hide password" : "Show password"}
                    >
                      {showPasswords[field.key] ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-end">
                <Button onClick={handlePasswordSave}>
                  <Lock className="h-4 w-4" />
                  {passwordSaved ? "Updated" : "Update Password"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Activity</CardTitle>
              <CardDescription>Recent activity on your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-5">
                {activity.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                        <Icon className="h-4 w-4 text-indigo-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-800">{item.title}</p>
                        <p className="truncate text-xs text-slate-500">{item.detail}</p>
                        <p className="mt-0.5 text-xs text-slate-400">{item.time}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
