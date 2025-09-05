"use client";

import useFetch from "@/hooks/useFetch";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import getCookie from "@/utils/getCookie";
import getUser from "@/utils/getUser";
import { useState, useEffect } from "react";

export default function UserActivities() {
  const { data: activities } = useFetch("activities");
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState("default");
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    const cookieUserId = getCookie("userId");
    setUserId(cookieUserId);

    const fetchUserRole = async () => {
      const userData = await getUser();
      if (userData) {
        setUserRole(userData.role);
      }
    };
    fetchUserRole();
  }, []);

  useEffect(() => {
    if (activities && userId) {
      console.log("Activities:", activities);
      console.log("UserId:", userId);
      console.log("UserRole:", userRole);

      let filtered;
      if (userRole === "instructor") {
        filtered = activities.filter((activity) => {
          console.log("Activity:", activity);
          return String(activity.instructorId) === String(userId);
        });
      } else {
        filtered = activities.filter(
          (activity) =>
            activity.users &&
            activity.users.some((user) => String(user.id) === String(userId))
        );
      }
      console.log("Filtered Activities:", filtered);
      setUserActivities(filtered);
    }
  }, [activities, userId, userRole]);

  return (
    <>
      {userActivities.length === 0 ? (
        <section className='user-activities__empty'>
          <p className='user-activities__empty-message'>
            You are not part of any activities yet.
          </p>
        </section>
      ) : (
        <section className='user-activities-section'>
          <ul className='user-activities'>
            {userActivities.map((activity) => (
              <li key={activity.id} className='user-activities__item'>
                <Link
                  href={
                    userRole === "instructor"
                      ? `/calendar/overview/${activity.id}`
                      : `/activity/${activity.id}`
                  }
                  className='user-activities__link'
                >
                  <div className='user-activities__card'>
                    <div className='user-activities__content'>
                      <div className='user-activities__header'>
                        <Heading
                          as='h2'
                          size='sm'
                          className='user-activities__title'
                        >
                          {activity.name}
                        </Heading>
                        <div className='user-activities__schedule'>
                          <span className='user-activities__day'>
                            {activity.weekday}
                          </span>
                          <span className='user-activities__separator'>
                            {" "}
                            -{" "}
                          </span>
                          <span className='user-activities__time'>
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
