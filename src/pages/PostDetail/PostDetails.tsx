import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/api.ts";
import Loader from "../../shared/loader.tsx";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, isError, error } = useGetPostByIdQuery(Number(id));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container py-[100px]">
          <Link
            className="p-[10px] mb-[25px] text-xl font-medium rounded border-2 border-solid border-neutral-700 inline-block"
            to="/"
          >
            Back to posts
          </Link>
          <h1 className="text-7xl font-medium italic font-sans text-center mb-20">
            {post?.title}
          </h1>
          <p className="text-4xl font-normal text-gray-600">{post?.body}</p>
        </div>
      )}

      {isError && (
        <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
      )}
    </>
  );
};

export default PostDetail;
