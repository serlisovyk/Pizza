import styles from './Error.module.scss'

export default function Error() {
  return (
    <div className={styles.error}>
      <h2>Произошла ошибка 😕</h2>
      <p>
        К сожалению не удалось получить/показать пиццы. Попробуйте повторить попытку
        позже
      </p>
    </div>
  )
}
