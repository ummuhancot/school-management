import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { StudentInfoList } from "@/components/dashboard/student-info/StudentInfoList";
import { getAllInfoByPageForTeacher } from "@/services/student-info-service";

export default async function StudentInfoPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllInfoByPageForTeacher(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Student Info" />
      <Spacer />
      <StudentInfoList data={data} />
      <Spacer />
    </>
  );
}
