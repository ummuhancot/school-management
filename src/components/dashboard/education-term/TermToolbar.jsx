import { deleteTermAction } from "@/actions/term-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import React from "react";
import { Button } from "react-bootstrap";

export const TermToolbar = (row) => {
  const { term, id } = row;

  const handleDelete = async () => {
    const answer = await swConfirm(`Are you sure to delete ${id} - ${term}`);
    if (!answer.isConfirmed) return;
    const res = await deleteTermAction(id);
    swAlert(res.message, res.ok ? "success" : "error");
  };

  return (
    <Button variant="secondary" onClick={handleDelete}>
      <i className="pi pi-trash"></i>
    </Button>
  );
};
