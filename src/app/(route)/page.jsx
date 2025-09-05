import ActivitiesList from "@/components/ui/activitiesList";

export const metadata = {
  title: "Aktiviteter",
  description: "En liste over aktiviteter.",
};

export default function Home() {
  return (
    <>
      <section>
        <ActivitiesList />
      </section>
    </>
  );
}
