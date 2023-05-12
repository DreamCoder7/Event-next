import { useContext, useRef, useState } from "react";

import classes from "./newsletter-registration.module.css";
import NotificationContext from "store/notification-context";

function NewsletterRegistration() {
  const [isValid, setIsValid] = useState(false);
  const inputEmailRef = useRef();

  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Signup...",
      message: "register user to the newsletter!",
      status: "pending",
    });

    // fetch user input (state or refs)
    const enteredEmail = inputEmailRef.current.value;

    const emailData = { email: enteredEmail };

    // optional: validate input
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@")
    ) {
      setIsValid(true);
    }

    // send valid data to API
    fetch("/api/newsLetter", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.message || "Something went wrong!");
          });
        }
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Successfuly signup!",
          message: "registered user to the newsletter!",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message && "Something went wrong!",
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={inputEmailRef}
          />
          {isValid && <p>Please enter a valid email</p>}
          <button onClick={registrationHandler}>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
