import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { MeetEditForm } from "@/components/dashboard/meet/MeetEditForm";
import { getMeetById } from "@/services/meet-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";

export default async function EditMeetPage(props) {
  const { id } = await props.params;

  const dataMeet = (await getMeetById(id)).json();
  const dataStudents = (await getAllStudentsByAdvisor()).json();

  const [meet, students] = await Promise.all([dataMeet, dataStudents]);

  const studentsOfAdvisor = students.map((item) => ({
    value: item.userId,
    label: `${item.name} ${item.surname}`,
  }));

  const studentsOfMeet = meet.object.students.map((item) => item.id);

  return (
    <>
      <PageHeader title="Edit Meet" />
      <Spacer />
      <MeetEditForm
        meet={meet}
        studentsOfAdvisor={studentsOfAdvisor}
        studentsOfMeet={studentsOfMeet}
      />
      <Spacer />
    </>
  );
}
