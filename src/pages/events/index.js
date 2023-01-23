import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "dummy-data";
import EventList from "@/components/EventList/event-list";
import EventSearch from "@/components/EventList/event-search";

function EventPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventPage;
