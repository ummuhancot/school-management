import * as Yup from "yup";
import { getGenderValues, isStringArray } from "../misc";

const genders = getGenderValues();

export const TeacherSchema = Yup.object({
  birthDay: Yup.date()
    .typeError("Invalid Date")
    .max(new Date(), "Invalid birthday")
    .required("Date of birth is required"),
  birthPlace: Yup.string().required("Place of birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  gender: Yup.string()
    .oneOf(genders, "Invalid Gender")
    .required("Gender is required"),

  lessonsIdList: Yup.string()
    .test("isArr", "Invalid lesson type", (val) => isStringArray(val))
    .required("Lessons are required"),
  name: Yup.string().required("First name is required"),
  phoneNumber: Yup.string()
    .matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
    .required("Phone number is required."),
  ssn: Yup.string()
    .matches(/\d{3}-\d{2}-\d{4}/, "Invalid SSN")
    .required("SSN is required."),
  surname: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(20, "Must be at most 20 characters")
    .matches(/[a-z]+/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]+/, "Must contain at least one uppercase letter")
    .matches(/[0-9]+/, "Must contain at least one number")
    .matches(/[!@#$%^&*().;,:]+/, "Must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
