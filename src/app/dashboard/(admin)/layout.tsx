import { Suspense } from "react";

import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="border-b p-4 text-black">
        <div>
          <h1 className="text-base">Admin Navbar -replace with component</h1>
        </div>
      </header>
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-3 md:p-8">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
