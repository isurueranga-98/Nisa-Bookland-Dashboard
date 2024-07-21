import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { type TableActionsProps } from "@/lib/utils/types";
import { type Category } from "@/lib/schema/category.schema";
import { CategorySheetHandler } from "../sheet-handlers/category.sheet-handler";

export const CategoryTableActions = ({
  row,
}: TableActionsProps<Category>): JSX.Element => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <CategorySheetHandler
            variant="ghost"
            formType="view"
            formObject={row.original}
          >
            View
          </CategorySheetHandler>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CategorySheetHandler
            variant="ghost"
            formType="update"
            formObject={row.original}
          >
            Edit
          </CategorySheetHandler>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CategorySheetHandler
            variant="ghost"
            formType="delete"
            formObject={row.original}
          >
            Delete
          </CategorySheetHandler>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
