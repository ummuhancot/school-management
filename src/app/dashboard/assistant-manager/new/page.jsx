import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AssistantManagerCreateForm } from "@/components/dashboard/assistant-manager/AssistantManagerCreateForm";

export default function NewAssistantPage() {
  return (
    <>
      <PageHeader title="New Assistant" />
      <Spacer />
      <AssistantManagerCreateForm />
      <Spacer />
    </>
  );
}
