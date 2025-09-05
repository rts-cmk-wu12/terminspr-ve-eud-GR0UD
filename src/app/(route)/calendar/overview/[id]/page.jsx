"use client";
import { useEffect, useState, use } from "react";
import { ActivityApi } from "@/utils/ActivityApi";

export default function ActivityOverview({ params }) {
  const unwrappedParams = use(params);
  const [activity, setActivity] = useState(null);
  const [enrolledUsers, setEnrolledUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await ActivityApi.getActivity(unwrappedParams.id);
        setActivity(data);

        try {
          const users = await ActivityApi.getActivityUsers(unwrappedParams.id);
          setEnrolledUsers(users);
        } catch (userError) {
          console.error("Error fetching enrolled users:", userError);
          setEnrolledUsers([]);
        }
      } catch (error) {
        console.error("Error fetching activity details:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivity();
  }, [unwrappedParams.id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='activity-details'>
      <h1 className='activity-details__title'>{activity.name}</h1>
      <div className='activity-details__info'>
        <p className='activity-details__info-item'>
          Weekday: {activity.weekday}
        </p>
        <p className='activity-details__info-item'>Time: {activity.time}</p>
        <p className='activity-details__info-item'>
          Age Group: {activity.minAge} - {activity.maxAge}
        </p>
      </div>

      <div className='activity-details__enrolled'>
        <h2 className='activity-details__enrolled-title'>Enrolled Users</h2>
        <ul className='activity-details__enrolled-list'>
          {enrolledUsers.map((user) => (
            <li key={user.id} className='activity-details__enrolled-item'>
              {user.firstname} {user.lastname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
