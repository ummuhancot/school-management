import * as Yup from "yup";
import { getDayValues, isLater, isStringArray } from "../misc";

const days = getDayValues();

export const ProgramSchema = Yup.object({
  lessonIdList: Yup.string()
    .test("isArr", "Invalid lesson type", (val) => isStringArray(val))
    .required("Lessons are required"),
  day: Yup.string().oneOf(days, "Invalid day").required("Day is required"),
  educationTermId: Yup.number()
    .typeError("Invalid term")
    .required("Term is required"),
  startTime: Yup.string().required("Start time is required"),
  stopTime: Yup.string()
    .test("isAfter", "End time must be after start time", (val, context) => {
      return isLater(context.parent.startTime, val);
    })
    .required("End time is required"),
});
