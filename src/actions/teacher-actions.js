"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { ProgramAssignmentSchema } from "@/helpers/schemas/program-assignment-schema";
import { TeacherSchema } from "@/helpers/schemas/teacher-schema";
import {
  assignProgramToTeacher,
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "@/services/teacher-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTeacherAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  try {
    const res = await deleteTeacher(id);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, null);

    revalidatePath("/dashboard/teacher");

    return response(true, data?.message, null);
  } catch (error) {
    return response(false, error.message, null);
  }
};

export const createTeacherAction = async (prevState, formData) => {
  let isSuccess = false;

  try {
    const fields = transformFormDataToJSON(formData);

    TeacherSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      lessonsIdList: JSON.parse(fields.lessonsIdList),
      isAdvisorTeacher: fields.isAdvisorTeacher === "on" ? true : false,
    };

    const res = await createTeacher(payload);
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
      revalidatePath("/dashboard/teacher");
      redirect("/dashboard/teacher");
    }
  }
};

export const updateTeacherAction = async (prevState, formData) => {
  if (!formData.get("id")) throw new Error("Id is missing");
  let isSuccess = false;
  try {
    const fields = transformFormDataToJSON(formData);

    TeacherSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      lessonsIdList: JSON.parse(fields.lessonsIdList),
      isAdvisorTeacher: fields.isAdvisorTeacher === "on" ? true : false,
    };

    const res = await updateTeacher(payload);
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
      revalidatePath("/dashboard/teacher");
      redirect("/dashboard/teacher");
    }
  }
};

export const assignProgramToTeacherAction = async (prevState, formData) => {
  try {
    const fields = transformFormDataToJSON(formData);
    ProgramAssignmentSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      teacherId: fields.teacherId,
      lessonProgramId: JSON.parse(fields.lessonProgramId).map(
        (item) => item.lessonProgramId
      ),
    };

    const res = await assignProgramToTeacher(payload);
    const data = await res.json();

    if (!res.ok) return response(false, data?.message, data?.validations);

    revalidatePath("/dashboard/program");

    return response(true, data?.message, null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    throw error;
  }
};
