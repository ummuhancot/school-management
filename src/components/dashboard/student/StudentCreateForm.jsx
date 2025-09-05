"use client";

import { createStudentAction } from "@/actions/student-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MaskedInput } from "@/components/common/form-fields/MaskedInput";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { config } from "@/helpers/config";
import { swAlert } from "@/helpers/sweetalert";
import { useActionState } from "react";

export const StudentCreateForm = ({ advisorTeachers }) => {
  const [state, action, isPending] = useActionState(createStudentAction);

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
          label="Surname"
          className="mb-3"
          errorMessage={state?.errors?.surname}
        />

        <SelectInput
          name="gender"
          label="Gender"
          className="mb-3"
          errorMessage={state?.errors?.gender}
          options={config.genders}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="birthDay"
          label="Date of Birth"
          className="mb-3"
          errorMessage={state?.errors?.birthDay}
          type="date"
        />

        <TextInput
          name="birthPlace"
          label="Birth Place"
          className="mb-3"
          errorMessage={state?.errors?.birthPlace}
        />

        <MaskedInput
          name="phoneNumber"
          label="Phone Number"
          className="mb-3"
          mask="999-999-9999"
          errorMessage={state?.errors?.phoneNumber}
        />

        <MaskedInput
          name="ssn"
          label="SSN"
          className="mb-3"
          mask="999-99-9999"
          errorMessage={state?.errors?.ssn}
        />
        <TextInput
          name="email"
          label="Email"
          className="mb-3"
          errorMessage={state?.errors?.email}
        />

        <TextInput
          name="fatherName"
          label="Father Name"
          className="mb-3"
          errorMessage={state?.errors?.fatherName}
        />

        <TextInput
          name="motherName"
          label="Mother Name"
          className="mb-3"
          errorMessage={state?.errors?.motherName}
        />

        <SelectInput
          name="advisorTeacherId"
          label="Advisor Teacher"
          className="mb-3"
          errorMessage={state?.errors?.advisorTeacherId}
          options={advisorTeachers}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="username"
          label="Username"
          className="mb-3"
          errorMessage={state?.errors?.username}
        />

        <TextInput
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          className="mb-3"
          errorMessage={state?.errors?.password}
        />
        <TextInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="off"
          className="mb-3"
          errorMessage={state?.errors?.confirmPassword}
        />

        <BackButton className="me-2" />
        <SubmitButton title="Create" pending={isPending} />
      </form>
    </FormContainer>
  );
};

// {
//   "name": "string", +++++++++
//   "surname": "string", +++++++++
//   "gender": "MALE", +++++++++
//   "birthDay": "yyyy-MM-dd", +++++++++
//   "birthPlace": "string", +++++++++
//   "phoneNumber": "string", +++++++++
//   "email": "string", +++++++++
//   "ssn": "string", +++++++++
//   "fatherName": "string", +++++++++
//   "motherName": "string", +++++++++
//   "advisorTeacherId": 0, +++++++++
//   "username": "string" +++++++++
//   "password": "string", +++++++++
// }
