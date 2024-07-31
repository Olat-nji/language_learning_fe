import SignUp from "~/components/auth/SignUp";

const page = () => {
  return (
    <div className="mt-[20%] flex w-full items-center justify-center lg:mt-[10%]">
      <div className="flex items-center justify-center lg:w-1/2 lg:px-[5%]">
        <SignUp />
      </div>
    </div>
  );
};
export default page;
