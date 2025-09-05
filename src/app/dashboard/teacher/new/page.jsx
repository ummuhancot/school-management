import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { TeacherCreateForm } from "@/components/dashboard/teacher/TeacherCreateForm";
import { getAllPrograms } from "@/services/program-service";
import React from "react";

export default async function NewTeacherPage() {
  const res = await getAllPrograms();
  const data = await res.json();

  const programs = data.map((item) => ({
    value: item.lessonProgramId,
    label: item.lessonName.map((lesson) => lesson.lessonName).join(" - "),
  }));

  return (
    <>
      <PageHeader title="New Teacher" />
      <Spacer />
      <TeacherCreateForm programs={programs} />
      <Spacer />
    </>
  );
}
