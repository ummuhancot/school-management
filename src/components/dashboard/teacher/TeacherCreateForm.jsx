"use client";

import { createTeacherAction } from "@/actions/teacher-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { CheckInput } from "@/components/common/form-fields/CheckInput";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MaskedInput } from "@/components/common/form-fields/MaskedInput";
import { MultipleSelect } from "@/components/common/form-fields/MultipleSelect";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { config } from "@/helpers/config";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const TeacherCreateForm = ({ programs }) => {
  const [state, action, isPending] = useActionState(createTeacherAction);

  if (state?.message) {
    swAlert(state?.message, state.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <TextInput
          name="name"
          label="First Name"
          className="mb-3"
          errorMessage={state?.errors?.name}
        />
        <TextInput
          name="surname"
          label="Last Name"
          className="mb-3"
          errorMessage={state?.errors?.surname}
        />
        <SelectInput
          name="gender"
          label="Gender"
          className="mb-3"
          errorMessage={state?.errors?.gender}
          options={config?.genders}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="birthDay"
          className="mb-3"
          label="Date of Birth"
          type="date"
          errorMessage={state?.errors?.birthDay}
        />

        <TextInput
          name="birthPlace"
          className="mb-3"
          label="Place of Birth"
          errorMessage={state?.errors?.birthPlace}
        />

        <MaskedInput
          name="phoneNumber"
          className="mb-3"
          label="Phone Number"
          mask="999-999-9999"
          errorMessage={state?.errors?.phoneNumber}
        />

        <MaskedInput
          name="ssn"
          className="mb-3"
          label="SSN"
          mask="999-99-9999"
          errorMessage={state?.errors?.ssn}
        />

        <TextInput
          name="email"
          label="Email"
          className="mb-3"
          errorMessage={state?.errors?.email}
        />

        <CheckInput
          name="isAdvisorTeacher"
          label="Is Advisor Teacher"
          className="mb-3"
          defaultChecked="true"
        />

        <MultipleSelect
          name="lessonsIdList"
          className="mb-3"
          label="Programs"
          errorMessage={state?.errors?.lessonsIdList}
          options={programs}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="username"
          className="mb-3"
          label="Username"
          errorMessage={state?.errors?.username}
        />

        <TextInput
          name="password"
          className="mb-3"
          label="Password"
          type="password"
          errorMessage={state?.errors?.password}
          autoComplete="off"
        />

        <TextInput
          name="confirmPassword"
          className="mb-3"
          label="Confirm Password"
          type="password"
          autoComplete="off"
          errorMessage={state?.errors?.confirmPassword}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};

// {
//   "password": "string", +++++
//   "username": "string" +++++
//   "lessonsIdList": [ +++++
//     0 +++++
//   ], +++++
//   "isAdvisorTeacher": true, ++++
//   "email": "string", ++++++
//   "birthPlace": "string", ++++++
//   "gender": "MALE", ++++++++
//   "name": "string", ++++++
//   "phoneNumber": "string", ++++++
//   "ssn": "string", ++++++
//   "surname": "string",  +++++++
//   "birthDay": "yyyy-MM-dd", ++++++
// }
