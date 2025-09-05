import * as Yup from "yup";
import { isStringArray } from "../misc";

export const ProgramAssignmentSchema = Yup.object({
  lessonProgramId: Yup.string()
    .test("isArr", "Invalid Lesson Type", (val) => isStringArray(val))
    .required("Lesson is required"),
  teacherId: Yup.string().required("Teacher is required"),
});
