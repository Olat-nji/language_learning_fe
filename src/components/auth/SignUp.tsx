import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import apple from "../../../public/signup/apple.svg";
import facebook from "../../../public/signup/facebook.svg";
import google from "../../../public/signup/google.svg";
import CustomInput from "../input/CustomInput";

const SignUp = () => {
  return (
    <>
      <div className="shadow-md min-w-[300px] overflow-hidden rounded-[20px] bg-neutral-10 font-abel lg:min-w-[500px]">
        <div className="flex flex-col items-center gap-[10px] bg-white py-[20px]">
          <h1 className="text-[40px] font-bold text-secondary-110">Sign Up</h1>
          <p className="text-[15px] text-neutral-130">
            Your learning game awaits you!
          </p>
        </div>
        <div className="flex h-[100px] items-center justify-center bg-neutral-10">
          <div className="flex flex-row gap-[20px]">
            <CustomButton variant="secondary" size="icon">
              <Image src={google} alt="profile-icon" width={18} height={22} />
            </CustomButton>
            <CustomButton variant="secondary" size="icon">
              <Image src={apple} alt="profile-icon" width={18} height={22} />
            </CustomButton>
            <CustomButton variant="secondary" size="icon">
              <Image src={facebook} alt="profile-icon" width={18} height={22} />
            </CustomButton>
          </div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="flex flex-row items-center justify-between gap-[20px] bg-white px-[40px]">
            <hr className="w-[40%] border-[1px] border-neutral-50" />
            <p className="text-[15px] text-neutral-90">OR</p>
            <hr className="w-[40%] border-neutral-50" />
          </div>
          <div className="flex h-[60px] items-center justify-center bg-white">
            <p className="text-[15px] text-secondary-110">
              Continue With Email
            </p>
          </div>
          <div className="bg-white">
            <div className="flex w-full flex-col items-start gap-[20px] p-[30px]">
              <CustomInput
                placeholder="Enter Your Email"
                // Icon={Email}
                // onChange={handleChange}
                // error={emailError}
                label="Email address"
                inputType="text"
                name="email"
                // value={form.email}
              />
              <CustomInput
                placeholder="Enter Your Password"
                // Icon={Lock}
                // onChange={handleChange}
                // error={passwordError}
                label="Password"
                inputType="password"
                name="password"
                // value={form.password}
              />
            </div>
            <div className="flex flex-row items-center justify-between bg-white p-[30px] pt-0">
              <div className="flex flex-row gap-[20px]">
                <input type="checkbox" name="" id="" className="w-[20px]" />
                <p className="text-[14px]">Remember me</p>
              </div>
              <a href="" className="text-[14px] text-primary-100">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[20px] bg-white p-[20px]">
            <CustomButton variant="neutral" className="w-full">
              Sign Up
            </CustomButton>
            <p className="">
              Already have an account?
              <a href="/signin" className="text-[12px] text-primary-100">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
