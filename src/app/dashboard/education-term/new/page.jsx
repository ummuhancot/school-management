import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { TermCreateForm } from "@/components/dashboard/education-term/TermCreateForm";

export default function NewTermPage() {
  return (
    <>
      <PageHeader title="New Term" />
      <Spacer />
      <TermCreateForm />
      <Spacer />
    </>
  );
}
