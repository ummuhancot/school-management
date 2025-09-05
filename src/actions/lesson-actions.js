"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { LessonSchema } from "@/helpers/schemas/lesson-schema";
import { createLesson, deleteLesson } from "@/services/lesson-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteLessonAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  try {
    const res = await deleteLesson(id);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, null);

    revalidatePath("/dashboard/lesson");

    return response(true, data?.message, null);
  } catch (error) {
    return response(false, error.message, null);
  }
};

export const createLessonAction = async (prevState, formData) => {
  let isSuccess = false;
  try {
    const fields = transformFormDataToJSON(formData);
    LessonSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      compulsory: fields.compulsory === "on" ? true : false,
    };

    const res = await createLesson(payload);
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
      revalidatePath("/dashboard/lesson");
      redirect("/dashboard/lesson");
    }
  }
};
