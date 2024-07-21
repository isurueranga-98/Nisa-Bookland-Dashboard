import { SideBarNavItem } from "./sidebar-nav-item";

export const DashboardSideBar = (): React.JSX.Element => {
  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
    },
    {
      title: "Products",
      href: "/dashboard/products",
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
    },
    {
      title: "Employees",
      href: "/dashboard/employees",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
    },
  ];

  return (
    <aside className="h-screen w-64 border-r">
      {/* logo */}
      <div className="h-16 flex items-center pl-4 font-bold text-2xl">Logo</div>
      {/* nav */}
      <nav className="">
        {pages.map((page) => (
          <SideBarNavItem key={page.href} href={page.href} title={page.title} />
        ))}
      </nav>
    </aside>
  );
};
