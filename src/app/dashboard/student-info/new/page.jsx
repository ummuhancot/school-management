import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { StudentInfoCreateForm } from "@/components/dashboard/student-info/StudentInfoCreateForm";
import { formatDate, getTermLabel } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import { getAllTerms } from "@/services/term-service";

export default async function NewStudentInfoPage() {
  const studentsData = (await getAllStudentsByAdvisor()).json();
  const lessonsData = (await getAllLessons()).json();
  const termsData = (await getAllTerms()).json();

  const [students, lessons, terms] = await Promise.all([
    studentsData,
    lessonsData,
    termsData,
  ]);

  let newStudents = [];
  let newTerms = [];

  if (Array.isArray(students)) {
    newStudents = students.map((item) => ({
      value: item.userId,
      label: `${item.name} ${item.surname}`,
    }));
  }

  if (Array.isArray(terms)) {
    newTerms = terms.map((item) => ({
      value: item.id,
      label: `${getTermLabel(item.term)} - ${formatDate(item?.startDate)}`,
    }));
  }

  return (
    <>
      <PageHeader title="New Info" />
      <Spacer />
      <StudentInfoCreateForm
        students={newStudents}
        lessons={lessons}
        terms={newTerms}
      />
      <Spacer />
    </>
  );
}
