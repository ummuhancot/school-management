"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { StudentInfoSchema } from "@/helpers/schemas/student-info-schema";
import {
  createStudentInfo,
  deleteStudentInfo,
  updateStudentInfo,
} from "@/services/student-info-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createStudentInfoAction = async (prevState, formData) => {
  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);

    StudentInfoSchema.validateSync(fields, { abortEarly: false });

    const res = await createStudentInfo(fields);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, data?.validations);

    isSuccess = true;
    return response(true, data?.message, null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    throw error;
  } finally {
    if (isSuccess) {
      revalidatePath("/dashboard/student-info");
      redirect("/dashboard/student-info");
    }
  }
};

export const deleteStudentInfoAction = async (id) => {
  if (!id) throw new Error("Id is missing");
  try {
    const res = await deleteStudentInfo(id);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, null);

    revalidatePath("/dashboard/student-info");
    return response(true, data?.message, null);
  } catch (error) {
    return response(true, error?.message, null);
  }
};

export const updateStudentInfoAction = async (prevState, formData) => {
  if (!formData.get("id")) {
    throw new Error("Id is missing");
  }
  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);

    StudentInfoSchema.validateSync(fields, { abortEarly: false });

    const res = await updateStudentInfo(fields);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, data?.validations);

    isSuccess = true;
    return response(true, data?.message, null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    throw error;
  } finally {
    if (isSuccess) {
      revalidatePath("/dashboard/student-info");
      redirect("/dashboard/student-info");
    }
  }
};
