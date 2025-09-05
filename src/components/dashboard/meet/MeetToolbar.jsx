"use client";

import { deleteMeetAction } from "@/actions/meet-actions";
import { formatDate } from "@/helpers/misc";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export const MeetToolbar = (row) => {
  const router = useRouter();
  const { date, startTime, stopTime, id } = row;

  const handleDelete = async () => {
    const answer = await swConfirm(
      `Are you sure to delete ${formatDate(
        date
      )}  ${startTime}/${stopTime} meet?`
    );

    if (!answer.isConfirmed) return;

    const res = await deleteMeetAction(id);
    swAlert(res.message, res.ok ? "success" : "error");
  };

  const handleEdit = () => {
    router.push(`/dashboard/meet/${id}`);
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
