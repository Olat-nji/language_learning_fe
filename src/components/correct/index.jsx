import { CheckIcon } from "lucide-react";

const Correct = () => {
  return (
    <div
      className="flex items-center gap-2 rounded-[20px] bg-success-150 px-5 py-2 text-white"
      data-testid="correct-component"
    >
      <CheckIcon data-testid="check-icon" />
      <span className="font-lilita text-lg">Correct</span>
    </div>
  );
};

export default Correct;
