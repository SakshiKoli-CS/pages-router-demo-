
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oswald </h1>

      <div className={styles.imageWrapper}>
        <Image
          src="/OswaldCartoon.webp"
          alt="Oswald"
          width={300}
          height={450}
          className={styles.image}
        />
      </div>

      <p className={styles.caption}> My Favorite Childhood Cartoon ❤️</p>
    </div>
  )
}
