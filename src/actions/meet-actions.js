"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { MeetSchema } from "@/helpers/schemas/meet-schema";

import { createMeet, deleteMeet, updateMeet } from "@/services/meet-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createMeetAction = async (prevState, formData) => {
  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);

    MeetSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      studentIds: JSON.parse(fields.studentIds),
    };

    const res = await createMeet(payload);
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
      revalidatePath("/dashboard/meet");
      redirect("/dashboard/meet");
    }
  }
};

export const deleteMeetAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  try {
    const res = await deleteMeet(id);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, null);

    revalidatePath("/dashboard/meet");

    return response(true, data?.message, null);
  } catch (error) {
    return response(false, error.message, null);
  }
};

export const updateMeetAction = async (prevState, formData) => {
  if (!formData.get("id")) throw new Error("Id is missing");

  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);
    const updatedFields = {
      ...fields,
      startTime: fields.startTime.substring(0, 5),
      stopTime: fields.stopTime.substring(0, 5),
    };

    MeetSchema.validateSync(updatedFields, { abortEarly: false });

    const payload = {
      ...updatedFields,
      studentIds: JSON.parse(updatedFields.studentIds),
    };

    const res = await updateMeet(payload);
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
      revalidatePath("/dashboard/meet");
      redirect("/dashboard/meet");
    }
  }
};
