import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { ProgramCreateForm } from "@/components/dashboard/program/ProgramCreateForm";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";

export default async function NewProgramPage() {
  const dataLessons = (await getAllLessons()).json();
  const dataTerms = (await getAllTerms()).json();

  const [lessons, terms] = await Promise.all([dataLessons, dataTerms]);

  const formattedTerms = terms?.map((item) => ({
    value: item.id,
    label: `${item.term} - ${item.id}`,
  }));

  return (
    <>
      <PageHeader title="New Program" />
      <Spacer />
      <ProgramCreateForm lessons={lessons} terms={formattedTerms} />
      <Spacer />
    </>
  );
}
