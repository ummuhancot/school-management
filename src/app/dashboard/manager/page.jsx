import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AdminList } from "@/components/dashboard/admin/AdminList";
import { ManagerList } from "@/components/dashboard/manager/ManagerList";
import { getAllManagersByPage } from "@/services/manager-service";

export default async function ManagerPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllManagersByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Managers" />
      <Spacer />
      <ManagerList data={data} />
      <Spacer />
    </>
  );
}
