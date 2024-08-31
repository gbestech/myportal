import React from "react";
import DeleteParent from "./DeleteParent";
import Link from "next/link";
import { getAllParents } from "@/utils/action";

const Parent = async () => {
  const parents = await getAllParents();

  if (parents.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No parent Available</h2>;
  }

  return (
    <div>
      <table className="w-full table-auto bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">First Name</th>
            <th className="px-4 py-2 border-b">Last Name</th>
            <th className="px-4 py-2 border-b">Phone</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Gender</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent) => (
            <tr key={parent.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b capitalize">
                {parent.firstName}
              </td>
              <td className="px-4 py-2 border-b capitalize">
                {parent.lastName}
              </td>
              <td className="px-4 py-2 border-b">{parent.phone}</td>
              <td className="px-4 py-2 border-b">{parent.email}</td>
              <td className="px-4 py-2 border-b capitalize">{parent.gender}</td>
              <td className="px-4 py-2 border-b flex space-x-2">
                <Link
                  href={`/parentList/${parent.id}`}
                  className="btn btn-accent btn-xs"
                >
                  Edit
                </Link>
                <DeleteParent id={parent.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parent;
