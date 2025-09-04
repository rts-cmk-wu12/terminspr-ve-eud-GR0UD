import ActivitiesList from "@/components/ui/activitiesList";

export const metadata = {
  title: "Søg",
  description: "Søg efter aktiviteter baseret på dine interesser.",
};

export default function SearchPage() {
  return (
    <section className='search'>
      <ActivitiesList />
    </section>
  );
}
