import RemoveIcon from "@/public/Remove.svg";
import Image from "next/image";
import CrossIcon from "@/public/Cross.svg"
import { Progress } from "@/components/ui/progress";


const Upload = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-[#171A1F66]">
      <div className="flex flex-col bg-white w-2/5 min-w-[500px] px-6 pb-6 pt-3 gap-3 text-center">
        <div className="flex justify-end cursor-pointer">
          <Image src={RemoveIcon} alt="close icon" />
        </div>
        <div className="text-[32px] leading-[48px] text-[#171A1F] font-bold w-full">
          Upload files
        </div>
        <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
          PDF, Docx, Links. Max 10MB each.
        </div>
        <div className="h-[200px] border-dashed border-2 rounded-lg mt-4 mb-7 border-[#1D2128]"></div>
        <UploadFiles />
      </div>
    </div>
  );
};

export default Upload;


function UploadFiles() {
  return (
    <>
      <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal text-left">
        Uploading files
      </div>
      <div className="my-1 flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image src="/png.png" width={48} height={48} alt="image" />
          <div className="flex flex-col w-full ">
            <div className="text-[14px] leading-[22px] font-normal flex items-center justify-between">
              <div className="text-[#171A1F]">Image-100.docx</div>
              <div className="text-[#9095A0]">76%</div>
            </div>
            <Progress value={33} />
          </div>
          <Image src={CrossIcon} alt="cross icon" className="ml-3" />
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/png.png" width={48} height={48} alt="image" />
          <div className="flex flex-col w-full h-full">
            <div className="text-[14px] leading-[22px] font-normal flex items-center justify-between">
              <div className="text-[#171A1F]">Image-100.docx</div>
              <div className="text-[#9095A0]">76%</div>
            </div>
            <Progress value={33} />
          </div>
          <Image src={CrossIcon} alt="cross icon" className="ml-3" />
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/png.png" width={48} height={48} alt="image" />
          <div className="flex flex-col w-full">
            <div className="text-[14px] leading-[22px] font-normal flex items-center justify-between">
              <div className="text-[#171A1F]">Image-100.docx</div>
              <div className="text-[#9095A0]">76%</div>
            </div>
            <Progress value={33} />
          </div>
          <Image src={CrossIcon} alt="cross icon" className="ml-3" />
        </div>
      </div>
    </>
  );
}