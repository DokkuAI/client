import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Link href="/sign-up">Sign UP Page</Link>
      <br />
      <Link href="/sign-in">Sign IN Page</Link>
      <br />
      <UserButton />
    </>
  );
}
