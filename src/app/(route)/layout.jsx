"use client";

import Dock from "@/components/ui/dock";
import SiteHeader from "@/components/ui/siteHeader";
import { usePathname, useRouter } from "next/navigation";

export default function NoneLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (query) => {
    if (query && pathname === "/search") {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <SiteHeader
        search={pathname === "/search"}
        onSearch={pathname === "/search" ? handleSearch : undefined}
      >
        {pathname === "/"
          ? "Aktiviteter"
          : pathname === "/search"
          ? "Søg"
          : pathname === "/calendar"
          ? "Kalender"
          : "Unknown"}
      </SiteHeader>
      <main className='both-layout'>{children}</main>
      <Dock />
    </>
  );
}
