import { useEffect, useState } from "react";
import { videoCommentsUrl } from "../constants";
import Comment from "./Comment";
import { CommentType } from "../interfaces";

type CommentsListPropsType = {
  videoId: string;
};

const CommentsList: React.FC<CommentsListPropsType> = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState<CommentType[]>([]);

  useEffect(() => {
    getVideoCommentsList();
  }, []);

  const getVideoCommentsList = async () => {
    const data = await fetch(
      `${videoCommentsUrl}${videoId}&key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await data.json();
    setCommentsList(json.items);
  };

  return (
    <div>
      {commentsList.map((comment: CommentType) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
