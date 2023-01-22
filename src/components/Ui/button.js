import Link from "next/link";
import classes from "./button.module.css";

function Button({ link, children }) {
  return (
    <Link href={link} legacyBehavior>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}

export default Button;