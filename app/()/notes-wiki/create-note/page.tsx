import { Suspense } from "react";
import NotesEditor from "./ui/NotesEditor";
import Skeleton from "@/components/ui/Skeleton";

const page = () => {
  return (
    <Suspense fallback={<Skeleton />}>
        <NotesEditor />
    </Suspense>
  );
};

export default page;
