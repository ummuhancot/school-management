"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
import { AuthError } from "next-auth";
import { signIn } from "../auth";

export const loginAction = async (prevState, formData) => { //burda bilgi formData dan geliyor prevState den geri dönüyor.
  const fields = transformFormDataToJSON(formData);

  try {
    AuthSchema.validateSync(fields, { abortEarly: false });

    await signIn("credentials", fields); 
    //auth.js dosyasındaki, provider altındaki authorize methoduna gider 
    //Eger login başarılı ise kullanıcı giriş yapmış olur 
    //Login başarılı değilse bu satırda hata fırlatır.

  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    } else if (error instanceof AuthError) {
      return response(false, "Invalid username or password", null);
    }
    throw error;
  }
};
