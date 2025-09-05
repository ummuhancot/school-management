import * as Yup from "yup";
import { getGenderValues } from "../misc";

const genders = getGenderValues();

export const StudentSchema = Yup.object({
  advisorTeacherId: Yup.string().required("Advisor teacher is required"),
  birthDay: Yup.date()
    .typeError("Invalid date of birth")
    .max(new Date(), "Invalid date of birth")
    .required("Date of birth required"),
  birthPlace: Yup.string().required("Birth Place is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  fatherName: Yup.string().required("Father name is required"),
  gender: Yup.string()
    .oneOf(genders, "Invalid gender")
    .required("Gender is required"),
  motherName: Yup.string().required("Mother name is required"),
  name: Yup.string().required("First name is required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(20, "Must be max 20 character")
    .matches(/[a-z]+/, "Must contain at least one lowercase")
    .matches(/[A-Z]+/, "Must contain at least one uppercase letter")
    .matches(/[0-9]+/, "Must container at least one number")
    .matches(/[+.!@,():;-]+/, "Must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm password is required"),
  phoneNumber: Yup.string()
    .matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
    .required("Phone number is required"),
  ssn: Yup.string()
    .matches(/\d{3}-\d{2}-\d{4}/, "Invalid SSN")
    .required("SSN is required"),
  surname: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),
});
