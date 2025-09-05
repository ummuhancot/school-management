import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { ManagerCreateForm } from "@/components/dashboard/manager/ManagerCreateForm";

export default function NewManagerPage() {
  return (
    <>
      <PageHeader title="New Manager" />
      <Spacer />
      <ManagerCreateForm />
      <Spacer />
    </>
  );
}
