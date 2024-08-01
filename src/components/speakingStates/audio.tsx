import { AudioLines, Mic } from "lucide-react";

const IconPanel = () => {
  return (
    <div className="flex h-[381.02px] w-[214.13px] flex-col items-center justify-around border-2 bg-black p-4">
      <div className="h-[60.02px] w-[152px] text-purple-500">
        <AudioLines data-testid="audioline-icon" size={24} />
      </div>
      <div className="h-[60.02px] w-[152px] text-white">
        <Mic data-testid="mic-icon" size={24} />
      </div>
      <div className="h-[60.02px] w-[152px] animate-pulse text-gray-500">
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 justify-between rounded-full border-4 border-gray-500">
            <Mic data-testid="pulse-mic-icon" size={24} />
          </div>
          <div className="h-8 w-8 rounded-full border-4 border-gray-500"></div>
        </div>
      </div>
      <div className="h-[60.02px] w-[152px] text-gray-500">
        <Mic data-testid="micoff-icon" size={24} />
      </div>
    </div>
  );
};

export default IconPanel;
