import Sidebar from "@/components/Sidebar";
import Slider from "@/components/Slider";
import { Children } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-w-[1440px] 2xl:mx-auto min-h-dvh">
      <Sidebar />
      <div className="flex flex-col w-full pt-4">
        <div className="w-full flex flex-grow justify-center items-center">
          {children}
        </div>
        <Slider />
      </div>
    </div>
  );
}