"use client";

import useFetch from "@/hooks/useFetch";
import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function ActivitiesList() {
  const { data: activities } = useFetch("activities");

  return (
    <>
      <ul className='activities-list'>
        {(activities || []).map((activity) => (
          <li key={activity.id} className='activities-list__item'>
            <article className='activities-list__article'>
              <Image
                src={activity.asset.url}
                alt='Description'
                width={500}
                height={300}
                className='activities-list__image'
              />
              <div className='activities-list__content'>
                <Heading as='h2' size='sm' className='activities-list__title'>
                  {activity.name}
                </Heading>
                <span className='activities-list__age'>
                  {activity.minAge}-{activity.maxAge} år
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
