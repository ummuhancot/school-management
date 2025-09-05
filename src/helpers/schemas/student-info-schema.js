import * as Yup from "yup";

export const StudentInfoSchema = Yup.object({
  absentee: Yup.number()
    .typeError("Invalid absentee")
    .min(0, "Invalid absentee")
    .required("Absentee is required"),
  educationTermId: Yup.number()
    .typeError("Invalid Term")
    .min(0, "Invalid Term")
    .required("Term is required"),
  finalExam: Yup.number()
    .typeError("Invalid Final Exam")
    .min(0, "Invalid Final Exam")
    .max(100, "Invalid Final Exam")
    .required("Final Exam is required"),
  lessonId: Yup.number()
    .typeError("Invalid Lesson")
    .min(0, "Invalid Lesson")
    .required("Lesson is required"),
  midtermExam: Yup.number()
    .typeError("Invalid Midterm Exam")
    .min(0, "Invalid Midterm Exam")
    .max(100, "Invalid Midterm Exam")
    .required("Midterm Exam is required"),
  studentId: Yup.number()
    .typeError("Invalid student")
    .min(0, "Invalid student")
    .required("student is required"),
  infoNote: Yup.string()
    .min(10, "Must be at least 10 character")
    .required("Info is required"),
});
