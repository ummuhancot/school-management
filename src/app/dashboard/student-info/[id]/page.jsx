import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { StudentInfoEditForm } from "@/components/dashboard/student-info/StudentInfoEditForm";
import { formatDate, getTermLabel } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getStudentInfoById } from "@/services/student-info-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import { getAllTerms } from "@/services/term-service";

export default async function EditStudentInfo(props) {
  const { id } = await props?.params;

  const studentsData = (await getAllStudentsByAdvisor()).json();
  const lessonsData = (await getAllLessons()).json();
  const studentInfoData = (await getStudentInfoById(id)).json();
  const termsData = (await getAllTerms()).json();

  const [studentInfo, students, lessons, terms] = await Promise.all([
    studentInfoData,
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
      label: `${getTermLabel(item.term)} - ${formatDate(item.startDate)}`,
    }));
  }

  return (
    <>
      <PageHeader title="Edit Info" />
      <Spacer />
      <StudentInfoEditForm
        studentInfo={studentInfo}
        students={newStudents}
        lessons={lessons}
        terms={newTerms}
      />
      <Spacer />
    </>
  );
}
