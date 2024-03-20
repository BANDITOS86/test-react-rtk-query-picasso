import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/api.ts";
import Loader from "../../shared/loader.tsx";
import PostDetail from "../../entities/Post/ui/PostDetail.tsx";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useGetPostByIdQuery(Number(id));

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

          <PostDetail data={post} />
        </div>
      )}

      {isError && (
        <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
      )}
    </>
  );
};

export default PostPage;
