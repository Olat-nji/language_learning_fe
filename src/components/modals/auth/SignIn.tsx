import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import InputField from "~/components/input/InputField";
import apple from "../../../../public/signup/apple.svg";
import facebook from "../../../../public/signup/facebook.svg";
import google from "../../../../public/signup/google.svg";
import linkIcon from "../../../../public/signup/link.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

const SignIn = () => {
  return (
    <Dialog /* open={isVisible} onOpenChange={setIsVisible} */>
      <DialogTrigger asChild>
        <CustomButton className="border border-black" variant="default">
          Sign In
        </CustomButton>
      </DialogTrigger>
      <DialogContent className="max-w-sm p-0 outline-none transition-all sm:max-w-[502px] sm:rounded-3xl font-inter">
        <DialogHeader className="space-y-0 border bg-white sm:gap-3 sm:space-y-0 sm:rounded-t-3xl">
          <div className="mx-auto max-sm:hidden">
            {/* <Image src={cookiesImg} alt="Cookies image" /> */}
          </div>
          <DialogTitle className="text-left text-2xl sm:pt-3 sm:text-center">
            <div className="flex flex-col items-center gap-[10px]">
              <h1 className="text-[30px] font-bold text-secondary-110">
                Sign In
              </h1>
              <p className="text-[15px] text-neutral-130">
                Let’s get you back to learning!
              </p>
            </div>
          </DialogTitle>
          <DialogDescription className="text-left text-lg max-sm:text-balance max-sm:pb-2 max-sm:pt-6 sm:text-center">
            <div className="flex h-[100px] items-center justify-center bg-neutral-10">
              <div className="flex flex-row gap-[20px]">
                <CustomButton variant="secondary" size="icon">
                  <Image
                    src={google}
                    alt="profile-icon"
                    width={18}
                    height={22}
                  />
                </CustomButton>
                <CustomButton variant="secondary" size="icon">
                  <Image
                    src={apple}
                    alt="profile-icon"
                    width={18}
                    height={22}
                  />
                </CustomButton>
                <CustomButton variant="secondary" size="icon">
                  <Image
                    src={facebook}
                    alt="profile-icon"
                    width={18}
                    height={22}
                  />
                </CustomButton>
                <CustomButton variant="secondary" size="icon">
                  <Image
                    src={linkIcon}
                    alt="profile-icon"
                    width={18}
                    height={22}
                  />
                </CustomButton>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-[20px] px-[40px]">
              <hr className="w-[40%] border-[1px] border-neutral-50" />
              <p className="text-[15px] text-neutral-90">OR</p>
              <hr className="w-[40%] border-neutral-50" />
            </div>
            <div className="flex h-[60px] items-center justify-center">
              <p className="text-[15px] font-bold text-secondary-110">
                Continue With Email
              </p>
            </div>
            <div className="flex flex-col items-start gap-[20px] p-[30px] w-full">
              <InputField
                placeholder="Enter Your Email"
                // Icon={Email}
                // onChange={handleChange}
                // error={emailError}
                label="Email address"
                inputType="text"
                name="email"
                // value={form.email}
              />
              <InputField
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
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-center gap-5 bg-white px-9 py-6 *:rounded-[59px] sm:justify-center sm:gap-6 sm:rounded-b-3xl sm:py-9">
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-neutral-100 text-base sm:hidden"
              size="lg"
              variant="neutral"
              /* onClick={() => setIsVisible(false)} */
            >
              Reject All Cookies
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-primary-100 text-base sm:hidden"
              size="lg"
              variant="primary"
              /* onClick={() => setIsVisible(false)} */
            >
              Accept All Cookies
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-neutral-100 text-base max-sm:hidden"
              size="lg"
              variant="neutral"
              /* onClick={() => setIsVisible(false)} */
            >
              Reject All Cookies
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-primary-100 text-base max-sm:hidden"
              size="lg"
              variant="primary"
              /* onClick={() => setIsVisible(false)} */
            >
              Accept All Cookies
            </CustomButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
