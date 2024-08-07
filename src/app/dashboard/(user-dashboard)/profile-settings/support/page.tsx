import { Button } from "~/components/common/common-button";
import CustomInput from "~/components/input/CustomInput";

const SupportPage = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-[20px]">
        <div className="w-full flex flex-col h-[400px] bg-white rounded-[0px] sm:rounded-[20px] overflow-hidden gap-[30px]">
          <div className="flex-[0.5] bg-primary-10 py-[20px] px-[15px] text-secondary-120">
            Submit a Request 
          </div>
          <div className="flex-[10] px-[20px] flex flex-col gap-[20px]">
            <CustomInput
            placeholder="Username"
            label="Username"
            inputType="text"
            value=""
            className=""
            />
            <CustomInput
            placeholder="Email"
            label="Email"
            inputType="text"
            value=""
            className=""
            />
            <CustomInput
            placeholder="Subject"
            label="Subject"
            inputType="text"
            value=""
            className=""
            />
          </div>
        </div>
        <div className="rounded-[20px] bg-white p-[20px] flex flex-col gap-[20px] w-full">
        <CustomInput
            placeholder="Leave your message here."
            label="Description"
            inputType="textarea"
            value=""
            className=""
            />
        </div>
        <div className="rounded-[20px] bg-white p-[20px] flex flex-col gap-[20px] w-full">
          <div className="rounded-[20px] border border-solid border-neutral-50 sm:border-transparent p-[20px] sm:p-0">
            <div className="text-[15px] font-[400]">File Upload(Optional)</div>
          <div className="flex flex-row justify-center items-center h-[100px]">
            <p className="text-[15px] font-[400]"><span className="text-primary-100">Add File</span> or drop a file here</p>
          </div>
          </div>
          
        </div>
        <Button variant="primary" className="">
          Submit
        </Button>
      </div>
    </>
  )
};

export default SupportPage;
