"use client";

import { createLessonAction } from "@/actions/lesson-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { CheckInput } from "@/components/common/form-fields/CheckInput";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const LessonCreateForm = () => {
  const [state, action, isPending] = useActionState(createLessonAction);

  if (state?.message) {
    swAlert(state.message, state?.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <TextInput
          name="lessonName"
          className="mb-3"
          label="Lesson Name"
          errorMessage={state?.errors?.lessonName}
        />
        <TextInput
          name="creditScore"
          className="mb-3"
          label="Credit"
          type="number"
          errorMessage={state?.errors?.creditScore}
        />
        <CheckInput
          name="compulsory"
          label="Compulsory"
          className="mb-3 "
          errorMessage={state?.errors?.compulsory}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};

// {
//   "compulsory": true,
//   "creditScore": 0,
//   "lessonName": "string"
// }
