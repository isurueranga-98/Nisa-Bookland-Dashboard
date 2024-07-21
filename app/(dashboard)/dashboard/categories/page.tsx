import { DashboardPageContainer } from "@/components/dashboard/layout/dashboard-page-container.layout";
import { CategoryTable } from "@/components/dashboard/tables/category.table";

const CategoriesPage = (): React.JSX.Element => {
  return (
    <DashboardPageContainer title="Categories">
      <div>
        <CategoryTable />
      </div>
    </DashboardPageContainer>
  );
};

export default CategoriesPage;
