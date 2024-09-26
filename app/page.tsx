import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton />
      <hr />
      <Link href="/sign-up">Sign UP Page</Link>
      <br />
      <hr />
      <Link href="/sign-in">Sign IN Page</Link>
      <br />
      <hr />
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <hr />
      <Link href="/reference-library">Reference Library</Link>
      <br />
      <hr />
      <Link href="/notes-wiki">Notes Wiki</Link>
      <br />
      <hr />
      <Link href="/workspace">Workspace</Link>
      <br />
    </>
  );
}
