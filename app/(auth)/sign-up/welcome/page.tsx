
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" flex flex-col items-center gap-[13px] text-[#171A1F] text-center">
      <div className="text-[28px] leading-[42px] font-bold">
        Welcome to DokkuAi!
      </div>
      <div className="text-[16px] leading-[26px] font-normal">
        Get up and runing your workspace
      </div>
      <Image
        width={400}
        height={400}
        src="/image.png"
        alt="signup-welocme-hero"
        className=" mt-[9px] mb-[20px]"
      />
      <Link
        href="/"
        className="mb:w-[374px] w-[280px] h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF] flex items-center justify-center "
      >
        Continue
      </Link>
    </div>
  );
};

export default Page;
