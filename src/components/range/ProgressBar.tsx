import { Line } from "rc-progress";

type DisplayProperties = {
  percent: number;
  strokeWidth: number;
  strokeColor: string;
};

const ProgressBar: React.FC<DisplayProperties> = ({
  percent,
  strokeWidth,
  strokeColor,
}) => {
  return (
    <div>
      {/* PROGRESS BAR DISPLAY */}
      <Line
        percent={percent}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        trailColor="transparent"
        className="w-full rounded-full px-[1px]"
        style={{ border: `1px solid ${strokeColor}` }}
      />
    </div>
  );
};

export default ProgressBar;
