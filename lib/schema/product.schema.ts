import { z } from "zod";

export const ProductSchema = z.object({});

export type ProductSchemaType = z.infer<typeof ProductSchema>;

export type Product = { id: string } & ProductSchemaType;
