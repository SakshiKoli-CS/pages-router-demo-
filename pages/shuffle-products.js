import styles from '../styles/Shuffle.module.css'

export async function getServerSideProps() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products')
  const products = await res.json()
  const randomProduct = products[Math.floor(Math.random() * products.length)]
  const randomNum = Math.floor(Math.random() * 10000)

  return {
    props: {
      product: {
        ...randomProduct,
        randomNum,
      },
    },
  }
}

export default function ShuffleProductPage({ product }) {
  return (
<div className={styles.card}>
  <div className={styles.left}>
    <img
      src={product.images[0]}
      alt={product.title}
      className={styles.image}
    />
  </div>
  <div className={styles.right}>
    <h2>{product.title}</h2>
    <p><strong>Price:</strong> ${product.price}</p>
    <p><strong>Random Number:</strong> {product.randomNum}</p>
    <p><strong>Description:</strong></p>
    <p>{product.description}</p>
  </div>
</div>
  )
}
