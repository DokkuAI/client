import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex items-center justify-evenly px-8">
        <Image width={400} height={400} src="/image.png" alt="login-hero" />
        {children}  
      </div>
    </>
  );
}
