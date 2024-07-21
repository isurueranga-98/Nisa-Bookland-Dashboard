import {
  type Category,
  type CategorySchemaType,
} from "@/lib/schema/category.schema";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import prismaClient from "@/lib/utils/prisma-client";

export const updateCategory = async (
  id: string,
  data: CategorySchemaType
): Promise<Category | undefined> => {
  try {
    const machine = (await prismaClient.category.update({
      where: { id },
      data,
    })) as Category;

    return machine;
  } catch (error) {
    appErrorHandler(error);
  }
};
