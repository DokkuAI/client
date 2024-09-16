import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import OtherTypeIcon from "@/public/OtherType.svg";
import PdfTypeIcon from "@/public/PdfType.svg";
import LinkTypeIcon from "@/public/LinkType.svg";

export default function DocsRow({ type,
          title,
          year,
          authors,
          source,
          tags,
          dateAdded} : any) {
      function selectTypeIcon(type: string) {
        switch (type) {
          case "other":
            return <Image src={OtherTypeIcon} alt="file icon" />;
          case "pdf":
            return <Image src={PdfTypeIcon} alt="pdf icon" />;
          case "link":
            return <Image src={LinkTypeIcon} alt="link icon" />;
        }
      }

    return (
      <TableRow className="text-[14px] leading-[22px] text-[#171A1F] font-normal">
        <TableCell>{selectTypeIcon(type)}</TableCell>
        <TableCell className="font-bold">
          {title}
        </TableCell>
        <TableCell>{year}</TableCell>
        <TableCell>
          {authors}
        </TableCell>
        <TableCell>
          {source}
        </TableCell>
        <TableCell className="" >{tags}</TableCell>
        <TableCell>{dateAdded}</TableCell>
        <TableCell className="flex justify-center">
          <Image src={ThreeDotIcon} alt="three dot icon" />
        </TableCell>
      </TableRow>
    );
} 