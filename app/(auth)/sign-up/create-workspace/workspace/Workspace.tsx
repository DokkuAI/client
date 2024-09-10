"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Workspace = () => {


    const router = useRouter();
    function handleClickBack() {
      router.push("/sign-up/create-workspace/details");
    }

    function handleClickContinue() {
      router.push("/")
    }

  return (
    <div className="flex flex-col gap-[13px] text-[#171A1F] text-center items-center mx-4">
      <div className="text-[28px] leading-[42px] font-bold">
        Give your workspace a name
      </div>
      <div className="text-[16px] leading-[26px] font-normal">
        Details help in which workspace you are!
      </div>
      <Image
        className="mt-9 mb-2"
        width="100"
        height="100"
        src="/PlaceholderIcon.png"
        alt="placeholder icon"
      />
      <div className="text-[16px] leading-[26px] font-bold">
        Choose or add an icon
      </div>
      <div className="flex flex-col items-start gap-2 mt-9">
        <div className="text-[16px] leading-[26px] font-bold">
          Workspace Name
        </div>
        <form>
          <input
            type="text"
            placeholder="DokkuAI Inc."
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]"
          />
        </form>
        <div className="text-[11px] leading-[18px] font-normal">
          The name of your company or organization
        </div>
      </div>
      <div className="mt-9 flex gap-4 w-[285px] mb:w-[379px]">
        <button
          onClick={handleClickBack}
          className="w-3/5 h-[44px] bg-white rounded-lg text-[16px] leading-[26px] font-normal text-black flex items-center justify-center border-2 border-black"
        >
          Back
        </button>
        <button
          onClick={handleClickContinue}
          className="w-full h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF] flex items-center justify-center "
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Workspace