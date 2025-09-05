"use client";
import React, { useEffect, useState } from "react";
import Heading from "@/components/ui/heading";
import useFetch from "@/hooks/useFetch";
import { ActivityApi } from "@/utils/ActivityApi";
import getUser from "@/utils/getUser";
import getCookie from "@/utils/getCookie";

export default function ActivityPage({ params }) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const { data: activity, error, loading } = useFetch(`activities/${id}`);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState("default");

  useEffect(() => {
    const cookieUserId = getCookie("userId");
    const cookieToken = getCookie("token");

    setUserId(cookieUserId);
    setToken(cookieToken);

    const fetchUserRole = async () => {
      const userData = await getUser();
      if (userData) {
        setUserRole(userData.role);
      }
    };
    fetchUserRole();
  }, []);

  useEffect(() => {
    if (activity && activity.users && userId) {
      setIsSignedUp(
        activity.users.some((p) => String(p.id) === String(userId))
      );
    }
  }, [activity, userId]);

  if (loading) return <div className='activity__loading'>Loading...</div>;
  if (error || !activity)
    return <div className='activity__error'>Error loading activity.</div>;

  const handleSignupToggle = async () => {
    try {
      if (isSignedUp) {
        await ActivityApi.removeUserFromActivity(userId, activity.id, token);
        alert("Du er nu afmeldt!");
        setIsSignedUp(false);
      } else {
        await ActivityApi.addUserToActivity(userId, activity.id, token);
        alert("Du er nu tilmeldt!");
        setIsSignedUp(true);
      }
    } catch (err) {
      console.error("Error during signup/removal:", err);
      alert("Noget gik galt. Prøv igen: " + err.message);
    }
  };

  return (
    <section className='activity'>
      <div className='activity__top'>
        <img
          className='activity__image'
          src={activity.asset.url}
          alt={`Photo of ${activity.name}`}
          width={500}
          height={300}
        />
        <div className='activity__overlay'>
          <Heading as='h1' size='xl' color='light' className='activity__title'>
            {activity.name}
          </Heading>
        </div>
      </div>

      <div className='activity__content'>
        <div className='activity__meta'>
          <div className='activity__meta-item'>
            <div>
              <Heading as='h3' size='xs' color='light'>
                Tidspunkt
              </Heading>
              <p>
                {activity.weekday} {activity.time}
              </p>
            </div>
          </div>

          <div className='activity__meta-item'>
            <div>
              <Heading as='h3' size='xs' color='light'>
                Deltagere
              </Heading>
              <p>Max {activity.maxParticipants} personer</p>
            </div>
          </div>
          <div className='activity__meta-item'>
            <div>
              <Heading as='h3' size='xs' color='light'>
                Alder
              </Heading>
              <p>
                {activity.minAge}-{activity.maxAge} år
              </p>
            </div>
          </div>
        </div>

        <button
          className='activity__button'
          onClick={handleSignupToggle}
          disabled={userRole === "instructor"}
          style={
            userRole === "instructor"
              ? { opacity: 0.5, cursor: "not-allowed" }
              : {}
          }
        >
          {isSignedUp ? "Afmeld" : "Tilmeld nu"}
        </button>

        <div className='activity__description-box'>
          <Heading as='h2' size='sm' color='light'>
            Om holdet
          </Heading>
          <p className='activity__description'>{activity.description}</p>
        </div>

        <div className='activity__footer'>
          <div className='activity__details'>
            <p>Sidst opdateret: {activity.updatedAt}</p>
            <p>Hold ID: #{activity.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
