import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { ContactMessageList } from "@/components/dashboard/contact-message/ContactMessageList";
import { getAllContactMessageByPage } from "@/services/contact-service";

export default async function ContactMessagePage(props) {
  const { page } = await props.searchParams;

  const res = await getAllContactMessageByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message);

  return (
    <>
      <PageHeader title="Messages" />
      <Spacer />
      <ContactMessageList data={data} />
      <Spacer />
    </>
  );
}
