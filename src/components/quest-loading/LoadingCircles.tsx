// components/LoadingCircles.tsx

const LoadingCircles: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center font-[lilita-one] text-[64px] font-normal leading-[96px] tracking-[0.06em] text-[#FE6A19]">
        Quest Loading
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <div
          data-testid="loading-circle"
          className="h-4 w-4 animate-pulse-1 rounded-full bg-white"
        ></div>
        <div
          data-testid="loading-circle"
          className="h-4 w-4 animate-pulse-2 rounded-full bg-white"
        ></div>
        <div
          data-testid="loading-circle"
          className="h-4 w-4 animate-pulse-3 rounded-full bg-white"
        ></div>
      </div>
    </div>
  );
};

export default LoadingCircles;
