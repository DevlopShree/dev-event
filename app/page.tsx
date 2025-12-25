import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { events } from '@/lib/constants'
import React from 'react'



const page = () => {
  return (
    <section className='space-y-3 lg:px-15 px-5'>
      <h1 className='text-center'>The Hub for Every Dev <br />Event You Mustn't Miss</h1>
      <p className='text-center'>Hackathons, Meetups, and Conferences, All in One Place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul  className='events list-none'>
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
              {/* <EventCard title={event.title} image={event.image} /> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page