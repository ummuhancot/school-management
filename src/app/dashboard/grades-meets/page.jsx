import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { GradeList } from "@/components/dashboard/grades-meets/GradeList";
import StudentMeetList from "@/components/dashboard/grades-meets/StudentMeetList";
import { getAllMeetsForStudents } from "@/services/meet-service";
import { getAllStudentInfoByPageForStudent } from "@/services/student-info-service";

export default async function GradesAndMeetPage(props) {
  const { page } = await props.searchParams;

  const dataGrades = (await getAllStudentInfoByPageForStudent(page)).json();

  const dataMeets = (await getAllMeetsForStudents()).json();

  const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

  return (
    <>
      <PageHeader title="Grades &amp; Meets" />
      <Spacer />
      <GradeList data={grades} />
      <Spacer />
      <StudentMeetList data={meets} />
      <Spacer />
    </>
  );
}
