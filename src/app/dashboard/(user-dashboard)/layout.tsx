import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <div className="relative mx-auto w-full bg-white px-2 max-lg:overflow-hidden xl:px-4">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
