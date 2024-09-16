import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import HeadCell from "../../ui/HeadCell";
import Row from "./DocsRow";

export default function Library() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeadCell title="TYPE" className="w-10" />
          <HeadCell title="TITLE" className="" />
          <HeadCell title="YEAR" className="w-10" />
          <HeadCell title="AUTHORS" className="" />
          <HeadCell title="SOURCE" className="" />
          <HeadCell title="TAGS" className="" />
          <HeadCell title="DATE ADDED" className="w-40" />
          <HeadCell title="OPTIONS" className="text-center w-10" />
        </TableRow>
      </TableHeader>

      <TableBody>
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
        <Row
          type="pdf"
          title="Accurate structure prediction of ..."
          year="2024"
          authors="J. Abramson, J Adler, A. Dunger..."
          source="International Journal of Oral Science"
          tags="$250.00"
          dateAdded="November 21, 2024"
        />
      </TableBody>
    </Table>
  );
}
