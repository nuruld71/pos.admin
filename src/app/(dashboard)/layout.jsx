import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex min-h-screen flex-col lg:pl-64">
        <Header />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
