"use client";

import { deleteLessonAction } from "@/actions/lesson-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { Button } from "react-bootstrap";

export const LessonToolbar = (row) => {
  const { lessonName, lessonId } = row;

  const handleDelete = async () => {
    const answer = await swConfirm(
      `Are you sure you want to delete ${lessonName}`
    );

    if (!answer.isConfirmed) return;

    const res = await deleteLessonAction(lessonId);
    swAlert(res.message, res.ok ? "success" : "error");
  };

  return (
    <Button variant="secondary" onClick={handleDelete}>
      <i className="pi pi-trash"></i>
    </Button>
  );
};
