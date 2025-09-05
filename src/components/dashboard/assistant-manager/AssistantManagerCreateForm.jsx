"use client";

import { createAssistantManagerAction } from "@/actions/assistant-manager-actions";
import { createManagerAction } from "@/actions/manager-actions";
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

export const AssistantManagerCreateForm = () => {
  const [state, action, isPending] = useActionState(
    createAssistantManagerAction
  );

  if (state?.message) {
    swAlert(state?.message, state.ok ? "success" : "error");
  }
  return (
    <FormContainer>
      <form action={action}>
        <TextInput
          name="name"
          className="mb-3"
          label="First Name"
          errorMessage={state?.errors.name}
        />

        <TextInput
          name="surname"
          className="mb-3"
          label="Last Name"
          errorMessage={state?.errors.surname}
        />

        <TextInput
          name="username"
          className="mb-3"
          label="Username"
          errorMessage={state?.errors.username}
        />

        <SelectInput
          name="gender"
          className="mb-3"
          label="Gender"
          errorMessage={state?.errors.gender}
          options={config.genders}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="birthDay"
          className="mb-3"
          label="Date of Birth"
          type="date"
          errorMessage={state?.errors.birthDay}
        />

        <TextInput
          name="birthPlace"
          className="mb-3"
          label="Place of Birth"
          errorMessage={state?.errors.birthPlace}
        />

        <MaskedInput
          name="phoneNumber"
          className="mb-3"
          label="Phone Number"
          mask="999-999-9999"
          errorMessage={state?.errors.phoneNumber}
        />

        <MaskedInput
          name="ssn"
          className="mb-3"
          label="SSN"
          mask="999-99-9999"
          errorMessage={state?.errors.ssn}
        />

        <TextInput
          name="password"
          className="mb-3"
          label="Password"
          type="password"
          autoComplete="off"
          errorMessage={state?.errors.password}
        />

        <TextInput
          name="confirmPassword"
          className="mb-3"
          label="Confirm Password"
          type="password"
          autoComplete="off"
          errorMessage={state?.errors.confirmPassword}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" />
      </form>
    </FormContainer>
  );
};

// {
//   "password": "string", ++++++
//   "phoneNumber": "string", +++++
//   "ssn": "string", +++++
//   "birthPlace": "string", ++++++
//   "birthDay": "yyyy-MM-dd", +++++
//   "gender": "MALE",+++++++
//   "name": "string", +++++
//   "surname": "string", +++++
//   "username": "string" ++++++
// }
