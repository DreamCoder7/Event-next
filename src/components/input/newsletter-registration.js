import { useRef, useState } from "react";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [isValid, setIsValid] = useState(false);
  const inputEmailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    const enteredEmail = inputEmailRef.current.value;

    const reqBody = {
      id: new Date().toISOString(),
      email: enteredEmail,
    };

    // optional: validate input
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@")
    ) {
      setIsValid(true);
    }

    // send valid data to API
    fetch(
      "https://nextjs-course-ca1df-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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