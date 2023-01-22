import { useRouter } from "next/router";
import { Fragment } from "react";

import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "../../components/EventDetail/index";
import { getEventById } from "../../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) return <p>Page Not Found</p>;

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
