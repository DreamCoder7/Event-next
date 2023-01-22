import classes from "./event-content.module.css";

export function EventContent({ children }) {
  return <section className={classes.content}>{children}</section>;
}
