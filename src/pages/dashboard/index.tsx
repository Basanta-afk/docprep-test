import CommonTable from "@/components/common/CommonTable";
import CommonTextField from "@/components/common/form/CommonTextField";
import DashboardLayout from "@/layouts/DashboardLayout";
import LandingLayout from "@/layouts/LandingLayout";
import { rows, tableRow } from "@/utils/constants/tabledata";
import { Select, TextInput } from "@mantine/core";
import { SearchIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
  const rowData: any = rows?.map((items: any, index: number) => {
    return (
      <tr key={index}>
        {/* <td>{index + 1}. </td> */}
        <td>{items?.name}</td>
        <td>{items?.questions}</td>
        <td>{items?.time}</td>
        <td>{items?.recent}</td>
        <td>{items?.kind}</td>
      </tr>
    );
  });
  return (
    <div>
      {/* <SideNav /> */}
      <header className="flex justify-between mb-10">
        <h1 className="text-lg text-title-active">Recent</h1>
        <section className="h-10">
          <CommonTextField placeholder="Search recent set" icon={<SearchIcon />} height={10} />
        </section>
      </header>
      <main>
        <CommonTable titles={tableRow} rows={rowData} />
      </main>
    </div>
  );
};

Dashboard.Layout = DashboardLayout;
export default Dashboard;
