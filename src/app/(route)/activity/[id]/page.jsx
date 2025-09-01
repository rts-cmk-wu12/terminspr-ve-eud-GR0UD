export default function ActivityPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Activity Page</h1>
      <p>Activity ID: {id}</p>
    </div>
  );
}
