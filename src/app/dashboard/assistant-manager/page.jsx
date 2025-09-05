import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AssistantList } from "@/components/dashboard/assistant-manager/AssistantList";
import { getAllAssistantManagersByPage } from "@/services/assistant-manager-service";

export default async function AssistantManagerPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllAssistantManagersByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Assistants" />
      <Spacer />
      <AssistantList data={data} />
      <Spacer />
    </>
  );
}
