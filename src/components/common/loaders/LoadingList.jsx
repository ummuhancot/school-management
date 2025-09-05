"use client";

import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";

export const LoadingList = ({ colCount = 4, rowCount = 4 }) => {
  const rows = Array.from({ length: rowCount }, (v, i) => i);
  const cols = Array.from({ length: colCount }, (v, i) => i);

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>
        <Skeleton width="10rem" height="2.5rem" />
      </h2>
      <Skeleton width="5rem" height="2.5rem" />
    </div>
  );

  return (
    <Container>
      <DataTable
        value={rows}
        stripedRows
        showGridlines
        header={header}
        className="w-100"
      >
        <Column
          field="code"
          header={<Skeleton width="1rem" />}
          headerStyle={{ width: "20px" }}
          body={<Skeleton />}
        ></Column>

        {cols.map((col) => (
          <Column
            key={col}
            field="code"
            header={<Skeleton width="3rem" />}
            style={{ width: `25%` }}
            body={<Skeleton />}
          />
        ))}
      </DataTable>
    </Container>
  );
};
