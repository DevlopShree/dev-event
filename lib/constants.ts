export type EventItem = {
   title: string;
   image: string;
   location: string;
   slug: string;
   date: string;
   time: string;
}

export const events: EventItem[] = [
   {
      title: "React Conf 2024",
      image: "/images/event1.png",
      location: "Las Vegas, NV",
      slug: "react-conf-2024",
      date: "2024-10-15",
      time: "09:00 AM - 05:00 PM"
   },
   {
      title: "JSConf EU",
      image: "/images/event2.png",
      location: "Berlin, Germany",
      slug: "jsconf-eu-2024",
      date: "2024-11-20",
      time: "10:00 AM - 06:00 PM"
   },
   {
      title: "MLH Local Hack Day",
      image: "/images/event3.png",
      location: "Online",
      slug: "mlh-local-hack-day",
      date: "2024-12-01",
      time: "All Day"
   },
   {
      title: "GDG DevFest",
      image: "/images/event4.png",
      location: "San Francisco, CA",
      slug: "gdg-devfest-2024",
      date: "2024-12-10",
      time: "08:00 AM - 04:00 PM"
   },
   {
      title: "Vue.js Global Summit",
      image: "/images/event5.png",
      location: "Toronto, Canada",
      slug: "vue-global-summit-2024",
      date: "2025-01-15",
      time: "09:30 AM - 05:30 PM"
   },
   {
      title: "TechCrunch Disrupt",
      image: "/images/event6.png",
      location: "Austin, TX",
      slug: "techcrunch-disrupt-2024",
      date: "2024-10-28",
      time: "08:00 AM - 06:00 PM"
   }
];
