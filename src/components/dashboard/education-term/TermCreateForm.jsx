"use client";

import { createTermAction } from "@/actions/term-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { DateInput } from "@/components/common/form-fields/DateInput";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MaskedInput } from "@/components/common/form-fields/MaskedInput";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { config } from "@/helpers/config";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const TermCreateForm = () => {
  const [state, action, isPending] = useActionState(createTermAction);

  if (state?.message) {
    swAlert(state?.message, state.ok ? "success" : "error");
  }
  return (
    <FormContainer>
      <form action={action}>
        <SelectInput
          name="term"
          className="mb-3"
          label="Term"
          errorMessage={state?.errors.term}
          options={config.educationTerms}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="startDate"
          className="mb-3"
          label="Start Date"
          type="date"
          errorMessage={state?.errors.birthDay}
        />

        <TextInput
          name="endDate"
          className="mb-3"
          label="End Date"
          type="date"
          errorMessage={state?.errors.birthDay}
        />
        <TextInput
          name="lastRegistrationDate"
          className="mb-3"
          label="Last Registration Date"
          type="date"
          errorMessage={state?.errors.birthDay}
        />
        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};

//   "term": "FALL_SEMESTER" +++++
//   "endDate": "yyyy-MM-dd", ++++
//   "lastRegistrationDate": "yyyy-MM-dd", +++++
//   "startDate": "yyyy-MM-dd", +++++
