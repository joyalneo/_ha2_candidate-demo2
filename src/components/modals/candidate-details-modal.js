import React from "react";
import CloseIcon from "../../assets/img/icons/close-icon-modal.svg";
import Avatar from "../../assets/img/avatar.svg";
import MailIcon from "../../assets/img/icons/mail-icon.svg";
import PhoneIcon from "../../assets/img/icons/phone-icon.svg";
import LocationIcon from "../../assets/img/icons/location.svg";
import ProfileIcon from "../../assets/img/icons/prof-icon.svg";
import LinkedInIcon from "../../assets/img/icons/linkedIn.svg";
const CandidateDetailsModal = (props) => {
  const { hasDetailsModal, handleDetailsModal } = props;
  return (
    <>
      <div
        onClick={() => {
          handleDetailsModal();
        }}
        className={`fixed left-0 top-0 z-[999] h-full w-full bg-black/40 ${
          hasDetailsModal ? "fadeIn" : "hidden"
        }`}
      ></div>
      <div
        className={`transition-max-width absolute top-1/2 left-1/2 z-[1000] w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform px-4 duration-200 ${
          hasDetailsModal ? "" : "hidden"
        }`}
      >
        <div className="relative float-left w-full cursor-pointer rounded-2xl bg-white px-6 pt-7 pb-6 shadow-md transition-shadow duration-500 hover:shadow-none">
          <div
            onClick={() => {
              handleDetailsModal();
            }}
            className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white"
          >
            <img className="cursor-pointer" src={CloseIcon} alt="Close"></img>
          </div>
          <div className="flex w-full items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200">
              <img className="max-w-full" src={Avatar} alt=""></img>
            </div>
            <div className="w-full overflow-hidden pl-2.5 pr-2 text-black">
              <p className="truncate text-base font-bold">Esther Howard</p>
              <div className="flex">
                <div className="mr-2 flex items-center">
                  <img className="mr-1.5" src={ProfileIcon} alt="" />
                  <p className="truncate text-sm leading-tight">UX Designer</p>
                </div>
                <div className="flex items-center">
                  <img src={LocationIcon} alt="" />
                  <p className="truncate text-sm leading-tight">India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 w-full">
            <div className="mt-1 flex w-full items-center">
              <img className="mr-1" src={MailIcon} alt="" />
              <p className="truncate text-sm">esthehoward@gmail.com</p>
            </div>
            <div className="mt-1 flex w-full items-center">
              <img className="mr-1" src={PhoneIcon} alt="" />
              <p className="truncate text-sm">+91 9876543210</p>
            </div>
            <a className="mt-1 flex w-full items-center hover:no-underline">
              <img className="mr-1" src={LinkedInIcon} alt="" />
              <p className="truncate text-sm">linkedin.com/navafmuhammed</p>
            </a>
            <div className="mt-6 flex w-full flex-wrap text-sm text-black">
              <span className="float-left mr-2 mb-2 rounded-full bg-[#E5EEFF] py-1.5 px-3">
                Bachelors
              </span>
              <span className="float-left mr-2 mb-2 rounded-full bg-[#E5EEFF] py-1.5 px-3">
                3-5 Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetailsModal;
