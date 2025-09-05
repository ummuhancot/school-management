import * as Yup from "yup";
import { isStringArray } from "../misc";

export const ChooseLessonSchema = Yup.object({
  lessonProgramId: Yup.string()
    .test("isArr", "Invalid lesson type", (val) => isStringArray(val))
    .required("Lessons are required"),
});
