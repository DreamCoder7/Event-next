import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../helpers/api-util";
import EventList from "@/components/EventList/event-list";
import EventSearch from "@/components/EventList/event-search";

function EventPage(props) {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve.."
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const eventsData = await getAllEvents();

  return {
    props: {
      events: eventsData,
      revalidate: 60,
    },
  };
}

export default EventPage;
