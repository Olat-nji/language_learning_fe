import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <div className="bg-whitemax-lg:overflow-hidden relative mx-auto w-full">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
