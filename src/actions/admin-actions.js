"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createAdminAction = async (prevState, formData) => {
  let isSucess = false;

  try {
    const fields = transformFormDataToJSON(formData);
    AdminSchema.validateSync(fields, { abortEarly: false });

    const res = await createAdmin(fields);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, data?.validations);

    isSucess = true;
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    throw error;
  } finally {
    if (isSucess) {
      revalidatePath("/dashboard/admin");
      redirect("/dashboard/admin");
    }
  }
};

export const deleteAdminAction = async (id) => {
  let isSuccess = false;
  if (!id) throw new Error("Id is missing");
  try {
    const res = await deleteAdmin(id);
    const data = await res.text();

    if (!res.ok) {
      return response(false, data, null);
    }

    isSuccess = true;
    return response(true, data, null);
  } catch (error) {
    return response(false, error.message, null);
  } finally {
    if (isSuccess) {
      revalidatePath("/dashboard/admin");
      redirect("/dashboard/admin");
    }
  }
};
