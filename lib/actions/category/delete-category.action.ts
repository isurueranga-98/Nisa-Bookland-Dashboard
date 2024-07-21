"use server";
import { deleteCategory } from "@/lib/database/category/delete-category.db";
import { type Category } from "@/lib/schema/category.schema";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";

export const deleteCategoryAction = async (
  id: string
): Promise<ActionResponse<Category>> => {
  try {
    // delete the category from the database
    const deletedCateogry = await deleteCategory(id);

    // if category deletion failed, return an error
    if (!deletedCateogry) {
      return { success: false, error: "unexpected error" };
    }

    // if category deletion success,

    // revalidate the cache
    revalidatePath("/dashboard/categories");

    //return the category
    return { success: true, data: deletedCateogry };
  } catch (error) {
    if (error instanceof AppError) {
      // if the error is an instance of AppError, return the error message
      return { success: false, error: error.message };
    } else {
      // if the error is not an instance of AppError, return an unexpected error message
      return { success: false, error: "unexpected error" };
    }
  }
};
