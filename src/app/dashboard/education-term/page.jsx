import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { TermList } from "@/components/dashboard/education-term/TermList";
import { getAllTermsByPage } from "@/services/term-service";

export default async function EducationTermPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllTermsByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Terms" />
      <Spacer />
      <TermList data={data} />
      <Spacer />
    </>
  );
}
