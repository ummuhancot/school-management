"use client";

import { createProgramAction } from "@/actions/program-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MultipleSelect } from "@/components/common/form-fields/MultipleSelect";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { config } from "@/helpers/config";
import { useActionState } from "react";

export const ProgramCreateForm = ({ lessons, terms }) => {
  const [state, action, isPending] = useActionState(createProgramAction);

  if (state?.message) {
    swAlert(state.message, state?.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <MultipleSelect
          name="lessonIdList"
          className="mb-3"
          label="Lessons"
          options={lessons}
          optionLabel="lessonName"
          optionValue="lessonId"
          errorMessage={state?.errors?.lessonIdList}
        />

        <SelectInput
          name="educationTermId"
          className="mb-3"
          label="Term"
          options={terms}
          optionLabel="label"
          optionValue="value"
          errorMessage={state?.errors?.educationTermId}
        />

        <SelectInput
          name="day"
          className="mb-3"
          label="Day"
          options={config.days}
          optionLabel="label"
          optionValue="value"
          errorMessage={state?.errors?.day}
        />

        <TextInput
          name="startTime"
          type="time"
          className="mb-3"
          label="Start Time"
          errorMessage={state?.errors?.startTime}
        />

        <TextInput
          name="stopTime"
          type="time"
          className="mb-3"
          label="End Time"
          errorMessage={state?.errors?.stopTime}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};
