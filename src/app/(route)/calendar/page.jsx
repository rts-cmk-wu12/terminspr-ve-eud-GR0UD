import UserActivities from "@/components/ui/userActivities";

export const metadata = {
  title: "Kalender",
  description: "Se dine planlagte aktiviteter i kalenderen.",
};

export default function CalendarPage() {
  return (
    <>
      <UserActivities />
    </>
  );
}
