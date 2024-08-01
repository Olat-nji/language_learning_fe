import { CheckCircle, Mic } from "lucide-react";
import { useEffect, useState } from "react";

const MicrophoneComponent = () => {
  const [state, setState] = useState("initial");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(
      setTimeout(() => setState("discovering"), 5000),
      setTimeout(() => setState("connected"), 10_000),
      setTimeout(() => setState("speaking"), 15_000),
    );

    return () => {
      for (const timer of timers) {
        clearTimeout(timer);
      }
    };
  }, []);

  const renderContent = () => {
    switch (state) {
      case "initial": {
        return (
          <div className="flex flex-col items-center">
            <Mic size={56} aria-label="mic icon" className="text-white" />
            <p className="leading-12 mt-4 text-center font-[axiforma] text-3xl font-medium tracking-wider text-white">
              Please connect your microphone while you wait.
            </p>
          </div>
        );
      }
      case "discovering": {
        return (
          <div className="flex flex-col items-center">
            <Mic
              size={56}
              className="animate-beat text-white"
              aria-label="mic icon"
            />
            <p className="leading-12 mt-4 text-center font-[axiforma] text-3xl font-medium tracking-wider text-white">
              Your microphone is now discoverable.
            </p>
          </div>
        );
      }
      case "connected": {
        return (
          <div className="flex flex-col items-center">
            <CheckCircle
              size={56}
              className="animate-beat stroke-2 text-green-500"
              aria-label="check circle icon"
            />
            <p className="leading-12 mt-4 text-center font-[axiforma] text-3xl font-medium tracking-wider text-white">
              Connection successful!
            </p>
          </div>
        );
      }
      case "speaking": {
        return (
          <div className="flex flex-col items-center">
            <Mic
              size={56}
              className="animate-beat text-white"
              aria-label="mic icon"
            />
          </div>
        );
      }
    }
  };

  return (
    <div className="min-h-90vh flex items-center justify-center">
      {renderContent()}
    </div>
  );
};

export default MicrophoneComponent;
