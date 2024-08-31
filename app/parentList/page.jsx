import React from "react";
import ParentForm from "../components/ParentForm";
import Parents from "../components/Parents";

const ParentListPage = () => {
  return (
    <div className="max-w-lg">
      <ParentForm />
      <h3>Parent Table</h3>
      <Parents />
    </div>
  );
};

export default ParentListPage;
