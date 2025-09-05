import * as Yup from "yup";

export const LessonSchema = Yup.object({
  lessonName: Yup.string().required("Lesson name is required"),
  creditScore: Yup.number()
    .typeError("Credit score must be a number")
    .min(1, "Credit score must be higher than 0")
    .max(100, "Credit score must be less than or equal to 100")
    .required("Credit score is required"),
});
