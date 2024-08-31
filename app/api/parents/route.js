import db from "@/utils/db";

export const GET = async (request) => {
  const parents = await db.parent.findMany();
  return Response.json({ data: parents });
};
