import prismaClient from "@/lib/utils/prisma-client";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import { type Category } from "@/lib/schema/category.schema";

export const readCategories = async (): Promise<Category[] | undefined> => {
  try {
    const machines = (await prismaClient.category.findMany()) as Category[];
    return machines;
  } catch (error) {
    appErrorHandler(error);
  }
};
