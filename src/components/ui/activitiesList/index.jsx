"use client";

import useFetch from "@/hooks/useFetch";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";

export default function ActivitiesList({ query = "" }) {
  const { data: activities } = useFetch("activities");

  const filteredActivities = (activities || []).filter((activity) =>
    activity.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <ul className='activities-list'>
        {filteredActivities.map((activity) => (
          <li key={activity.id} className='activities-list__item'>
            <Link
              href={`/activity/${activity.id}`}
              className='activities-list__link'
            >
              <article className='activities-list__article'>
                <Image
                  src={activity.asset.url}
                  alt={`Photo of ${activity.name}`}
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
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
