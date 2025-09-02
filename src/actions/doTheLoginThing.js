"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function doTheLoginThing(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const schema = z.object({
    username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
    password: z.string().min(1, { message: "Adgangskode skal være udfyldt" }),
  });

  const validated = schema.safeParse({ username, password });

  if (!validated.success)
    return {
      success: false,
      errors: validated.error.errors.map((e) => e.message),
    };

  const response = await fetch("http://localhost:4000/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    return {
      success: false,
      errors: ["Brugernavn eller adgangskode er forkert"],
    };
  }

  const data = await response.json();
  const token = data.token;

  if (token) {
    const cookieStore = await cookies();
    cookieStore.set("token", token, { maxAge: 60 * 30 });
    return { success: true };
  } else {
    return {
      success: false,
      errors: ["Brugernavn eller adgangskode er forkert"],
    };
  }
}
