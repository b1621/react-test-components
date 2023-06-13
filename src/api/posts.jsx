export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}
