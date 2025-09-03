"use client";

import Dock from "@/components/ui/dock";

export default function DockLayout({ children }) {
  return (
    <>
      <main className='dock-layout'>{children}</main>
      <Dock />
    </>
  );
}
