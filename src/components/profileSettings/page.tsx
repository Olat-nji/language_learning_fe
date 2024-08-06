"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import CustomInput from "~/components/input/CustomInput";
import { useProfileStore } from "./useProfileStore";

const handleFileInputClick = () => {
  const fileInput = document.querySelector(
    "#fileInput",
  ) as HTMLInputElement | null;
  fileInput?.click();
};

const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

const AdminProfile = () => {
  //states
  const { image, name, email, gender, updateProfile } = useProfileStore();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [temporaryGender, setTemporaryGender] = useState(gender);
  const [temporaryImage, setTemporaryImage] = useState(image);
  const [temporaryEmail, setTemporaryEmail] = useState(email);
  const [temporaryName, setTemporaryName] = useState(name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (isClient) {
      setTemporaryImage(image);
      setTemporaryName(name);
      setTemporaryEmail(email);
      setTemporaryGender(gender);
    }
  }, [image, name, email, gender, isClient]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          setTemporaryImage(event.target.result as string);
        }
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          setTemporaryImage(event.target.result as string);
        }
      });
      reader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  //handles save button click event
  const handleSave = () => {
    updateProfile({
      image: temporaryImage,
      name: temporaryName,
      email: temporaryEmail,
      gender: temporaryGender,
    });
    setIsEditing(false);
    setIsSuccessModalOpen(true);
  };

  //handles update profile button click
  const handleUpdateProfileClick = () => {
    setIsEditing(!isEditing);
  };

  if (!isClient) {
    return;
  }

  return (
    <main data-testid="profile-settings" className="font-inter">
      {/* upload image modal ***********/}
      {isModalOpen && (
        <DashboardModal className="flex w-full flex-col items-center justify-center space-y-[20px] md:w-[40rem]">
          <section className="flex w-full flex-col items-center justify-center space-y-[20px] border-[3px] border-dashed py-[20px] md:w-[25rem]">
            <div
              className="drag-drop-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <p>Drag and drop image to upload</p>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <Image
                src="/images/upload.svg"
                alt="upload"
                width={80}
                height={80}
              />
            </div>
            <CustomButton
              variant="secondary-two"
              className="w-fit px-[15px]"
              onClick={handleFileInputClick}
            >
              Select photo from device
            </CustomButton>
          </section>
          <small>JPG, PNG file format accepted</small>
          <CustomButton variant="primary" onClick={() => setIsModalOpen(false)}>
            Upload
          </CustomButton>
        </DashboardModal>
      )}

      {/* success modal ***********/}
      {isSuccessModalOpen && (
        <DashboardModal className="flex w-[25rem] flex-col items-center justify-center space-y-[20px]">
          <div>
            <Image src="/images/ok.svg" alt="ok" width={50} height={50} />
          </div>
          <h2 className="m-0 text-center text-[20px] font-semibold">
            Your profile has been successfully edited
          </h2>
          <p className="m-0 text-neutral-130">Click to see new profile</p>
          <CustomButton
            variant="primary"
            className="w-full"
            onClick={() => setIsSuccessModalOpen(false)}
          >
            View Profile
          </CustomButton>
        </DashboardModal>
      )}
      <>
        <section className="mt-[30px] w-full rounded-[15px] border-2 border-neutral-30 bg-white p-[20px] sm:p-[30px] md:p-[40px]">
          <div className="block w-full items-center space-x-0 lg:flex lg:space-x-[70px]">
            {/* profile image section ***********/}
            <section className="profile-image">
              {isEditing ? (
                <div
                  data-testid="profileImage"
                  onClick={() => setIsModalOpen(true)}
                  className="relative h-[180px] w-[180px] cursor-pointer sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px]"
                >
                  <Image
                    src={temporaryImage || "/images/profile_avatar.svg"}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                  <Camera className="absolute left-[20px] top-[20px] text-neutral-110 sm:top-[30px] md:left-[30px] md:top-[50px]" />
                </div>
              ) : (
                <div className="h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src={image || "/images/profile_avatar.svg"}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              )}
            </section>

            {/* profile details section ***********/}
            <section className="mt-[30px] w-full lg:mt-0">
              {isEditing ? (
                <>
                  <section className="space-y-[15px] sm:space-y-[25px]">
                    <div className="block items-center justify-between sm:flex">
                      <label htmlFor="fullname" className="font-semibold">
                        Name
                      </label>
                      <div>
                        <CustomInput
                          name="fullname"
                          inputType="text"
                          className="w-[100%]"
                          value={temporaryName}
                          onChange={(event) =>
                            setTemporaryName(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="block items-center justify-between sm:flex">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <div>
                        <CustomInput
                          name="email"
                          inputType="email"
                          value={temporaryEmail}
                          className="w-[100%]"
                          onChange={(event) =>
                            setTemporaryEmail(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="block items-center justify-between sm:flex">
                      <label htmlFor="gender" className="font-semibold">
                        Gender
                      </label>
                      <div>
                        <CustomInput
                          name="gender"
                          inputType="text"
                          value={temporaryGender}
                          className="w-[100%]"
                          onChange={(event) =>
                            setTemporaryGender(event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </section>
                  <div className="mt-[2rem] space-x-2 sm:mt-[4rem]">
                    <CustomButton variant="primary" onClick={handleSave}>
                      Save
                    </CustomButton>
                    <CustomButton
                      variant="outline"
                      className="border-2 border-primary-60 bg-transparent text-primary-60"
                      onClick={handleUpdateProfileClick}
                    >
                      Cancel
                    </CustomButton>
                  </div>
                </>
              ) : (
                <div className="space-y-[30px]">
                  <CustomButton
                    variant="outline"
                    className="hidden border-2 border-primary-60 bg-transparent text-primary-60 md:block"
                    onClick={handleUpdateProfileClick}
                  >
                    Edit your profile
                  </CustomButton>
                  <div>
                    <p className="text-[16px] font-semibold">Name</p>
                    <p className="text-[14px]">{name}</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Email</p>
                    <p className="text-[14px]">{email}</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Gender</p>
                    <p className="text-[14px]">{gender}</p>
                  </div>
                  <CustomButton
                    variant="outline"
                    className="block border-2 border-b-primary-60 bg-transparent text-primary-60 md:hidden"
                    onClick={handleUpdateProfileClick}
                  >
                    Edit your profile
                  </CustomButton>
                </div>
              )}
            </section>
          </div>
        </section>
      </>
    </main>
  );
};

export default AdminProfile;
