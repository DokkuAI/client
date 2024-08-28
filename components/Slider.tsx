"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

const Slider = () => {
  const path = usePathname();

  return (
    <div className="flex gap-[9px] justify-center py-3">
      <div
        className={clsx("w-[55px] mb:w-[88px]  h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up",
          "bg-[#262A33]": path === "/sign-up",
        })}
      ></div>
      <div
        className={clsx("w-[55px] mb:w-[88px] h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up/verify-email-address",
          "bg-[#262A33]": path === "/sign-up/verify-email-address",
        })}
      ></div>
      <div
        className={clsx("w-[55px] mb:w-[88px] h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up/collaboration",
          "bg-[#262A33]": path === "/sign-up/collaboration",
        })}
      ></div>
      <div
        className={clsx("w-[55px] mb:w-[88px] h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up/welcome",
          "bg-[#262A33]": path === "/sign-up/welcome",
        })}
      ></div>
    </div>
  );
};

export default Slider;
