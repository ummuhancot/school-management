import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AssistantManagerEditForm } from "@/components/dashboard/assistant-manager/AssistantManagerEditForm";
import { getAssistantManagerById } from "@/services/assistant-manager-service";

export default async function EditAssistantManagerPage({ params }) {
  const { id } = await params;

  const res = await getAssistantManagerById(id);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Edit Assistant" />
      <Spacer />
      <AssistantManagerEditForm user={data?.object} />
      <Spacer />
    </>
  );
}
