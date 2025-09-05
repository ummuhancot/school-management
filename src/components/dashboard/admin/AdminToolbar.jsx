import { deleteAdminAction } from "@/actions/admin-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import React from "react";
import { Button } from "react-bootstrap";

export const AdminToolbar = (row) => {
  const { name, surname, id } = row;

  const handleDelete = async () => {
    const answer = await swConfirm(`Are you sure to delete ${name} ${surname}`);

    if (!answer.isConfirmed) return;

    const res = await deleteAdminAction(id);
    swAlert(res);
  };

  return (
    <Button variant="secondary" onClick={handleDelete}>
      <i className="pi pi-trash"></i>
    </Button>
  );
};
