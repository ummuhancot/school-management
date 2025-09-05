import * as Yup from "yup";
import { isLater, isStringArray, isTimeValid } from "../misc";

export const MeetSchema = Yup.object({
  date: Yup.date()
    .typeError("Invalid date")
    .min(new Date(), "Invalid date")
    .required("Date is required"),
  description: Yup.string()
    .min(2, "Must be at least 2 character")
    .max(16, "Must be at most 16 character")
    .required("Description is required"),
  startTime: Yup.string()
    .test("isTime", "Invalid time", (val) => {
      return isTimeValid(val);
    })
    .required("Start is required"),
  stopTime: Yup.string()
    .test("isTime", "Invalid time", (val) => {
      return isTimeValid(val);
    })
    .test("isLater", "End must be later than start", (val, context) => {
      return isLater(context.parent.startTime, val);
    })
    .required("End is required"),
  studentIds: Yup.string()
    .test("isArray", "Invalid students", (val) => {
      return isStringArray(val);
    })
    .required("Students are required"),
});
