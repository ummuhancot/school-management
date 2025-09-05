import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { StudentCreateForm } from "@/components/dashboard/student/StudentCreateForm";
import { getAllAdvisorTeachers } from "@/services/teacher-service";

export default async function NewStudentPage() {
  const res = await getAllAdvisorTeachers();
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  const advisorTeachers = data.map((item) => ({
    value: item?.advisorTeacherId,
    label: `${item.teacherName} ${item.teacherSurname}`,
  }));

  return (
    <>
      <PageHeader title="New Student" />
      <Spacer />
      <StudentCreateForm advisorTeachers={advisorTeachers} />
      <Spacer />
    </>
  );
}
