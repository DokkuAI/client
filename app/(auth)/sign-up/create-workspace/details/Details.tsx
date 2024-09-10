import { string, z } from "zod";
import { useForm } from "react-hook-form";
import EngineerIcon from "@/public/EngineerIcon.svg"
import Image from "next/image";

const Details = () => {
  const forSchema = z.object({
    work: z.enum(["engineer", "manager", "researcher", "other"], {
      message: "Work is required",
    }),
    role: z.enum(
      ["executive", "researcher", "manager", "engineer", "freelancer", "other"],
      {
        message: "Role is required",
      }
    ),
    size: z.enum([
      "0-1",
      "2-10",
      "11-50",
      "51-200",
      "201-500",
      "501-1000",
      "1001-5000",
      "5000+",
    ]),
    description: string().max(80).optional(),
  });

  // const {register} = useForm();

  return (
    <div className="flex flex-col gap-[13px] text-[#171A1F] text-center items-center mx-4">
      <div className="text-[28px] leading-[42px] font-bold">
        Tell us about Yourself
      </div>
      <div className="text-[16px] leading-[26px] font-normal">
        This help us in knowing you better!
      </div>
      <form className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col items-start gap-[5px]">
          <Title title="What kind of work you do?" />
          <select className="  pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]">
            <option value="" disabled selected hidden>
              Select your response
            </option>
            <option value="engineer">Engineer</option>
            <option value="manager">Manager</option>
            <option value="researcher">Researcher</option>
            <option value="other">Other individual</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <Title title="What's your role?" />
          <select className="  pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]">
            <option value="" disabled selected hidden>
              Select your response
            </option>
            <option value="executive">Executive (CXO level / VP)</option>
            <option value="researcher">Researcher / Research Scientist</option>
            <option value="manager">Team Manager</option>
            <option value="engineer">Team Engineer</option>
            <option value="freelancer">Freelancer</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <Title title="What's the size of your company?" />
          <select className="  pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]">
            <option value="" disabled selected hidden>
              Select your response
            </option>
            <option value="0-1">0-1 employees</option>
            <option value="2-10">2-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201 - 500 employees</option>
            <option value="500-1000">501-1000 employees</option>
            <option value="1001-5000">1001-5000 employees</option>
            <option value="5000+">5000+ employees</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <Title title="What's the size of your company?" />
          <input
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]"
            type="text"
            placeholder="Write in less than 10 words"
          />
        </div>
        <div className="mt-9 flex gap-4 w-[285px] mb:w-[379px]">
          <button className="w-3/5 h-[44px] bg-white rounded-lg text-[16px] leading-[26px] font-normal text-black flex items-center justify-center border-2 border-black">
            Back
          </button>
          <button className="w-full h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF] flex items-center justify-center ">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;


function Title({title} : {title: string}) {

  return (
    <div className="text-[16px] leading-[26px] font-bold ">
      {title}
    </div>
  );
}