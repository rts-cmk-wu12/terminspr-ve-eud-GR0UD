"use client";

import Dock from "@/components/ui/dock";
import SiteHeader from "@/components/ui/siteHeader";
import { usePathname } from "next/navigation";

export default function NoneLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <SiteHeader>
        {pathname === "/"
          ? "Home"
          : pathname === "/search"
          ? "Search"
          : pathname === "/calendar"
          ? "Calendar"
          : "Unknown"}
      </SiteHeader>
      <main>{children}</main>
      <Dock />
    </>
  );
}
