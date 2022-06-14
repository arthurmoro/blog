import Post from "@/components/Posts/Post";

function Posts({ posts }) {
  return (
    <section>
      <div className="p-8 container">
        {posts?.map((post, index) => (<Post key={index} post={post} />))}
      </div>
    </section>
  )
}

export default Posts;