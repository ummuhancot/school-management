import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { LessonList } from "@/components/dashboard/lesson/LessonList";
import { getAllLessonsByPage } from "@/services/lesson-service";

export default async function LessonPage(props) {
  const { page } = await props.searchParams;
  const res = await getAllLessonsByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Lessons" />
      <Spacer />
      <LessonList data={data} />
      <Spacer />
    </>
  );
}
