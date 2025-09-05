"use client";

import { formatDate } from "@/helpers/misc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { MeetToolbar } from "./MeetToolbar";

// TODO: yeni meet oluşturduktan sonra geri dön.

export const MeetList = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState(null);
  const router = useRouter();
  const { content, size, totalElements, number } = data;

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Meets</h2>
      <Link href="/dashboard/meet/new" className="btn btn-primary">
        <i className="pi pi-plus"></i> New
      </Link>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/meet?page=${e.page}`);
  };

  const rowExpansionTemplate = (row) => {
    return (
      <div className="mx-5 card">
        <div className="card-body">
          <div className="card-title fw-bold">Participants:</div>
          <div className="card-text">
            {row.students
              .map((item) => `${item.name} ${item.surname}`)
              .join(", ")}
          </div>
        </div>
      </div>
    );
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
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
      >
        <Column expander={true} style={{ width: "5rem" }} />
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />

        <Column body={(row) => formatDate(row.date)} header="Date" />
        <Column field="startTime" header="Start" />
        <Column field="stopTime" header="End" />
        <Column field="description" header="Description" />

        <Column header="" body={MeetToolbar} />
      </DataTable>
    </Container>
  );
};
