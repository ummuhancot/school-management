"use client";

import { formatDate } from "@/helpers/misc";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Container } from "react-bootstrap";

export default function StudentMeetList({ data }) {
  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Meets</h2>
    </div>
  );

  return (
    <Container>
      <DataTable
        value={data}
        lazy
        dataKey="id"
        stripedRows
        showGridlines
        header={header}
      >
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />

        <Column body={(row) => formatDate(row.date)} header="Date" />
        <Column field="startTime" header="Start" />
        <Column field="stopTime" header="End" />
        <Column field="description" header="Description" />
      </DataTable>
    </Container>
  );
}
