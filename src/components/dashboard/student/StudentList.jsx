"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Container } from "react-bootstrap";
import { StudentToolbar } from "./StudentToolbar";

export const StudentList = ({ data }) => {
  const router = useRouter();

  const { content, size, totalElements, number } = data;

  const header = (
    <div className="d-flex justify-content-between align-items-center ">
      <h2>Students</h2>
      <Link href="/dashboard/student/new" className="btn btn-primary">
        <i className="pi pi-plus"></i> New
      </Link>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/student?page=${e.page}`);
  };

  return (
    <Container>
      <DataTable
        value={content}
        lazy
        dataKey="id"
        paginator
        rows={size}
        totalRecords={totalElements}
        first={number * size}
        stripedRows
        showGridlines
        header={header}
        onPage={onPage}
      >
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />

        <Column field="name" header="First Name" />
        <Column field="surname" header="Last Name" />
        <Column field="username" header="Username" />

        <Column
          header=""
          body={StudentToolbar}
          bodyStyle={{ textAlign: "right" }}
        />
      </DataTable>
    </Container>
  );
};
