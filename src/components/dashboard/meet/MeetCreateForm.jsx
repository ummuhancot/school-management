"use client";

import { createMeetAction } from "@/actions/meet-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { DateInput } from "@/components/common/form-fields/DateInput";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MultipleSelect } from "@/components/common/form-fields/MultipleSelect";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { initialResponse, response } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const MeetCreateForm = ({ students }) => {
  const [state, action, isPending] = useActionState(
    createMeetAction,
    initialResponse
  );

  if (state?.message) {
    swAlert(state.message, state.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <MultipleSelect
          name="studentIds"
          className="mb-3"
          label="Students"
          errorMessage={state?.errors?.studentIds}
          options={students}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="date"
          label="Date"
          className="mb-3"
          type="date"
          errorMessage={state?.errors?.date}
        />

        <TextInput
          name="startTime"
          className="mb-3"
          label="Start"
          type="time"
          errorMessage={state?.errors?.startTime}
        />

        <TextInput
          name="stopTime"
          className="mb-3"
          label="End"
          type="time"
          errorMessage={state?.errors?.stopTime}
        />

        <TextInput
          name="description"
          label="Description"
          className="mb-3"
          errorMessage={state?.errors?.description}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};

// {
//   "date": "yyyy-MM-dd", ++++++
//   "description": "string",
//   "startTime": "HH:mm",
//   "stopTime": "HH:mm",
//   "studentIds": [ ++++++
//     0             ++++++
//   ]               ++++++
// }
