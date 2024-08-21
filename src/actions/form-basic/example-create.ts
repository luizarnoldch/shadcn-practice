"use server";

import { db } from "@/lib/db";

export default async function create(formData: FormData) {
  const title = formData.get("title") as string;

  await db.board.create({
    data: {
      title,
    },
  });
}
