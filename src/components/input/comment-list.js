import classes from "./comment-list.module.css";

function CommentList() {
  // const [comments, setComments] = useState([]);

  // fetch("/api/newsLetter")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setComments(data.comments);
  //   });

  // console.log(comments);

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {/* {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))} */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

// One way of doing
// export function getStaticProps() {
//   let usersComments = null;

//   fetch("/api/newsLetter")
//     .then((res) => res.json())
//     .then((data) => {
//       usersComments = data.comments;
//     });

//   return {
//     props: {
//       comments: usersComments,
//     },
//   };
// }

export default CommentList;
