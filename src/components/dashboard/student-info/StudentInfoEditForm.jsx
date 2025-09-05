"use client";

import { updateStudentInfoAction } from "@/actions/student-info-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const StudentInfoEditForm = ({
  studentInfo,
  students,
  lessons,
  terms,
}) => {
  const [state, action, isPending] = useActionState(updateStudentInfoAction);

  if (state?.message) {
    swAlert(state.message, state.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <input type="hidden" name="id" value={studentInfo?.id} />

        <SelectInput
          name="studentId"
          className="mb-3"
          label="Student"
          errorMessage={state?.errors?.studentId}
          options={students}
          optionLabel="label"
          optionValue="value"
          defaultValue={studentInfo?.studentResponse?.userId}
        />

        <SelectInput
          name="lessonId"
          className="mb-3"
          label="Lesson"
          options={lessons}
          optionLabel="lessonName"
          optionValue="lessonId"
          defaultValue={studentInfo.lessonId}
          errorMessage={state?.errors?.lessonId}
        />

        <SelectInput
          name="educationTermId"
          className="mb-3"
          label="Term"
          errorMessage={state?.errors.educationTermId}
          options={terms}
          optionLabel="label"
          optionValue="value"
          defaultValue={studentInfo.educationTermId}
        />

        <TextInput
          name="absentee"
          className="mb-3"
          label="Absentee"
          errorMessage={state?.errors?.absentee}
          defaultValue={studentInfo.absentee}
          type="number"
        />

        <TextInput
          name="midtermExam"
          label="Midterm Exam"
          className="mb-3"
          errorMessage={state?.errors?.midtermExam}
          defaultValue={studentInfo.midtermExam}
          type="number"
        />

        <TextInput
          name="finalExam"
          label="Final Exam"
          className="mb-3"
          errorMessage={state?.errors?.finalExam}
          defaultValue={studentInfo.finalExam}
          type="number"
        />

        <TextInput
          name="infoNote"
          className="mb-3"
          label="Info"
          errorMessage={state?.errors?.infoNote}
          defaultValue={studentInfo.infoNote}
        />

        <BackButton className="me-2" />
        <SubmitButton pending={isPending} title="Update" />
      </form>
    </FormContainer>
  );
};

// {
//   "absentee": 0,
//   "educationTermId": 0,
//   "finalExam": 0,
//   "infoNote": "string",
//   "lessonId": 0,
//   "midtermExam": 0
// }
