import { Suspense } from "react";

import LoggedInFooter from "~/components/footer/LoggedInFooter";
import UserNav from "~/components/UserNav/UserNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <UserNav />
      <div className="relative w-full bg-white max-lg:overflow-hidden">
        <Suspense>{children}</Suspense>
      </div>
      <LoggedInFooter />
    </div>
  );
}
