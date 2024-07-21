import { z } from "zod";

export const OrderSchema = z.object({});

export type OrderSchemaType = z.infer<typeof OrderSchema>;

export type Order = { id: string } & OrderSchemaType;
