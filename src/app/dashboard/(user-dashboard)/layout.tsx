import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <div className="relative w-full bg-white max-lg:overflow-hidden">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
