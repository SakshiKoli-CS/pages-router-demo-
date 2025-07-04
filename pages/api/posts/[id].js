export default async function handler(req, res) {
  const {
    query: { id },
  } = req

  try {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
      return res.status(404).json({ error: 'Post not found' })
    }

    const post = await response.json()

    const timestamp = new Date().toISOString()
    const postWithTimestamp = { ...post, timestamp }

    res.status(200).json(postWithTimestamp)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' })
  }
}
