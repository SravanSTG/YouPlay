import React, { useState } from "react";
import { CommentType } from "../interfaces";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useUploadDate from "../utils/useUploadDate";

type CommentPropsType = {
  comment: CommentType;
};

const Comment: React.FC<CommentPropsType> = ({ comment }) => {
  const [showReplies, setShowReplies] = useState<boolean>(false);

  const { snippet, replies } = comment;

  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textOriginal,
  } = snippet.topLevelComment.snippet;

  const { comments } = replies || {};

  const commentDate = useUploadDate(publishedAt);

  return (
    <div className="flex my-5">
      <div>
        <img
          src={authorProfileImageUrl}
          alt="user-profile-img"
          className="rounded-full h-10 w-10 max-w-10"
        />
      </div>
      <div className="flex flex-col mx-3 text-sm">
        <div>
          <h4 className="font-semibold mb-1">
            {authorDisplayName}
            <span className="text-xs text-gray-500 ml-1">
              {commentDate}
            </span>
          </h4>
          <p className="mb-2">{textOriginal}</p>
          <p className="flex items-center">
            <BiLike className="mr-1 text-base" /> {likeCount}
            <BiDislike className="ml-3 text-base" />
          </p>
        </div>
        {comments && (
          <div className="mt-3">
            <h5
              className="text-blue-600 font-semibold"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? (
                <div className="flex items-center">
                  <IoMdArrowDropup className="mr-1" /> Hide replies
                </div>
              ) : (
                <div className="flex items-center">
                  <IoMdArrowDropdown className="mr-1" /> Show replies
                </div>
              )}
            </h5>
            <div className="mt-2">
              {showReplies &&
                comments.map((comment) => {
                  return (
                    <div key={comment.id} className="flex mt-3">
                      <div>
                        <img
                          src={comment.snippet.authorProfileImageUrl}
                          alt="user-profile-img"
                          className="rounded-full h-6 w-6 max-w-6"
                        />
                      </div>
                      <div className="flex flex-col mx-3 text-sm">
                        <div>
                          <h4 className="font-semibold mb-1">
                            {comment.snippet.authorDisplayName}
                          </h4>
                          <p className="mb-2">{comment.snippet.textOriginal}</p>
                          <p className="flex items-center">
                            <BiLike className="mr-1 text-base" />
                            {comment.snippet.likeCount}
                            <BiDislike className="ml-3 text-base" />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
