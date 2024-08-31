"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

export const createParent = async (prevState, formData) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));

  const title = formData.get("title");
  const firstName = formData.get("firstName");
  const middleName = formData.get("middleName");
  const lastName = formData.get("lastName");
  const gender = formData.get("gender");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const email = formData.get("email");
  const image = formData.get("image");
  const state = formData.get("state");
  const lga = formData.get("lga");
  const religion = formData.get("religion");
  const dob = formData.get("dob");
  const occupation = formData.get("occupation");
  const ParentReg = z.object({
    firstName: z.string().min(4),
  });

  try {
    ParentReg.parse({
      firstName,
    });
    await prisma.parent.create({
      data: {
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
      },
    });
    revalidatePath("/parentList");
    return { message: "Success", status: 200 };
  } catch (error) {
    // console.log(error);
    return { message: error.errors[0]?.message || "Error", status: 400 };
  }
};

export const getAllParents = async () => {
  return await prisma.parent.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteParent = async (formData) => {
  const id = formData.get("id");
  await prisma.parent.delete({
    where: { id },
  });
  revalidatePath("/parentList");
};

export const getParent = async (id) => {
  return prisma.parent.findUnique({
    where: {
      id,
    },
  });
};

export const getEditParent = async (formData) => {
  const id = formData.get("id");
  const title = formData.get("title");
  const firstName = formData.get("firstName");
  const middleName = formData.get("middleName");
  const lastName = formData.get("lastName");
  const gender = formData.get("gender");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const email = formData.get("email");
  const image = formData.get("image");
  const state = formData.get("state");
  const lga = formData.get("lga");
  const religion = formData.get("religion");
  const dob = formData.get("dob");
  const occupation = formData.get("occupation");

  await prisma.parent.update({
    where: {
      id,
    },
    data: {
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
    },
  });
  redirect("/parentList");
};
