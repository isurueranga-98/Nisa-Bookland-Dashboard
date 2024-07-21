import prismaClient from "@/lib/utils/prisma-client";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import {
  type Category,
  type CategorySchemaType,
} from "@/lib/schema/category.schema";

export const createCategory = async (
  machine: CategorySchemaType
): Promise<Category | undefined> => {
  try {
    const newMachine = (await prismaClient.category.create({
      data: machine,
    })) as Category;
    return newMachine;
  } catch (error: unknown) {
    appErrorHandler(error);
  }
};
