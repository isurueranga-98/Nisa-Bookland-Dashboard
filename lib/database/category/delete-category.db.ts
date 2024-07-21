import prismaClient from "@/lib/utils/prisma-client";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import { type Category } from "@/lib/schema/category.schema";

export const deleteCategory = async (
  id: string
): Promise<Category | undefined> => {
  try {
    const deletedMachine = await prismaClient.category.delete({
      where: {
        id,
      },
    });

    return deletedMachine as Category;
  } catch (error) {
    appErrorHandler(error);
  }
};
