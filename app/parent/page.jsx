import React from "react";
import prisma from "@/utils/db";

const getAllParents = async () => {
  // await prisma.parent.create({
  //   data: {
  //     title: "Mr.",
  //     firstName: "Ahmad",
  //     middleName: "Mustapha",
  //     lastName: "Ahmad",
  //     gender: "Male",
  //     phone: "08101048371",
  //     address: "Kurudu",
  //     email: "mustaha@gmail.com",
  //     image: "none",
  //     state: "Edo",
  //     lga: "AkokoEdo",
  //     religion: "Islam",
  //     dob: "20-8-2020",
  //     occupation: "ICT",
  //   },
  // });
  const allParents = await prisma.parent.findMany();
  return allParents;
};

const ParentPage = async () => {
  const parents = await getAllParents();
  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center text-gray-800">
        Parents
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                First Name
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Middle Name
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Last Name
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Gender
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Phone
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Address
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Email
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                State
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                LGA
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                DOB
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-5 text-left text-gray-700 font-medium">
                Occupation
              </th>
            </tr>
          </thead>
          <tbody>
            {parents?.map((parent) => (
              <tr key={parent.id} className="hover:bg-gray-100">
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.firstName}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.middleName}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.lastName}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.gender}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.phone}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.address}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.email}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.state}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.lga}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.dob}
                </td>
                <td className="py-2 px-3 sm:py-3 sm:px-5 border-b border-gray-200 break-words">
                  {parent.occupation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParentPage;
