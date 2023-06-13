import { useQuery } from "@tanstack/react-query";

import { fetchPost } from "../../api/posts";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", "id"],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <div className='border border-orange-100 w-[600px] mx-auto my-20 min-h-[500px] p-4'>
        <button
          onClick={() => navigate("/reactquery")}
          className=' float-right text-sky-500'
        >
          back
        </button>
        <div className=' clear-both my-3'>
          <h1 className=' text-center text-lg underline'>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
