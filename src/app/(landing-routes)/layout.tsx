import DarkNav from "~/components/DarkNav/DarkNav";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <DarkNav />
      <div className="flex-1 bg-neutral-10">{children}</div>
    </div>
  );
}
