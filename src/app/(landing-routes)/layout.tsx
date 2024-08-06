import DarkNav from "~/components/DarkNav/DarkNav";
import LightNav from "~/components/light-navbar/LightNav";
import GotoTop from "~/components/miscellaneous/goto-top";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      {/* NAV-BAR */}
      {/* <DefaultNav /> */}
      <DarkNav />
      {/* <LightNav /> */}
      <div className="flex-1">{children}</div>
      {/* FOOTER */}
      <GotoTop />
    </div>
  );
}
