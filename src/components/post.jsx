import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLike, removeLike } from "../redux/actions/postActions";
import renderPostBody from "../helpers/renderPostBody";
import { useHistory } from "react-router";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const history = useHistory();
  const addLikeHandler = async () => {
    if (post.likes.some(like => like.user === user?._id)) {
      dispatch(removeLike(post._id));
    } else {
      dispatch(addLike(post._id));
    }
  };

  return (
    <>
      <div className="post-card post-card--bg post-card--bg--primary">
        <div className="post-card__img">
          <img
            alt="Post"
            src={
              post && post.attachedFiles && post.attachedFiles.length > 0
                ? post.attachedFiles[0]
                : process.env.PUBLIC_URL + "/imgs/post1.png"
            }
          />
        </div>
        <div className="post-card__body">
          <p className="post-card__title">{post?.title}</p>
          <div className="post-card__description">
            {renderPostBody(post?.body)}
          </div>
          <div className="post-card__info">
            <img
              className="post-card__avatar"
              alt="Avatar"
              src={process.env.PUBLIC_URL + "/imgs/avatar.svg"}
            />
            <div>
              <p>{post?.authorKid?.username}</p>
              <i className="fa fa-heart like-icon"></i>
              <span>{post?.likes?.length}</span>
              <i className="fa fa-comment comment-icon"></i>
              <span>{post?.commentsTotal}</span>
            </div>
          </div>
          <div className="post-card__overlay">
            <Link
              to={`/post-details/${post._id}`}
              className="btn btn--1 btn--rect"
            >
              View Details
            </Link>
            <button
              onClick={() => {
                user ? addLikeHandler() : history.push("/kid/login");
              }}
              className="btn btn--1 btn--rect"
            >
              {!post.likes?.some(like => like.user === user?._id)
                ? "Like"
                : "Unlike"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
