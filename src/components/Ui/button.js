import Link from "next/link";
import classes from "./button.module.css";

function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}

export default Button;
