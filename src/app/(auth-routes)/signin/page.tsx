import SignIn from "~/components/auth/SignIn";

const page = () => {
  return (
    <div className="mt-[20%] flex w-full items-center justify-center lg:mt-[10%]">
      <div className="flex items-center justify-center px-[5%] lg:w-1/2">
        <SignIn />
      </div>
    </div>
  );
};
export default page;
