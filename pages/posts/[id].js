import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const paths = [1, 2, 3, 4, 5].map(id => ({
    params: { id: id.toString() }
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

  if (!res.ok) {
    return {
      notFound: true,
    }
  }

  const post = await res.json()

  const postWithTimestamp = {
    ...post,
    timestamp: new Date().toISOString()
  }

  return {
    props: {
      post: postWithTimestamp,
    },
    revalidate: 10,
  }
}

export default function PostPage({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Post #{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Timestamp:</strong> {post.timestamp}</p>
    </div>
  )
}
