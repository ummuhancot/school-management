import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AllProgramList } from "@/components/dashboard/choose-lesson/AllProgramList";
import { StudentProgramList } from "@/components/dashboard/choose-lesson/StudentProgramList";
import {
  getAllPrograms,
  getAllProgramsByStudent,
} from "@/services/program-service";

export default async function ChooseLessonPage() {
  const dataAllPrograms = (await getAllPrograms()).json();

  const dataStudentsPrograms = (await getAllProgramsByStudent()).json();

  const [allPrograms, studentPrograms] = await Promise.all([
    dataAllPrograms,
    dataStudentsPrograms,
  ]);

  return (
    <>
      <PageHeader title="Choose Lesson" />
      <Spacer />
      <AllProgramList allPrograms={allPrograms} />
      <Spacer />
      <StudentProgramList studentPrograms={studentPrograms} />
      <Spacer />
    </>
  );
}
