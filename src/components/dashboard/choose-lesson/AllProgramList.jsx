"use client";

import { assignProgramToStudentAction } from "@/actions/student-actions";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { formatDate } from "@/helpers/misc";
import { swAlert } from "@/helpers/sweetalert";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useActionState, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

export const AllProgramList = ({ allPrograms }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);

  const [state, action, isPending] = useActionState(
    assignProgramToStudentAction
  );

  const header = (
    <div className="d-flex justify-content-between align-items-center">
      <h2>All Programs</h2>
    </div>
  );

  const rowExpansionTemplate = (row) => {
    return (
      <div className="card mx-5">
        <div className="card-body">
          <div className="card-title fw-5">Teachers:</div>
          <div className="card-text">
            {row.teachers.map((item) => (
              <div className="badge bg-secondary me-2" key={item.userId}>
                {item.name} {item.surname}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const formatLessons = (row) =>
    row.lessonName.map((item) => item.lessonName).join(" - ");

  const handleSelect = (e) => {
    setSelectedItems(e.value);
    setSelectedIds(e.value.map((item) => item.lessonProgramId));
  };

  useEffect(() => {
    if (state?.message) {
      swAlert(state?.message, state?.ok ? "success" : "error");
    }
  }, [state?.responseId]);

  return (
    <Container>
      <DataTable
        value={allPrograms}
        lazy
        dataKey="lessonProgramId"
        stripedRows
        showGridlines
        header={header}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        onSelectionChange={handleSelect}
        selection={selectedItems}
      >
        <Column expander={true} style={{ width: "5rem" }} />
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />
        <Column body={formatLessons} header="Lessons" />
        <Column field="day" header="Day" />
        <Column field="startTime" header="Start" />
        <Column field="stopTime" header="Stop" />
      </DataTable>

      {state?.errors?.lessonProgramId && (
        <div className="text-danger mt-2">{state?.errors?.lessonProgramId}</div>
      )}

      <hr className="my-4" />

      <form action={action}>
        <input
          type="hidden"
          name="lessonProgramId"
          value={JSON.stringify(selectedIds)}
        />

        <div className="text-center">
          <SubmitButton title="Select" pending={isPending} icon="check" />
        </div>
      </form>
    </Container>
  );
};
