import { z } from "zod";

export const CustomerSchema = z.object({});

export type CustomerSchemaType = z.infer<typeof CustomerSchema>;

export type Customer = { id: string } & CustomerSchemaType;
