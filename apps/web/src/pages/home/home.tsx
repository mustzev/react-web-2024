import styles from './home.module.css'

export function Home() {
  return (
    <div className={styles['home-page']}>
      home page
      <p className={styles['red-text']}>
        red text
      </p>
    </div>
  )
}
