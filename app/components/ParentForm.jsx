"use client";
import React from "react";
import { createParent } from "@/utils/action";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const initialState = {
  message: null,
};

const SubmitBnt = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary px-6 py-2"
      disabled={pending}
    >
      {pending ? "Registering ..." : "Register"}
    </button>
  );
};

const ParentForm = () => {
  const [state, formAction] = useFormState(createParent, initialState);
  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success("Parent created");
    }
  }, [state]);
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Parent Registration Form
      </h2>
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select name="title" className="select select-bordered w-full">
            <option value="">Select Title</option>
            <option value="Mr.">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Middle Name"
            className="input input-bordered w-full"
            name="middleName"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
            name="lastName"
          />
          <select name="gender" className="select select-bordered w-full">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="State"
            type="text"
            name="state"
            className="input input-bordered w-full"
          />
          <input
            placeholder="Local Government Area (LGA)"
            type="text"
            name="lga"
            className="input input-bordered w-full"
          />
        </div>
        <select name="religion" className="select select-bordered w-full">
          <option value="">Select Relgion</option>
          <option value="Islam">Islam</option>
          <option value="Christian">Christian</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Date of Birth (DOB)
            </label>
            <input
              type="date"
              name="dob"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Occupation</label>
            <input
              type="text"
              name="occupation"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <SubmitBnt />
        </div>
      </form>
    </div>
  );
};

export default ParentForm;
