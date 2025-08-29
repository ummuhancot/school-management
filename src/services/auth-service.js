"use server";

import { LOGIN_API } from "@/helpers/api-routes";

export const login = async (payload) => {
  return fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};
