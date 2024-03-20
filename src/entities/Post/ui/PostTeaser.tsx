import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../model/Post.ts";

const PostTeaser = ({ post }: { post: Post }) => {
  if (!post) return null;

  return (
    <>
      <h2 className="text-4xl font-medium font-sans">{post.title}</h2>
      <p className="text-2xl font-normal text-gray-600">
        {post.body.slice(0, 90)}...
      </p>
      <Link
        className="p-[5px] text-xl font-medium rounded border-2 border-solid border-neutral-700"
        to={`/posts/${post.id}`}
      >
        View
      </Link>
    </>
  );
};

export default PostTeaser;
