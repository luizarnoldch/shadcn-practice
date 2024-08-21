"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[],
  },
  message?: string,
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Min text 3",
  }),
});

export default async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });

    revalidatePath("/form-basic");
    redirect("/form-basic");
  } catch (err: any) {
    return {
      message: err.message || "Database Error",
    };
  }
}
