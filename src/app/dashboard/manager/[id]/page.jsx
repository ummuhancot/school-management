import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { ManagerEditForm } from "@/components/dashboard/manager/ManagerEditForm";
import { getManagerById } from "@/services/manager-service";

export default async function EditManagerPage({ params }) {
  const { id } = await params;

  const res = await getManagerById(id);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Edit Manager" />
      <Spacer />
      <ManagerEditForm user={data?.object} />
      <Spacer />
    </>
  );
}
