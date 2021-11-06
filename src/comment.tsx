import "./commentStyles.css";

export type CommentProps = {
  title: string;
  message: string;
  reply: CommentProps[];
};

function Comment({ title, message, reply }: CommentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <div className="reply-area">
        {reply.map((reply) => (
          <Comment
            title={reply.title}
            message={reply.message}
            reply={reply.reply}
          />
        ))}
      </div>
    </div>
  );
}

export default Comment;
