import { ButtonProps } from "@/components/ui/button";
import { Category } from "@/lib/schema/category.schema";
import { Customer } from "@/lib/schema/customer.schema";
import { Employee } from "@/lib/schema/employee.schema";
import { Order } from "@/lib/schema/order.schema";
import { Product } from "@/lib/schema/product.schema";
import { Row } from "@tanstack/react-table";

export type ActionResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

export type FilterByValue = {
  columnId: string;
  columnName: string;
};

export type AppFormProps<T = Customer | Product | Order | Employee | Category> =

    | { formType: "create"; onSubmit: (data: Omit<T, "id">) => Promise<void> }
    | {
        formType: "update" | "delete";
        formObject: T;
        onSubmit: (data: T) => Promise<void>;
      }
    | {
        formType: "view";
        formObject: T;
      };

export type SheetHandlerProps<T> = ButtonProps &
  (
    | { formType: "create" }
    | { formType: "update" | "view" | "delete"; formObject: T }
  );

export type TableActionsProps<T> = {
  row: Row<T>;
};
