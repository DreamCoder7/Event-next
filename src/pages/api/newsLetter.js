function newsLetterHandler(req, res) {
  if (req.method === "POST") {
    const commentId = req.body.id;
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;

    const commentData = {
      id: commentId,
      email: email,
      name: name,
      text: text,
    };

    fetch(
      "https://nextjs-course-ca1df-default-rtdb.firebaseio.com/comments.json",
      {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        res.status(201).json({
          message: "Comment send successfuly",
          comments: data.comments,
        });
      });
  } else {
    fetch("https://nextjs-course-ca1df-default-rtdb.firebaseio.com/comments.js")
      .then((res) => res.json())
      .then((data) => {
        res
          .status(200)
          .json({
            message: "getting comments successfuly",
            comments: data.comments,
          });
      });
  }
}

export default newsLetterHandler;
