import React from "react";
import Comment, { CommentProps } from "./comment";

const staticComments = [
  {
    id: 1,
    title: "testing title",
    message: "hello world",
    reply: [
      {
        id: 4,
        title: "testing title reply 4",
        message: "hello world",
        reply: [],
      },
    ],
  },
  {
    id: 2,
    title: "testing title 2",
    message: "hello world",
    reply: [
      {
        id: 4,
        title: "testing title reply 4",
        message: "hello world",
        reply: [],
      },
    ],
  },
];
function App() {
  return (
    <>
      {staticComments.map((comment) => (
        <Comment
          title={comment.title}
          message={comment.message}
          reply={comment.reply}
          key={comment.id}
        />
      ))}
    </>
  );
}

export default App;
