import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { MeetList } from "@/components/dashboard/meet/MeetList";
import { getAllMeetsByPageForAdvisor } from "@/services/meet-service";

export default async function MeetPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllMeetsByPageForAdvisor(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Meet" />
      <Spacer />
      <MeetList data={data} />
      <Spacer />
    </>
  );
}
