"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { TermSchema } from "@/helpers/schemas/term-schema";
import { createTerm, deleteTerm } from "@/services/term-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTermAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  try {
    const res = await deleteTerm(id);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, null);

    revalidatePath("/dashboard/education-term");
    return response(true, data?.message, null);
  } catch (error) {
    return response(false, error.message, null);
  }
};

export const createTermAction = async (prevState, formData) => {
  let isSuccess = false;
  try {
    const fields = transformFormDataToJSON(formData);
    TermSchema.validateSync(fields, { abortEarly: false });

    const res = await createTerm(fields);
    const data = await res.json();

    if (!res.ok) response(false, data?.message, data?.validations);

    isSuccess = true;

    return response(true, data?.message, null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    throw error;
  } finally {
    if (isSuccess) {
      revalidatePath("/dashboard/education-term");
      redirect("/dashboard/education-term");
    }
  }
};
