"use client";
import { Button } from "@/components/ui/button";
import { useSheetState } from "@/store";
import { type SheetHandlerProps } from "@/lib/utils/types";
import {
  type CategorySchemaType,
  type Category,
} from "@/lib/schema/category.schema";
import { CategoryForm } from "@/components/dashboard/forms/category.form";
import { createCategoryAction } from "@/lib/actions/category/create-category.action";
import { updateCategoryAction } from "@/lib/actions/category/update-category.action";
import { deleteCategoryAction } from "@/lib/actions/category/delete-category.action";

export const CategorySheetHandler = (
  props: SheetHandlerProps<Category>
): JSX.Element => {
  const { setOpen, setSheet } = useSheetState((state) => state);

  // handle machine create
  const handleCategoryCreate = async (machine: CategorySchemaType) => {
    await createCategoryAction(machine);
  };

  // handle machine update
  const handleCategoryUpdate = async (machine: Category) => {
    const { id, ...payload } = machine;
    await updateCategoryAction(id, payload);
  };

  // handle machine delete
  const handleCategoryDelete = async (machine: Category) => {
    await deleteCategoryAction(machine.id);
  };

  const handleSheetOpen = () => {
    switch (props.formType) {
      // view
      case "view":
        setSheet({
          title: "view the category",
          description: "",
          content: (
            <CategoryForm formType="view" formObject={props.formObject} />
          ),
        });
        setOpen(true);
        break;
      // create
      case "create":
        setSheet({
          title: "create a new category",
          description: "",
          content: (
            <CategoryForm formType="create" onSubmit={handleCategoryCreate} />
          ),
        });
        setOpen(true);
        break;
      // update
      case "update":
        setSheet({
          title: "edit the category",
          description: "",
          content: (
            <CategoryForm
              formType="update"
              formObject={props.formObject}
              onSubmit={handleCategoryUpdate}
            />
          ),
        });
        setOpen(true);
        break;
      // delete
      case "delete":
        setSheet({
          title: "view the category",
          description: "",
          content: (
            <CategoryForm
              formType="delete"
              formObject={props.formObject}
              onSubmit={handleCategoryDelete}
            />
          ),
        });
        setOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <Button variant={props.variant} onClick={handleSheetOpen}>
      {props.children}
    </Button>
  );
};
