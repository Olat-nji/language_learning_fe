import { Suspense } from "react";

import AdminNav from "~/components/AdminNav/AdminNav";
import LoggedInFooter from "~/components/footer/LoggedInFooter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <AdminNav />
      <div className="relative w-full bg-white max-lg:overflow-hidden">
        <Suspense>{children}</Suspense>
      </div>
      <LoggedInFooter />
    </div>
  );
}
