import { Instructors } from "@/components/about/Instructors";
import { Welcome } from "@/components/about/Welcome";
import { PageHeader } from "@/components/common/page-header/PageHeader";

import { Events } from "@/components/events/Events";
import { Spacer } from "@/components/spacer/Spacer";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about our organization. Our team, our mission, and our vision.",
};

export default async function AboutUsPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <Spacer/>
      <Welcome />
      <Spacer />
      <Instructors />
      <Spacer />
    </>
  );
}
 