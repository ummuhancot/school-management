import { PageHeader } from "@/components/common/page-header/PageHeader";

import { Courses } from "@/components/courses/Courses";
import { Events } from "@/components/events/Events";

import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { Spacer } from "@/components/spacer/Spacer";

export const metadata = {
  title: "Events",
  description:
    "Get inspired and join us for exciting events. Discover the latest trends and share your knowledge with others. Let's celebrate the learning and growth together. Join us on our journey.",
};

export default async function EventsPage() {
  // Loading gösterimi için:
  // await wait();

  return (
    <>
      <PageHeader title="Events" />
      <Spacer />
      <Events />
      <Spacer />
    </>
  );
}
