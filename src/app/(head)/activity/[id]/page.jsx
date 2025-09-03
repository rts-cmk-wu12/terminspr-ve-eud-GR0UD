"use client";
import React from "react";
import Heading from "@/components/ui/heading";
import useFetch from "@/hooks/useFetch";
import formatDate from "@/utils/getDate";

export default function ActivityPage({ params }) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const { data: activity, error, loading } = useFetch(`activities/${id}`);

  if (loading) return <div className='activity__loading'>Loading...</div>;
  if (error || !activity)
    return <div className='activity__error'>Error loading activity.</div>;

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

        <button className='activity__button'>Tilmeld nu</button>

        <div className='activity__description-box'>
          <Heading as='h2' size='sm' color='light'>
            Om holdet
          </Heading>
          <p className='activity__description'>{activity.description}</p>
        </div>

        <div className='activity__footer'>
          <div className='activity__details'>
            <p>Sidst opdateret: {formatDate(activity.updatedAt)}</p>
            <p>Hold ID: #{activity.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
