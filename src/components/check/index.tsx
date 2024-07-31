import { CheckIcon } from "lucide-react";

const Check = ({ type }: { type?: "Default" | "Active" | "Correct" }) => {
  let borderColor, iconColor;

  switch (type) {
    case "Active": {
      borderColor = "border-white";
      iconColor = "text-white";
      break;
    }
    case "Correct": {
      borderColor = "border-success-140";
      iconColor = "text-success-140";
      break;
    }
    default: {
      borderColor = "border-white/50";
      iconColor = "text-white/50";
    }
  }

  return (
    <div className={`rounded-full border-4 ${borderColor} p-1`}>
      <CheckIcon
        size={24}
        strokeWidth={4}
        className={iconColor}
        absoluteStrokeWidth={true}
      />
    </div>
  );
};

export default Check;
