import { Fragment } from "react";

import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "../../components/EventDetail/index";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import ErrorAlert from "@/components/Ui/error-alert";

function EventDetailPage(props) {
  const { event } = props;

  if (!event)
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );

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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const eventData = await getEventById(eventId);

  return {
    props: {
      event: eventData,
      revalidate: 30,
    },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
