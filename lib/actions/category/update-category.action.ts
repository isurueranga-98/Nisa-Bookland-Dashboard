"use server";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";
import {
  type Category,
  type CategorySchemaType,
} from "@/lib/schema/category.schema";
import { updateCategory } from "@/lib/database/category/update-category.db";

export const updateCategoryAction = async (
  id: string,
  data: CategorySchemaType
): Promise<ActionResponse<Category>> => {
  try {
    // update the category in the database
    const updatedCategory = await updateCategory(id, data);

    // if category update failed, return an error
    if (!updatedCategory) {
      return { success: false, error: "unexpected error" };
    }

    // if category update success,

    // revaidate the cache
    revalidatePath("/dashboard/categories");

    // return the category
    return { success: true, data: updatedCategory };
  } catch (error) {
    if (error instanceof AppError) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "unexpected error" };
    }
  }
};
