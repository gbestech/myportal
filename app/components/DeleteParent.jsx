import React from "react";
import { deleteParent } from "@/utils/action";
const DeleteParent = ({ id }) => {
  return (
    <form action={deleteParent}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error">Delete</button>
    </form>
  );
};

export default DeleteParent;
DeleteParent;
