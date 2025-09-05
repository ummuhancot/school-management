"use client";

import { deleteStudentAction } from "@/actions/student-actions";
import { deleteStudentInfoAction } from "@/actions/student-info-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export const StudentInfoToolbar = (row) => {
  const router = useRouter();
  const { studentResponse, lessonName, id } = row;
  const { name, surname } = studentResponse;

  const handleDelete = async () => {
    const answer = await swConfirm(
      `Are you sure to delete ${name} ${surname}?`
    );

    if (!answer.isConfirmed) return;

    const res = await deleteStudentInfoAction(id);
    swAlert(res.message, res.ok ? "success" : "error");
  };

  const handleEdit = () => {
    router.push(`/dashboard/student-info/${id}`);
  };

  return (
    <div className="d-flex gap-2 justify-content-end">
      <Button variant="secondary" onClick={handleEdit}>
        <i className="pi pi-file-edit"></i>
      </Button>
      <Button variant="secondary" onClick={handleDelete}>
        <i className="pi pi-trash"></i>
      </Button>
    </div>
  );
};
