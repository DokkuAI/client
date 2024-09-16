import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OtherTypeIcon from "@/public/OtherType.svg";
import PdfTypeIcon from "@/public/PdfType.svg";
import LinkTypeIcon from "@/public/LinkType.svg";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import UploadIcon from "@/public/Upload.svg";
import SearchIcon from "@/public/Search.svg";
import FilterIcon from "@/public/Filter.svg";
import ViewIcon from "@/public/View.svg";
import OtherSourcesIcon from "@/public/OtherSources.svg";
import AllFilesIcon from "@/public/AllFiles.svg";
import LinkedNotesIcon from "@/public/LinkedNotes.svg";
import EditIcon from "@/public/Edit.svg";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Button from "../ui/Button";
import Notes from "./ui/Notes";

function page() {
  return (
    <Tabs defaultValue="allFiles" className="w-full">
      <div className="flex justify-between px-6 lg:px-16 items-center py-2 shadow">
        <TabsList className="gap-4 bg-transparent text-[14px] leading-[22px] font-bold text-[#5E5D5A]">
          <TabsTrigger value="allFiles" className="flex gap-2 px-2">
            <Image src={AllFilesIcon} alt="icon" />
            All Notes
          </TabsTrigger>
          <TabsTrigger value="onlyPDFs" className="flex gap-2 px-2">
            <Image src={LinkedNotesIcon} alt="icon" />
            Linked Docs
          </TabsTrigger>
        </TabsList>
        <div className="flex gap-3 items-center">
          <Button title="Create New" svg={EditIcon} />
          <Button title="Import" svg={UploadIcon} />
          <Button title="Search" svg={SearchIcon} />
          <Button title="Filters" svg={FilterIcon} />
          <Button title="View" svg={ViewIcon} />
        </div>
      </div>

      <TabsContent value="allFiles" className="mt-0">
        <div className="w-full pt-6 px-10">
          <Notes />
        </div>
      </TabsContent>
      <TabsContent value="onlyPDFs" className="mt-0">
        <div className="w-full pt-6 px-10">
          <Notes />
        </div>
      </TabsContent>
      <TabsContent value="onlyLinks" className="mt-0">
        <div className="w-full pt-6 px-10">
          <Notes />
        </div>
      </TabsContent>
      <TabsContent value="other" className="mt-0">
        <div className="w-full pt-6 px-10">
          <Notes />
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default page;
