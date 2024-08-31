import { getEditParent } from "@/utils/action";
import React from "react";

const EditParentForm = ({ parent }) => {
  console.log(parent);
  const {
    id,
    title,
    firstName,
    middleName,
    lastName,
    gender,
    phone,
    address,
    email,
    image,
    state,
    lga,
    religion,
    dob,
    occupation,
  } = parent;

  return (
    <form
      action={getEditParent}
      className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white space-y-4"
    >
      <input type="hidden" name="id" value={id} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            defaultValue={firstName}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            defaultValue={middleName}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            defaultValue={lastName}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <input
            type="text"
            name="gender"
            defaultValue={gender}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            defaultValue={phone}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            defaultValue={address}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            className="input input-bordered w-full mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            className="input input-bordered w-full mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            name="state"
            defaultValue={state}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LGA</label>
          <input
            type="text"
            name="lga"
            defaultValue={lga}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Religion
          </label>
          <input
            type="text"
            name="religion"
            defaultValue={religion}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            defaultValue={dob}
            className="input input-bordered w-full mt-1"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Occupation
          </label>
          <input
            type="text"
            name="occupation"
            defaultValue={occupation}
            className="input input-bordered w-full capitalize mt-1"
          />
        </div>
      </div>

      <div className="text-right">
        <button type="submit" className="btn btn-primary mt-4">
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditParentForm;
