import { Volume2, VolumeX } from "lucide-react";

const Speakers = ({ type }: { type: "Default" | "Loud" }) => {
  return (
    <div>
      {type === "Loud" && (
        <Volume2 size={40} className="text-white" data-testid="volume-loud" />
      )}
      {type === "Default" && (
        <VolumeX
          size={40}
          className="text-white/50"
          data-testid="volume-default"
        />
      )}
    </div>
  );
};

export default Speakers;
