import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { LessonCreateForm } from "@/components/dashboard/lesson/LessonCreateForm";

export default function NewLessonPage() {
  return (
    <>
      <PageHeader title="New Lesson" />
      <Spacer />
      <LessonCreateForm />
      <Spacer />
    </>
  );
}
