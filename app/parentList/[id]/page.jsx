import EditParentForm from "@/app/components/EditParentForm";
import { getParent } from "@/utils/action";
import Link from "next/link";
import React from "react";

const SingleParentPage = async ({ params }) => {
  const parent = await getParent(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/parentList" className="btn btn-accent">
          Back
        </Link>
      </div>
      <EditParentForm parent={parent} />
    </>
  );
};

export default SingleParentPage;
