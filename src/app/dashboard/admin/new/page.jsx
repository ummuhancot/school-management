import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { AdminCreateForm } from "@/components/dashboard/admin/AdminCreateForm";

export default function NewAdminPage() {
  return (
    <>
      <PageHeader title="New Admin" />
      <Spacer />
      <AdminCreateForm />
      <Spacer />
    </>
  );
}
