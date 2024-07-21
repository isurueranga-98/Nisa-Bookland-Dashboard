"use client";
import { CategoryForm } from "@/components/dashboard/forms/category.form";
import { DashboardPageContainer } from "@/components/dashboard/layout/dashboard-page-container.layout";

const ViewForm = () => (
  <DashboardPageContainer>
    <div>
      <CategoryForm
        formType="create"
        onSubmit={async (data) => {
          console.log(data);
        }}
      />
    </div>
  </DashboardPageContainer>
);

export default ViewForm;
