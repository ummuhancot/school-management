"use client";

import { updateStudentAction } from "@/actions/student-actions";
import { BackButton } from "@/components/common/form-fields/BackButton";
import { FormContainer } from "@/components/common/form-fields/FormContainer";
import { MaskedInput } from "@/components/common/form-fields/MaskedInput";
import { SelectInput } from "@/components/common/form-fields/SelectInput";
import { SubmitButton } from "@/components/common/form-fields/SubmitButton";
import { TextInput } from "@/components/common/form-fields/TextInput";
import { config } from "@/helpers/config";
import { useActionState } from "react";

export const StudentEditForm = ({ advisorTeachers, user }) => {
  const [state, action, isPending] = useActionState(updateStudentAction);

  if (state?.message) {
    swAlert(state?.message, state.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <input type="hidden" name="id" value={user.id} />
        <TextInput
          name="name"
          label="First Name"
          className="mb-3"
          defaultValue={user?.name}
          errorMessage={state?.errors?.name}
        />

        <TextInput
          name="surname"
          label="Surname"
          className="mb-3"
          defaultValue={user?.surname}
          errorMessage={state?.errors?.surname}
        />

        <SelectInput
          name="gender"
          label="Gender"
          className="mb-3"
          defaultValue={user?.gender}
          errorMessage={state?.errors?.gender}
          options={config.genders}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="birthDay"
          label="Date of Birth"
          className="mb-3"
          defaultValue={user?.birthDay}
          errorMessage={state?.errors?.birthDay}
          type="date"
        />

        <TextInput
          name="birthPlace"
          label="Birth Place"
          className="mb-3"
          defaultValue={user?.birthPlace}
          errorMessage={state?.errors?.birthPlace}
        />

        <MaskedInput
          name="phoneNumber"
          label="Phone Number"
          className="mb-3"
          value={user?.phoneNumber}
          mask="999-999-9999"
          errorMessage={state?.errors?.phoneNumber}
        />

        <MaskedInput
          name="ssn"
          label="SSN"
          className="mb-3"
          value={user?.ssn}
          mask="999-99-9999"
          errorMessage={state?.errors?.ssn}
        />
        <TextInput
          name="email"
          label="Email"
          className="mb-3"
          defaultValue={user?.email}
          errorMessage={state?.errors?.email}
        />

        <TextInput
          name="fatherName"
          label="Father Name"
          className="mb-3"
          defaultValue={user?.fatherName}
          errorMessage={state?.errors?.fatherName}
        />

        <TextInput
          name="motherName"
          label="Mother Name"
          className="mb-3"
          defaultValue={user?.motherName}
          errorMessage={state?.errors?.motherName}
        />

        <SelectInput
          name="advisorTeacherId"
          label="Advisor Teacher"
          className="mb-3"
          defaultValue={user?.advisorTeacherId}
          errorMessage={state?.errors?.advisorTeacherId}
          options={advisorTeachers}
          optionLabel="label"
          optionValue="value"
        />

        <TextInput
          name="username"
          label="Username"
          className="mb-3"
          defaultValue={user?.username}
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
        <SubmitButton title="Update" pending={isPending} />
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
