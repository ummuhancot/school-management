"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Container } from "react-bootstrap";
import { LessonToolbar } from "./LessonToolbar";

export const LessonList = ({ data }) => {
  const router = useRouter();
  const { content, size, totalElements, number } = data;

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Lessons</h2>
      <Link href="/dashboard/lesson/new" className="btn btn-primary">
        <i className="pi pi-plus"></i> New
      </Link>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/lesson?page=${e.page}`);
  };

  const formatCompulsory = (row) =>
    row.compulsory ? (
      <i className="pi pi-check text-success text-center"></i>
    ) : (
      <i className="pi pi-minus text-warning text-center"></i>
    );

  return (
    <Container>
      <DataTable
        value={content}
        lazy
        dataKey="lessonId"
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

        <Column field="lessonName" header="Lesson" />
        <Column field="creditScore" header="Credit" />
        <Column
          body={formatCompulsory}
          bodyStyle={{ marginLeft: "30px" }}
          header="Compulsory"
        />
        <Column
          header=""
          bodyStyle={{ textAlign: "right" }}
          body={LessonToolbar}
        />
      </DataTable>
    </Container>
  );
};
