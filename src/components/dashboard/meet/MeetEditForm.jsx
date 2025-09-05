"use client";

import { updateMeetAction } from "@/actions/meet-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MultipleSelect } from "@/components/common/form-fields/MultipleSelect";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const MeetEditForm = ({ meet, studentsOfAdvisor, studentsOfMeet }) => {
  const [state, action, isPending] = useActionState(updateMeetAction);

  if (state?.message) {
    swAlert(state.message, state.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <input type="hidden" name="id" value={meet?.object?.id} />
        <MultipleSelect
          name="studentIds"
          className="mb-3"
          label="Students"
          errorMessage={state?.errors?.studentIds}
          options={studentsOfAdvisor}
          optionLabel="label"
          optionValue="value"
          values={studentsOfMeet}
        />

        <TextInput
          name="date"
          label="Date"
          className="mb-3"
          type="date"
          errorMessage={state?.errors?.date}
          defaultValue={meet?.object?.date}
        />

        <TextInput
          name="startTime"
          className="mb-3"
          label="Start"
          type="time"
          errorMessage={state?.errors?.startTime}
          defaultValue={meet?.object?.startTime}
        />

        <TextInput
          name="stopTime"
          className="mb-3"
          label="End"
          type="time"
          errorMessage={state?.errors?.stopTime}
          defaultValue={meet?.object?.stopTime}
        />

        <TextInput
          name="description"
          label="Description"
          className="mb-3"
          errorMessage={state?.errors?.description}
          defaultValue={meet?.object?.description}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Update" pending={isPending} />
      </form>
    </FormContainer>
  );
};
