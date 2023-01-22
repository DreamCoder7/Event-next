import Link from "next/link";

import classes from "./event-item.module.css";
import Button from "../Ui/button";
import {
  AddressIcon,
  ArrowRightIcon,
  DateIcon,
} from "../../components/Icons/index";

function EventItem({ id, title, location, date, image }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", " + "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li key={id} className={classes.item}>
      <img src={`/` + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
