"use client";

import { assignProgramToTeacherAction } from "@/actions/teacher-actions";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useActionState, useState } from "react";
import { Container } from "react-bootstrap";

export const UnassignedProgramList = ({ programs, teachers }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [state, action, isPending] = useActionState(
    assignProgramToTeacherAction
  );

  const header = (
    <div className="d-flex justify-content-center align-items-center">
      <h2>Unassigned Programs</h2>
    </div>
  );

  const formatLessons = (row) =>
    row.lessonName.map((item) => item.lessonName).join(" - ");

  return (
    <Container>
      <DataTable
        value={programs}
        lazy
        dataKey="lessonProgramId"
        stripedRows
        showGridlines
        header={header}
        selection={selectedItems}
        onSelectionChange={(e) => {
          return setSelectedItems(e.value);
        }}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
        />
        <Column body={formatLessons} header="Lessons" />
        <Column field="startTime" header="Start" />
        <Column field="stopTime" header="End" />
      </DataTable>

      <hr className="my-5" />

      <form action={action}>
        <input
          type="hidden"
          name="lessonProgramId"
          value={JSON.stringify(selectedItems)}
        />

        <div className="d-flex align-items-center gap-2">
          <SelectInput
            name="teacherId"
            label="Teacher"
            options={teachers}
            optionLabel="label"
            optionValue="value"
          />
          <SubmitButton title="Assign" pending={isPending} />
        </div>
      </form>
    </Container>
  );
};
