import { Table } from "@mantine/core";

function CommonTable({ rows, titles }: any) {
  return (
    <Table verticalSpacing="lg" className="text-body font-normal">
      <thead>
        <tr>
          {titles?.map((val: any, idx: number) => (
            <th key={idx}>
              <span className="text-placeholder font-normal">{val}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
export default CommonTable;
