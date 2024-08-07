import LightNav from "~/components/light-navbar/LightNav";

const HeroSection = () => {
    return (
        // <><div className="my-10">
        //     <LightNav />
        // </div>
        <section className="bg-white border-secondary-120 px-4 lg:px-20 ">
    {/* <section className="bg-white border-4 lg:border-[40px] border-secondary-120 px-4 lg:px-10 "> */}


        {/* <LightNav /> */}

                <h1 className="text-[32px] lg:text-[64px] text-center leading-[12px] lg:leading-[96px] text-secondary-120 font-bold lg:mt-32 lg:mb-16 ">How It Works</h1>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4  ">
                    <div className="flex-1">
                        <img src="/howitworks/hero-1.png" alt="Image 1" className="w-full h-auto" />
                    </div>
                    <div className="flex-1">
                        <img src="/howitworks/hero-2.png" alt="Image 2" className="w-full h-auto" />
                    </div>
                    <div className="flex-1">
                        <img src="/howitworks/hero-3.png" alt="Image 3" className="w-full h-auto" />
                    </div>
                </div>
            </section>
    );
  };
  
  export default HeroSection;
  