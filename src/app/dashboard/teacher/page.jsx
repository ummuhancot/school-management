import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { TeacherList } from "@/components/dashboard/teacher/TeacherList";
import { getAllTeachersByPage } from "@/services/teacher-service";

export default async function TeacherPage(props) {
  const { page } = await props.searchParams;
  const res = await getAllTeachersByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Teachers" />
      <Spacer />
      <TeacherList data={data} />
      <Spacer />
    </>
  );
}
