import { Volume2, VolumeX } from "lucide-react";

const Speakers = ({ type }: { type: "Default" | "Loud" }) => {
  return (
    <div>
      {type === "Loud" && <Volume2 size={40} className="text-white" />}
      {type === "Default" && <VolumeX size={40} className="text-white/50" />}
    </div>
  );
};

export default Speakers;
