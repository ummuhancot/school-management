"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { ManagerSchema } from "@/helpers/schemas/manager-schema";
import {
  createAssistantManager,
  deleteAssistantManager,
  updateAssistantManager,
} from "@/services/assistant-manager-service";
import {
  createManager,
  deleteManager,
  updateManager,
} from "@/services/manager-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteAssistantManagerAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  try {
    const res = await deleteAssistantManager(id);
    const data = await res.json();

    if (!res.ok) {
      return response(false, data?.message, null);
    }

    revalidatePath("/dashboard/assistant-manager");

    return response(true, data?.message, null);
  } catch (error) {
    return response(false, error.message, null);
  }
};

export const createAssistantManagerAction = async (prevState, formData) => {
  let isSuccess = false;
  try {
    const fields = transformFormDataToJSON(formData);
    ManagerSchema.validateSync(fields, { abortEarly: false });

    const res = await createAssistantManager(fields);
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
      revalidatePath("/dashboard/assistant-manager");
      redirect("/dashboard/assistant-manager");
    }
  }
};

export const updateAssistantManagerAction = async (prevState, formData) => {
  let isSuccess = false;
  try {
    if (!formData.get("id")) throw new Error("Id is missing");
    const fields = transformFormDataToJSON(formData);
    ManagerSchema.validateSync(fields, { abortEarly: false });

    const res = await updateAssistantManager(fields);
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
      revalidatePath("/dashboard/assistant-manager");
      redirect("/dashboard/assistant-manager");
    }
  }
};
