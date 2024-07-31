import LevelProgress from "../Levels/LevelProgress";

const DifficultLevel = () => {
  return (
    <section className="max-w-[725px] rounded-[18px] border-[1.3px] border-solid border-[#E27C40] bg-[#000000] px-[40px] py-[32px]">
      <div className="flex flex-col gap-[64px]">
        <h1 className="gradient-text font-normal">difficulty level</h1>

        {/* LEVELS */}
        <div className="flex flex-col gap-[40px]">
          {/*VERY EASY LEVEL */}
          <LevelProgress
            starCount={1}
            percent={20}
            strokeWidth={5}
            strokeColor="#00AA00"
            starWidth={24}
          />
          {/* EASY LEVEL */}
          <LevelProgress
            starCount={2}
            percent={40}
            strokeWidth={5}
            strokeColor="#FE5900"
            starWidth={24}
          />
          {/* MEDIUM LEVEL */}
          <LevelProgress
            starCount={3}
            percent={60}
            strokeWidth={5}
            strokeColor="#FE5900"
            starWidth={24}
          />
          {/* HARD LEVEL */}
          <LevelProgress
            starCount={4}
            percent={80}
            strokeWidth={5}
            strokeColor="#FE5900"
            starWidth={24}
          />
          {/* VERY HARD LEVEL */}
          <LevelProgress
            starCount={5}
            percent={100}
            strokeWidth={5}
            strokeColor="#FE5900"
            starWidth={24}
          />
        </div>
      </div>
    </section>
  );
};
export default DifficultLevel;
