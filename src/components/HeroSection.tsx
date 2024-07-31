import { lilitaOne } from "~/app/layout";

const HeroSection = () => {
  return (
    <section className="mt-20 flex h-screen w-full flex-col justify-between pl-0 md:mt-0 md:flex-row lg:pl-10">
      <div className="flex h-full flex-col justify-center">
        <div className="ml-auto w-full px-3 md:px-0 md:pl-5 lg:max-w-md lg:pl-0 xl:max-w-[630px]">
          <h1
            className={`font-fira text-black text-center text-4xl md:text-left md:text-5xl lg:text-6xl lg:leading-[75px] xl:text-7xl ${lilitaOne.className}`}
          >
            Learning Made Fun With Gaming
          </h1>

          <p className="mt-5 text-center font-inter text-sm font-normal leading-6 text-neutral-110 md:text-left md:text-base lg:text-lg">
            Experience language learning like never <br /> before with thrilling
            quests and real-life <br /> challenges that keep you at your toes.
          </p>

          <div className="mx-auto w-fit md:mx-0">
            <button className="font-fira mt-4 rounded-full bg-primary-100 px-6 py-3 text-sm capitalize text-white outline-none">
              Explore questes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card grid h-full basis-1/2 bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default HeroSection;
