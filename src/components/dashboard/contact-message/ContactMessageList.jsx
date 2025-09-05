"use client";

import { formatDate } from "@/helpers/misc";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { Container } from "react-bootstrap";

export const ContactMessageList = ({ data }) => {
  const [expandRows, setExpandRows] = useState(null);
  const router = useRouter();

  const { content, size, totalElements, number } = data;

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Messages</h2>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/contact-message?page=${e.page}`);
  };

  const formattedDates = (row) => formatDate(row.date);

  const formatSubject = (row) => {
    return row.subject.length > 20
      ? `${row.subject.substring(0, 20)} ...`
      : row.subject;
  };

  const rowExpansionTemplate = (row) => {
    return (
      <div className="card mx-5">
        <div className="card-body">
          <div className="card-title fw-bold">{row.subject}</div>
          <div className="card-text">{row.message}</div>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <DataTable
        value={content}
        lazy
        // dataKey="id"
        paginator
        rows={size}
        totalRecords={totalElements}
        stripedRows
        showGridlines
        first={number * size}
        header={header}
        onPage={onPage}
        expandedRows={expandRows}
        onRowToggle={(e) => setExpandRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
      >
        <Column expander={true} style={{ width: "5rem" }} />
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />

        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column body={formattedDates} header="Date" />
        <Column body={formatSubject} header="Subject" />
      </DataTable>
    </Container>
  );
};
