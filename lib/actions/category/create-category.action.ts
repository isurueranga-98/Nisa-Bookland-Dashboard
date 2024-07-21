"use server";
import { revalidatePath } from "next/cache";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";
import {
  CategorySchema,
  type Category,
  type CategorySchemaType,
} from "@/lib/schema/category.schema";
import { createCategory } from "@/lib/database/category/create-category.db";

export const createCategoryAction = async (
  category: CategorySchemaType
): Promise<ActionResponse<Category>> => {
  try {
    // validate the category payload
    const validatedCategory = CategorySchema.safeParse(category);

    // if category validation failed, return an error
    if (!validatedCategory.success) {
      return { success: false, error: "schema validation failed" };
    }

    // if category validation success, create the user in the database
    const newCategory = await createCategory(validatedCategory.data);

    // if category creation failed, return an error
    if (!newCategory) {
      return { success: false, error: "unexpected error" };
    }

    // if category creation success,

    // revalidate the cache
    revalidatePath("/dashboard/categories");

    //return the user
    return { success: true, data: newCategory };
  } catch (error) {
    if (error instanceof AppError) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "unexpected error" };
    }
  }
};
