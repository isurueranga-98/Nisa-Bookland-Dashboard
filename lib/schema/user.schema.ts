import { z } from "zod";

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zip: z.string(),
  }),
  role: z.enum(["ADMIN", "SHOP_MANAGER", "CUSTOMER"]),
});

export type UserSchemaType = z.infer<typeof UserSchema>;

export type User = { id: string } & UserSchemaType;
