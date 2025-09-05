import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { StudentList } from "@/components/dashboard/student/StudentList";
import { getAllStudentsByPage } from "@/services/student-service";

export default async function StudentPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllStudentsByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Students" />
      <Spacer />
      <StudentList data={data} />
      <Spacer />
    </>
  );
}
