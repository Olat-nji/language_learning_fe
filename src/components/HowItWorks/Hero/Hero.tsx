
const HeroSection = () => {
  return (
    <section className="border-secondary-120 bg-white px-4 lg:px-20">
      <h1 className="mb-12 mt-24 text-center text-[32px] font-bold leading-[12px] text-secondary-120 lg:mb-16 lg:mt-32 lg:text-[64px] lg:leading-[96px]">
        How It Works
      </h1>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex-1">
          <img
            src="/howitworks/hero-1.png"
            alt="Image 1"
            className="h-auto w-full"
          />
        </div>
        <div className="flex-1">
          <img
            src="/howitworks/hero-2.png"
            alt="Image 2"
            className="h-auto w-full"
          />
        </div>
        <div className="flex-1">
          <img
            src="/howitworks/hero-3.png"
            alt="Image 3"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
