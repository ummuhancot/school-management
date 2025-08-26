import { PageHeader } from "@/components/common/page-header/PageHeader";

import { Courses } from "@/components/courses/Courses";
import { Spacer } from "@/components/spacer/Spacer";

export const metadata = {
  title: "Courses",
  description:
    "Explore the variety of courses we offer to help you reach your goals. Learn from our experienced educators and take your learning to the next level. Let's get started!",
};

export default async function CoursesPage() {
  // Loading gösterimi için:
  // await wait();

  return (
    <>
      <PageHeader title="Courses" />
      <Spacer />
      <Courses />
      <Spacer />
    </>
  );
}
