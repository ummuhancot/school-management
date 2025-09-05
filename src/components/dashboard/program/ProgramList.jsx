"use client";

import { getDayLabel, getLessonNames } from "@/helpers/misc";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Container } from "react-bootstrap";
import { ProgramToolbar } from "./ProgramToolbar";
import { useRouter } from "next/navigation";

export const ProgramList = ({ data }) => {
  const { content, size, totalElements, number } = data;
  const router = useRouter();

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>Programs</h2>
      <Link href="/dashboard/program/new" className="btn btn-primary">
        <i className="pi pi-plus"></i> New
      </Link>
    </div>
  );

  const onPage = (e) => {
    router.push(`/dashboard/program?page=${e.page}`);
  };

  const formatDay = (row) => getDayLabel(row.day);
  const formatLessons = (row) => getLessonNames(row.lessonName);

  return (
    <Container>
      <DataTable
        value={content}
        lazy
        dataKey="lessonProgramId"
        paginator
        rows={size}
        totalRecords={totalElements}
        first={number * size}
        stripedRows
        showGridlines
        header={header}
        onPage={onPage}
      >
        <Column header="#" body={(row, options) => options.rowIndex + 1} />

        <Column body={formatLessons} header="Lessons" />
        <Column body={formatDay} header="Day" />
        <Column field="startTime" header="Start" />
        <Column field="stopTime" header="End" />
        <Column
          header=""
          body={ProgramToolbar}
          bodyStyle={{ textAlign: "right" }}
        />
      </DataTable>
    </Container>
  );
};
