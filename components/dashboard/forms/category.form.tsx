"use client";
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AppFormProps } from "@/lib/utils/types";
import {
  CategorySchema,
  type Category,
  type CategorySchemaType,
} from "@/lib/schema/category.schema";
import { useSheetState } from "@/store";
import { FormSubmit } from "@/components/form-submit";
import { FormDelete } from "@/components/form-delete";
import { Input } from "@/components/ui/input";

export const CategoryForm: ForwardRefExoticComponent<
  AppFormProps<Category> & RefAttributes<HTMLFormElement>
> = forwardRef<HTMLFormElement, AppFormProps<Category>>(
  (props, ref): JSX.Element => {
    // define the form
    const form = useForm<CategorySchemaType>({
      // set the resolver for client side schema validations
      resolver: zodResolver(CategorySchema),

      // set default values for each form type
      defaultValues: {
        name: props.formType !== "create" ? props.formObject.name : "",
        slug: props.formType !== "create" ? props.formObject.slug : "",
      },
    });

    //sheet state
    const { setSheet, setOpen } = useSheetState((state) => state);

    // expose clean form object to the parent of the form
    const onSubmit = async () => {
      if (props.formType === "view") return;

      if (props.formType === "delete") {
        await props.onSubmit(props.formObject);
        setSheet({
          title: "",
          description: "",
          content: <></>,
        });
        return setOpen(false);
      }

      const isValid = await form.trigger();
      if (!isValid) return;

      const category = form.getValues();

      switch (props.formType) {
        case "create":
          await props.onSubmit(category);
          setSheet({
            title: "",
            description: "",
            content: <></>,
          });
          setOpen(false);
          break;
        case "update":
          await props.onSubmit({
            id: props.formObject.id,
            ...category,
          });
          setSheet({
            title: "",
            description: "",
            content: <></>,
          });
          setOpen(false);
          break;
        default:
          break;
      }
    };

    return (
      <>
        <Form {...form}>
          <form ref={ref} action={onSubmit}>
            <div className="pb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={props.formType === "view"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={props.formType === "view"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/*  */}
            {props.formType === "view" ? (
              <Button
                type="button"
                onClick={() => {
                  setSheet({
                    title: "",
                    description: "",
                    content: <></>,
                  });
                  setOpen(false);
                }}
              >
                Close
              </Button>
            ) : props.formType === "delete" ? (
              <FormDelete>Delete</FormDelete>
            ) : (
              <FormSubmit>Submit</FormSubmit>
            )}
          </form>
        </Form>
      </>
    );
  }
);

CategoryForm.displayName = "CategoryForm";
