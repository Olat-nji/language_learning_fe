"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";
import { useProfileStore } from "./useProfileStore";

const handleFileInputClick = () => {
  const fileInput = document.querySelector(
    "#fileInput",
  ) as HTMLInputElement | null;
  fileInput?.click();
};

const AdminProfile = () => {
  //states
  const { image, name, email, gender, updateProfile } = useProfileStore();
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

  //handles save button click event
  const handleSave = () => {
    updateProfile({
      image: temporaryImage,
      name: temporaryName,
      email: temporaryEmail,
      gender: temporaryGender,
    });
    setIsEditing(false);
  };

  //handles update profile button click
  const handleUpdateProfileClick = () => {
    setIsEditing(!isEditing);
  };

  if (!isClient) {
    return;
  }

  return (
    <main className="relative font-inter">
      {isModalOpen && (
        <div className="absolute top-0 z-50 h-full w-full bg-slate-100 bg-opacity-20 backdrop-blur-sm">
          <div className="modal-content">
            <div className="drag-drop-area">
              <p>Drag and drop your image here</p>
              <input type="file" onChange={handleImageUpload} />
            </div>
            <button onClick={handleFileInputClick}>Upload from device</button>
            <button onClick={() => setIsModalOpen(false)}>Upload</button>
          </div>
        </div>
      )}
      <header className="flex h-[50px] w-full items-center justify-center bg-primary-20">
        header
      </header>
      <main className="flex">
        <section className="flex h-screen w-[25%] items-center justify-center bg-primary-10">
          sidebar
        </section>
        <section className="h-screen w-full p-[40px]">
          <div className="flex w-full items-center space-x-[70px]">
            <section className="profile-image">
              {isEditing ? (
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="h-[500px] w-[500px]"
                >
                  <Image
                    src={temporaryImage || "/images/profile_avatar.svg"}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ) : (
                <div className="h-[500px] w-[500px]">
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
            <section className="profile-details">
              {isEditing ? (
                <>
                  <div className="flex items-center justify-between">
                    <label htmlFor="fullname">Name</label>
                    <CustomInput
                      name="fullname"
                      inputType="text"
                      value={temporaryName}
                      onChange={(event) => setTemporaryName(event.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="email">Email</label>
                    <CustomInput
                      name="email"
                      inputType="email"
                      value={temporaryEmail}
                      onChange={(event) =>
                        setTemporaryEmail(event.target.value)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="gender">Gender</label>
                    <CustomInput
                      name="gender"
                      inputType="text"
                      value={temporaryGender}
                      onChange={(event) =>
                        setTemporaryGender(event.target.value)
                      }
                    />
                  </div>
                  <div className="mt-[40px]">
                    <CustomButton variant="primary" onClick={handleSave}>
                      Save
                    </CustomButton>
                    <CustomButton
                      variant="outline"
                      onClick={handleUpdateProfileClick}
                    >
                      Cancel
                    </CustomButton>
                  </div>
                </>
              ) : (
                <div className="space-y-[30px]">
                  <CustomButton
                    variant="primary"
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
                </div>
              )}
            </section>
          </div>
        </section>
      </main>
    </main>
  );
};

export default AdminProfile;
