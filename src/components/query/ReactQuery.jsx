import { useQuery } from "@tanstack/react-query";
import Form from "./Form";
import { fetchPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";

const ReactQuery = () => {
  const naviget = useNavigate();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const posts = data.slice(0, 5);
  return (
    <div>
      <div className='border border-orange-100 w-[600px] mx-auto my-20 min-h-[500px]'>
        <h1 className='text-2xl font-bold text-orange-800 text-center my-5'>
          React Query Example
        </h1>
        <div>
          <h1 className=' text-xl text-center my-5'>Add Example</h1>
          <Form />
        </div>
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              className='border border-slate-500 my-2 px-2 py-3  text-center'
            >
              <h4
                onClick={() => naviget(`/reactquery/post/${post.id}`)}
                className='text-lg hover:cursor-pointer hover:text-slate-600'
              >
                {post.title}
              </h4>

              <div>
                <button
                  className='border border-green-800 px-4 mx-3 hover:bg-green-200'
                  onClick={() => naviget(`/reactquery/post/${post.id}/edit`)}
                >
                  Edit
                </button>
                <button className='border border-red-600 px-4'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactQuery;
