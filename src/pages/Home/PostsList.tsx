import React from "react";
import { useGetPostsQuery } from "../../api/api.ts";
import Loader from "../../shared/loader.tsx";
import List from "../../features/List.tsx";

const PostsList = () => {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container py-[100px]">
          <h1 className="text-7xl font-medium italic font-sans text-center mb-20">
            Posts list
          </h1>
          {posts ? <List data={posts} /> : <p>Posts not found</p>}
        </div>
      )}
      {isError && (
        <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
      )}
    </>
  );
};

export default PostsList;
