"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { ChooseLessonSchema } from "@/helpers/schemas/choose-lesson-schema";
import { StudentSchema } from "@/helpers/schemas/student-schema";
import {
  assignProgramToStudent,
  createStudent,
  deleteStudent,
  updateStudent,
} from "@/services/student-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteStudentAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  try {
    const res = await deleteStudent(id);
    const data = await res.json();

    if (!res.ok) response(false, data?.message, null);

    revalidatePath("/dashboard/student");

    return response(true, data?.message, null);
  } catch (error) {
    return response(false, error.message, null);
  }
};

export const createStudentAction = async (prevState, formData) => {
  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);

    StudentSchema.validateSync(fields, { abortEarly: false });

    const res = await createStudent(fields);
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
      revalidatePath("/dashboard/student");
      redirect("/dashboard/student");
    }
  }
};

export const updateStudentAction = async (prevState, formData) => {
  if (!formData.get("id")) throw new Error("Id is missing");

  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);

    StudentSchema.validateSync(fields, { abortEarly: false });

    const res = await updateStudent(fields);
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
      revalidatePath("/dashboard/student");
      redirect("/dashboard/student");
    }
  }
};

export const assignProgramToStudentAction = async (prevState, formData) => {
  try {
    const fields = transformFormDataToJSON(formData);

    ChooseLessonSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      lessonProgramId: JSON.parse(fields.lessonProgramId),
    };

    const res = await assignProgramToStudent(payload);
    const data = await res.json();
    if (!res.ok) return response(false, data?.message, data?.validations);

    revalidatePath("/dashboard/choose-lesson");

    return response(true, data?.message, null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    throw error;
  }
};
