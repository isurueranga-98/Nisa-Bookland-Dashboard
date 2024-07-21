import { DataTable } from "@/components/ui/data-table";
import { readCategories } from "@/lib/database/category/read-categories.db";
import { CategoryColumns } from "@/components/dashboard/columns/category.columns";
import { CategorySheetHandler } from "@/components/dashboard/sheet-handlers/category.sheet-handler";

export const CategoryTable = async (): Promise<JSX.Element> => {
  const machines = await readCategories();

  return (
    <DataTable
      columns={CategoryColumns}
      data={machines!}
      buttons={
        <CategorySheetHandler formType="create">
          Add Category
        </CategorySheetHandler>
      }
      filterByValues={[
        { columnId: "name", columnName: "Name" },
        { columnId: "slug", columnName: "Slug" },
      ]}
    />
  );
};
