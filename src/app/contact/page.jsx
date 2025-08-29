import { PageHeader } from "@/components/common/page-header/PageHeader";

import { Contact } from "@/components/contact/Contact";
import { Spacer } from "@/components/spacer/Spacer";

export const metadata = {
  title: "Contact",
  description: "You can always contact us for more information and support.",
};

export default async function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />
      <Spacer/>
      <Contact />
    </>
  );
}
