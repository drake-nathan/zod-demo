import { z } from "zod";

export type HexColor = `#${string}`;

const hexColorSchema = z.custom<HexColor>((value) => {
  return /^#[0-9A-F]{6}$/i.test(value);
});

export const userSchema = z.object({
  email: z.string().email(),
  favoriteColor: hexColorSchema,
  id: z.number(),
  name: z.string(),
  tailwind: z.enum(["love", "hate"]),
  zodiac: z.string().optional(),
});

export type User = z.infer<typeof userSchema>;

export const fetchUsers = async (amount: number) => {
  const res = await fetch(
    `http://localhost:3005/users?amount=${amount}`,
    {
      cache: "no-store",
    },
  );

  const data: unknown = await res.json();

  const users = userSchema.array().parse(data);

  return users;
};
