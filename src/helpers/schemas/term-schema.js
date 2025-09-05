import * as Yup from "yup";
import { getTermValues } from "../misc";

const terms = getTermValues();

export const TermSchema = Yup.object({
  startDate: Yup.date()
    .typeError("Invalid Date")
    .min(new Date(), "Invalid start date")
    .required("Start date is required"),
  endDate: Yup.date()
    .typeError("Invalid Date")
    .min(Yup.ref("startDate"), "Invalid start date")
    .required("Start date is required"),
  lastRegistrationDate: Yup.date()
    .typeError("Invalid Date")
    .max(Yup.ref("startDate"), "Invalid start date")
    .required("Start date is required"),
  term: Yup.string().oneOf(terms, `Invalid Term`).required("Term is required"),
});
