"use server";

import {
  STUDENT_ASSIGN_PROGRAM_API,
  STUDENT_CREATE_API,
  STUDENT_DELETE_API,
  STUDENT_GET_ALL_BY_ADVISOR_API,
  STUDENT_GET_ALL_BY_PAGE_API,
  STUDENT_GET_BY_ID_API,
  STUDENT_UPDATE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helpers";

export const getAllStudentsByPage = async (
  page = 0,
  size = 10,
  sort = "name",
  type = "asc"
) => {
  const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

  return fetch(`${STUDENT_GET_ALL_BY_PAGE_API}?${qs}`, {
    headers: await getAuthHeader(),
  });
};

export const deleteStudent = async (id) => {
  return fetch(`${STUDENT_DELETE_API}/${id}`, {
    method: "DELETE",
    headers: await getAuthHeader(),
  });
};

export const createStudent = async (payload) => {
  return fetch(`${STUDENT_CREATE_API}`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload),
  });
};

export const getStudentById = async (id) => {
  if (!id) throw new Error("Id is missing");

  return fetch(`${STUDENT_GET_BY_ID_API}?id=${id}`, {
    headers: await getAuthHeader(),
  });
};

export const updateStudent = async (payload) => {
  return fetch(`${STUDENT_UPDATE_API}/${payload.id}`, {
    method: "PUT",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload),
  });
};

export const getAllStudentsByAdvisor = async () => {
  return fetch(`${STUDENT_GET_ALL_BY_ADVISOR_API}`, {
    headers: await getAuthHeader(),
  });
};

export const assignProgramToStudent = async (payload) => {
  return fetch(`${STUDENT_ASSIGN_PROGRAM_API}`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload),
  });
};
