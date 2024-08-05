"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import ProgressBox from "~/components/Progress-box/Progressbox";

const Avatars = dynamic(() => import("~/components/Avatars"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/models/Level 12.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ProgressBox level={1} progressStarted={false} progress={0} />
      {/* <Background imageUrl={bg} /> */}
      {mounted && <Avatars />}
    </div>
  );
};

export default Home;
