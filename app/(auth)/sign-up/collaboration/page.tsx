"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-[13px]  text-[#171A1F] text-center">
      <div className="text-[28px] leading-[42px] font-bold">
        Invite your team
      </div>
      <div className="text-[16px] leading-[26px] font-normal">
        Start collaborating with your team
      </div>
      <div className="w-full mt-[27px] mb-[31px]">
        <div className="text-[16px] leading-[26px] font-bold text-left">
          Email Address
        </div>
        <div className="w-full flex flex-col gap-[16px] justify-center mt-[5px] mb-[19px]">
          <input
            type="email"
            placeholder="Enter an email address"
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]"
          />
          <input
            type="email"
            placeholder="Enter an email address"
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA] text-[]"
          />
          <input
            type="email"
            placeholder="Enter an email address"
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA] text-[]"
          />
        </div>
        <div className="flex items-center gap-[11px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.28564L8 13.7142"
              stroke="#9095A0"
              stroke-width="1.37143"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M13.7142 8L2.28564 8"
              stroke="#9095A0"
              stroke-width="1.37143"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
          </svg>
          <div className="text-[#9095A0] text-[16px] leading-[26px] font-normal">
            Add more
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          router.push("/sign-up/welcome");
        }}
        className="mb:w-[374px] w-[280px] h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF]"
      >
        Continue
      </button>
    </div>
  );
};

export default Page;
