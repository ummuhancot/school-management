import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";

export const metadata = {
  title: "Unauthorized",
};

export default function UnauthorizedPage() {
  return (
    <>
      <PageHeader title="Unauthorized" />
      <Spacer />
      <h2 className="text-center">You are not allowed to enter this page.</h2>
      <Spacer />
    </>
  );
}
