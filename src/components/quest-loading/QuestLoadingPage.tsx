import { X } from "lucide-react";
import { useState } from "react";

import MicrophoneComponent from "~/components/microphone/MicrophoneComponent";
import LoadingCircles from "~/components/quest-loading/LoadingCircles";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent } from "~/components/ui/dialog";

interface QuestLoadingPageProperties {
  onClose: () => void;
}

const QuestLoadingPage: React.FC<QuestLoadingPageProperties> = ({
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="flex h-[80vh] max-h-[961px] w-[100vw] max-w-[1728px] flex-col justify-between border-none bg-black p-0">
        <div className="flex justify-start p-4">
          <Button
            variant="ghost"
            className="rounded-full p-2 text-white hover:bg-gray-800"
            onClick={handleClose}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center space-y-16">
          <LoadingCircles />
          <MicrophoneComponent />
        </div>
        <div className="h-16" /> {/* Bottom spacer */}
      </DialogContent>
    </Dialog>
  );
};

export default QuestLoadingPage;
