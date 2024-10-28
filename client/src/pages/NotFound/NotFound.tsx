import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h2>
        <span>😢</span> <br />
        Ничего не найдено
      </h2>
      <div className={styles.text}>
        <p>К сожалению данная страница отсутствует в нашем магазине</p>
      </div>
    </div>
  )
}
