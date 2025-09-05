"use client";

import { updateTeacherAction } from "@/actions/teacher-actions";
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

export const TeacherEditForm = ({ programs, user, teacherProgramIdList }) => {
  const [state, action, isPending] = useActionState(updateTeacherAction);

  if (state?.message) {
    swAlert(state?.message, state.ok ? "success" : "error");
  }

  return (
    <FormContainer>
      <form action={action}>
        <input type="hidden" name="id" value={user?.id} />
        <TextInput
          name="name"
          label="First Name"
          className="mb-3"
          errorMessage={state?.errors?.name}
          defaultValue={user?.name}
        />
        <TextInput
          name="surname"
          label="Last Name"
          className="mb-3"
          errorMessage={state?.errors?.surname}
          defaultValue={user?.surname}
        />
        <SelectInput
          name="gender"
          label="Gender"
          className="mb-3"
          errorMessage={state?.errors?.gender}
          options={config?.genders}
          optionLabel="label"
          optionValue="value"
          defaultValue={user?.gender}
        />

        <TextInput
          name="birthDay"
          className="mb-3"
          label="Date of Birth"
          type="date"
          errorMessage={state?.errors?.birthDay}
          defaultValue={user?.birthDay}
        />

        <TextInput
          name="birthPlace"
          className="mb-3"
          label="Place of Birth"
          errorMessage={state?.errors?.birthPlace}
          defaultValue={user?.birthPlace}
        />

        <MaskedInput
          name="phoneNumber"
          className="mb-3"
          label="Phone Number"
          mask="999-999-9999"
          errorMessage={state?.errors?.phoneNumber}
          value={user?.phoneNumber}
        />

        <MaskedInput
          name="ssn"
          className="mb-3"
          label="SSN"
          mask="999-99-9999"
          errorMessage={state?.errors?.ssn}
          value={user?.ssn}
        />

        <TextInput
          name="email"
          label="Email"
          className="mb-3"
          errorMessage={state?.errors?.email}
          defaultValue={user?.email}
        />

        <CheckInput
          name="isAdvisorTeacher"
          label="Is Advisor Teacher"
          className="mb-3"
          defaultChecked={!!user?.isAdvisor}
        />

        <MultipleSelect
          name="lessonsIdList"
          className="mb-3"
          label="Programs"
          errorMessage={state?.errors?.lessonsIdList}
          options={programs}
          optionLabel="label"
          optionValue="value"
          values={teacherProgramIdList}
        />

        <TextInput
          name="username"
          className="mb-3"
          label="Username"
          errorMessage={state?.errors?.username}
          defaultValue={user?.username}
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
        <SubmitButton title="Update" pending={isPending} />
      </form>
    </FormContainer>
  );
};
