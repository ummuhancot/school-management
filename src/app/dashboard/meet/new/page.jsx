import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { MeetCreateForm } from "@/components/dashboard/meet/MeetCreateForm";
import { getAllStudentsByAdvisor } from "@/services/student-service";

export default async function NewMeetPage() {
  const res = await getAllStudentsByAdvisor();
  const data = await res.json();

  const students = data.map((item) => ({
    value: item.userId,
    label: `${item.name} ${item.surname}`,
  }));

  return (
    <>
      <PageHeader title="New Meet" />
      <Spacer />
      <MeetCreateForm students={students} />
      <Spacer />
    </>
  );
}
