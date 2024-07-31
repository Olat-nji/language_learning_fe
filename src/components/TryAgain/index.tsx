import { RotateCcw } from "lucide-react";

const TryAgain = () => {
  return (
    <div
      className="flex items-center gap-2 rounded-[20px] bg-critical-120 px-5 py-2 text-white"
      data-testid="tryagain-component"
    >
      <RotateCcw data-testid="rotate-icon" />
      <span className="font-lilita text-lg">Try again</span>
    </div>
  );
};

export default TryAgain;
