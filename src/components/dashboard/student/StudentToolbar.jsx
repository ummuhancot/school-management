"use client";

import { deleteStudentAction } from "@/actions/student-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export const StudentToolbar = (row) => {
  const router = useRouter();
  const { name, surname, id } = row;

  const handleDelete = async () => {
    const answer = await swConfirm(
      `Are you sure to delete ${name} ${surname}?`
    );

    if (!answer.isConfirmed) return;

    const res = await deleteStudentAction(id);
    swAlert(res.message, res.ok ? "success" : "error");
  };

  const handleEdit = () => {
    router.push(`/dashboard/student/${id}`);
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
