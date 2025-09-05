import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { StudentEditForm } from "@/components/dashboard/student/StudentEditForm";
import { getStudentById } from "@/services/student-service";
import { getAllAdvisorTeachers } from "@/services/teacher-service";

export default async function EditStudentPage(props) {
  const { id } = await props.params;

  const dataStudent = (await getStudentById(id)).json();

  const dataTeachers = (await getAllAdvisorTeachers()).json();

  const [student, teachers] = await Promise.all([dataStudent, dataTeachers]);

  const advisorTeachers = teachers.map((item) => ({
    value: item?.advisorTeacherId,
    label: `${item.teacherName} ${item.teacherSurname}`,
  }));

  return (
    <>
      <PageHeader title="Edit Student" />
      <Spacer />
      <StudentEditForm user={student} advisorTeachers={advisorTeachers} />
      <Spacer />
    </>
  );
}
