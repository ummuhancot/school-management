import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { ProgramList } from "@/components/dashboard/program/ProgramList";
import { UnassignedProgramList } from "@/components/dashboard/program/UnassignedProgramList";
import {
  getAllProgramsByPage,
  getAllUnassignedPrograms,
} from "@/services/program-service";
import { getAllTeachers } from "@/services/teacher-service";

export default async function ProgramPage(props) {
  const { page } = await props.searchParams;

  const dataAllPrograms = (await getAllProgramsByPage(page)).json();
  const dataUnassignedPrograms = (await getAllUnassignedPrograms()).json();
  const dataTeachers = (await getAllTeachers()).json();

  const [allPrograms, unassignedPrograms, teachers] = await Promise.all([
    dataAllPrograms,
    dataUnassignedPrograms,
    dataTeachers,
  ]);

  const newTeachers = teachers.map((item) => ({
    label: `${item.name} ${item.surname}`,
    value: item.userId,
  }));

  return (
    <>
      <PageHeader title="Programs" />
      <Spacer />
      <ProgramList data={allPrograms} />
      <Spacer />
      <UnassignedProgramList
        programs={unassignedPrograms}
        teachers={newTeachers}
      />
      <Spacer />
    </>
  );
}
