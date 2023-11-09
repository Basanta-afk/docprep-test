import { Table } from "@mantine/core";
import { MoveUp, UploadIcon } from "lucide-react";

function CommonTable({ rows, titles }: any) {
  return (
    <Table verticalSpacing="xs" className="text-body font-normal">
      <thead>
        <tr>
          {titles?.map((val: any, idx: number) => (
            <th key={idx}>
              {idx === 3 || idx === 4 ? (
                <span className="text-placeholder font-normal cursor-pointer">
                  {val} <MoveUp size={10} />
                </span>
              ) : (
                <span className="text-placeholder font-normal">{val}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="font-bold text-base">{rows}</tbody>
    </Table>
  );
}
export default CommonTable;
