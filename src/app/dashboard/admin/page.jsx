import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AdminList } from "@/components/dashboard/admin/AdminList";
import { getAllAdminsByPage } from "@/services/admin-service";

export default async function AdminPage(props) {
  const { page } = await props.searchParams;

  const res = await getAllAdminsByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Admins" />
      <Spacer />
      <AdminList data={data} />
      <Spacer />
    </>
  );
}
