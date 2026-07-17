"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathName = usePathname(); // Get the current pathname
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(pathName === item.href && "text-primary font-semibold")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
