import { useParams } from 'react-router-dom'
import styles from './SingleProduct.module.scss'
import { typesNames } from '../../utils/constants'
import { useGetOnePizzaQuery } from '../../redux/api/apiSlice'
import { Loader } from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'

export default function SingleProduct() {
  const { id } = useParams()
  const { data: OnePizzaData, isLoading } = useGetOnePizzaQuery(id as string)

  if (isLoading) return <Loader />

  if (!OnePizzaData) return <Error />

  const { title, description, price, imageUrl, sizes, types } = OnePizzaData

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={`/${imageUrl}`} alt="Pizza" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.price}>Цена: {price} грн.</div>
        <div className={styles.selector}>
          <div>
            <h3 className={styles.subtitle}>Типы пиццы:</h3>
            <ul>
              {sizes && sizes.length > 0 ? (
                sizes.map(size => (
                  <li key={size} className={styles.size}>
                    {size} см.
                  </li>
                ))
              ) : (
                <Loader />
              )}
            </ul>
          </div>
          <div>
            <h3 className={styles.subtitle}>Типы теста:</h3>
            <ul>
              {types && types.length > 0 ? (
                types.map(type => (
                  <li key={type} className={styles.type}>
                    {typesNames[type]}
                  </li>
                ))
              ) : (
                <Loader />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
