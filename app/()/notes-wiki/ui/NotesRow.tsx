import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import OtherTypeIcon from "@/public/OtherType.svg";


export default function NotesRow({
  name,
  lastModified,
  linkTo,
  pages,
  tags,
  createdBy
}: any) {

  return (
    <TableRow className="text-[14px] leading-[22px] text-[#171A1F] font-normal">
      <TableCell>
        <Image src={OtherTypeIcon} alt="file icon" />
      </TableCell>
      <TableCell className="font-bold">{name}</TableCell>
      <TableCell>{lastModified}</TableCell>
      <TableCell>{linkTo}</TableCell>
      <TableCell>{pages}</TableCell>
      <TableCell className="">{tags}</TableCell>
      <TableCell>{createdBy}</TableCell>
      <TableCell className="flex justify-center">
        <Image src={ThreeDotIcon} alt="three dot icon" />
      </TableCell>
    </TableRow>
  );
}
