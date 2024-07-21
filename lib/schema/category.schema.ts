import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;

export type Category = { id: string } & CategorySchemaType;
