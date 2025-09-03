"use client";

import ActivitiesList from "@/components/ui/activitiesList";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <section className='search'>
      {query && (
        <div className='search__results'>
          <p>
            Showing results for: <strong>{query}</strong>
          </p>
        </div>
      )}
      <ActivitiesList query={query} />
    </section>
  );
}
