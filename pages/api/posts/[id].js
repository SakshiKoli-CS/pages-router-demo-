export default async function handler(req, res) {
  const { id } = req.query

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
      return res.status(404).json({ error: 'Post not found' })
    }

    const post = await response.json()

    const postWithTimestamp = {
      ...post,
      timestamp: new Date().toISOString(),
    }

    res.status(200).json(postWithTimestamp)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post data' })
  }
}
