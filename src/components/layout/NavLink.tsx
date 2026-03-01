"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  to: string;
  className?: string | ((props: { isActive: boolean }) => string);
  activeClassName?: string;
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ to, className, activeClassName, children, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    const computedClassName = typeof className === "function"
      ? className({ isActive })
      : cn(className, isActive && activeClassName);

    return (
      <Link href={to} ref={ref} className={computedClassName} {...props}>
        {children}
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";

export { NavLink };
