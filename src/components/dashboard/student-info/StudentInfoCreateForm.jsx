"use client";

import { createStudentInfoAction } from "@/actions/student-info-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const StudentInfoCreateForm = ({ students, lessons, terms }) => {
  const [state, action, isPending] = useActionState(createStudentInfoAction);

  if (state?.message) {
    swAlert(state.message, state?.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <SelectInput
          name="studentId"
          label="Student"
          className="mb-3"
          errorMessage={state?.errors.studentId}
          options={students}
          optionLabel="label"
          optionValue="value"
        />

        <SelectInput
          name="lessonId"
          label="Lesson"
          className="mb-3"
          errorMessage={state?.errors.lessonId}
          options={lessons}
          optionLabel="lessonName"
          optionValue="lessonId"
        />

        <SelectInput
          name="educationTermId"
          label="Term"
          className="mb-3"
          errorMessage={state?.errors.educationTermId}
          options={terms}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="absentee"
          label="Absentee"
          className="mb-3"
          type="number"
          errorMessage={state?.errors.absentee}
        />

        <TextInput
          name="midtermExam"
          label="Midterm Exam"
          className="mb-3"
          type="number"
          errorMessage={state?.errors.midtermExam}
        />

        <TextInput
          name="finalExam"
          label="Final Exam"
          className="mb-3"
          type="number"
          errorMessage={state?.errors.finalExam}
        />

        <TextInput
          name="infoNote"
          label="Info"
          className="mb-3"
          errorMessage={state?.errors.infoNote}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};

// {
//   "studentId": 0 ++++++++
//   "lessonId": 0, ++++++++
//   "educationTermId": 0, ++++++++
//   "absentee": 0, ++++++++
//   "midtermExam": 0,
//   "finalExam": 0,
//   "infoNote": "string",
// }
