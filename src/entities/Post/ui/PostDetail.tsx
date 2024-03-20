import React from 'react'

const PostDetail = ({data}) => {
  return (
    <>
      <h1 className="text-7xl font-medium italic font-sans text-center mb-20">
        {data?.title}
      </h1>
      <p className="text-4xl font-normal text-gray-600">{data?.body}</p>
    </>
  );
}

export default PostDetail;