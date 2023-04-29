import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "@/components/EventList/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve.."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const filteredEvents = await getFeaturedEvents();

  return {
    props: { events: filteredEvents },
    revalidate: 1800,
  };
}

export default HomePage;
