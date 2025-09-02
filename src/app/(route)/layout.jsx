"use client";

import Dock from "@/components/ui/dock";
import SiteHeader from "@/components/ui/siteHeader";
import { usePathname } from "next/navigation";

export default function NoneLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <SiteHeader search={pathname === "/search"}>
        {pathname === "/"
          ? "Aktiviteter"
          : pathname === "/search"
          ? "Søg"
          : pathname === "/calendar"
          ? "Kalender"
          : "Unknown"}
      </SiteHeader>
      <main className='main-layout'>{children}</main>
      <Dock />
    </>
  );
}
