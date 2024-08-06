import LightNav from "~/components/light-navbar/LightNav";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      {/* NAV-BAR */}
      {/* <AdminNav /> */}
      {/* <DarkNav /> */}
      <LightNav />
      <div className="flex-1">{children}</div>
      {/* FOOTER */}
    </div>
  );
}
