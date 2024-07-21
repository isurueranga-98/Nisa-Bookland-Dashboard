"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarNavItemProps = {
  href: string;
  title: string;
};

export const SideBarNavItem = ({
  href,
  title,
}: SideBarNavItemProps): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <Link
      className={`cursor-pointer hover:bg-muted transition-colors pl-4 py-3 block ${
        pathname === href ? "bg-muted" : ""
      }`}
      href={href}
    >
      {title}
    </Link>
  );
};
