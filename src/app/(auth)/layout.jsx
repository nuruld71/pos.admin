import { Store } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-slate-900 p-12 text-white lg:flex">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500">
            <Store className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold">POS Admin</span>
        </div>

        <div className="relative">
          <h2 className="max-w-md text-3xl font-bold leading-tight">
            Manage your store efficiently with a powerful POS control panel.
          </h2>
          <p className="mt-4 max-w-md text-slate-300">
            Track sales, manage inventory, configure taxes, and grow your business from one
            seamless dashboard.
          </p>
        </div>

        <div className="relative flex gap-6 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Sales Dashboard
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> Inventory
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Reports
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center bg-slate-50 px-6 py-12 sm:px-12 lg:w-1/2">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
              <Store className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900">POS Admin</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
