"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import z from "zod";

export default async function doTheLoginThing(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const schema = z.object({
    username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
    password: z.string().min(1, { message: "Adgangskode skal være udfyldt" }),
  });

  const validated = schema.safeParse({ username, password });

  if (!validated.success) {
    return {
      ok: false,
      message: "Validation failed",
      errors: validated.error?.errors?.map((e) => e.message) || [
        "Invalid input",
      ],
      properties: validated.error?.flatten()?.fieldErrors,
    };
  }

  const response = await fetch("http://localhost:4000/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    return {
      ok: false,
      message: "Authentication failed",
      errors: ["Brugernavn eller adgangskode er forkert"],
    };
  }

  const data = await response.json();
  const token = data.token;
  const userId = data.user?.id || data.userId;

  if (token && userId) {
    const cookieStore = await cookies();
    cookieStore.set("token", token, { maxAge: 60 * 30 });
    cookieStore.set("userId", userId, { maxAge: 60 * 30 });
    redirect("/");
  } else {
    return {
      ok: false,
      message: "Authentication failed",
      errors: ["Brugernavn eller adgangskode er forkert"],
    };
  }
}
