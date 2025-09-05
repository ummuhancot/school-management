"use client";

import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ManagerToolbar } from "./ManagerToolbar";

export const ManagerList = ({ data }) => {
  const router = useRouter();
  const { content, size, totalElements, number } = data;

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Managers</h2>
      <Link href="/dashboard/manager/new" className="btn btn-primary">
        <i className="pi pi-plus"> New</i>
      </Link>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/manager?page=${e.page}`);
  };

  return (
    <Container>
      <DataTable
        value={content}
        lazy
        dataKey="userId"
        paginator
        rows={size}
        totalRecords={totalElements}
        stripedRows
        showGridlines
        first={number * size}
        header={header}
        onPage={onPage}
      >
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />
        <Column field="name" header="First Name" style={{ width: "25%" }} />
        <Column field="surname" header="Last Name" style={{ width: "25%" }} />
        <Column field="username" header="Username" style={{ width: "25%" }} />
        <Column
          header=""
          body={ManagerToolbar}
          bodyStyle={{ textAlign: "right" }}
          style={{ width: "25%" }}
        />
      </DataTable>
    </Container>
  );
};
