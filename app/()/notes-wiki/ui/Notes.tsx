import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import HeadCell from "../../ui/HeadCell";
import Row from "./NotesRow";

export default function Notes() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeadCell title="" className="w-14" />
          <HeadCell title="NAME" className="" />
          <HeadCell title="LAST MODIFIED" className="w-40" />
          <HeadCell title="LINK TO" className="" />
          <HeadCell title="PAGES" className="w-10" />
          <HeadCell title="TAGS" className="" />
          <HeadCell title="CREATED BY" className="" />
          <HeadCell title="OPTIONS" className="text-center w-10" />
        </TableRow>
      </TableHeader>

      <TableBody>
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
        <Row
          name="Airsim Simulation Techniques"
          lastModified="November 21, 2024"
          linkTo="PANDA: Framework for ..."
          pages="2000"
          tags="$250.00"
          createdBy="November 21, 2024"
        />
      </TableBody>
    </Table>
  );
}