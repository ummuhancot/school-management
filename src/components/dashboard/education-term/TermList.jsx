"use client";

import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TermToolbar } from "./TermToolbar";

export const TermList = ({ data }) => {
  const router = useRouter();
  const { content, size, totalElements, number } = data;

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Terms</h2>
      <Link href="/dashboard/education-term/new" className="btn btn-primary">
        <i className="pi pi-plus"> New</i>
      </Link>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/education-term?page=${e.page}`);
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
        <Column field="term" header="Term" style={{ width: "20%" }} />
        <Column field="startDate" header="Begin" style={{ width: "20%" }} />
        <Column field="endDate" header="End" style={{ width: "20%" }} />
        <Column
          field="lastRegistrationDate"
          header="Last Registration"
          style={{ width: "20%" }}
        />

        <Column
          header=""
          body={TermToolbar}
          bodyStyle={{ textAlign: "right" }}
          style={{ width: "25%" }}
        />
      </DataTable>
    </Container>
  );
};
