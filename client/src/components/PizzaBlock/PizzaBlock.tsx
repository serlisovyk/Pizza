import { useState } from 'react'
import styles from './PizzaBlock.module.scss'
import { Link } from 'react-router-dom'
import { typesNames } from '../../utils/constants'
import { ICartProduct, IProduct } from '../../types/types'
import useActions from '../../hooks/useActions'

export default function PizzaBlock({
  _id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}: IProduct) {
  const { addItemToCart } = useActions()

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  function handleClickBtn() {
    const item: Omit<ICartProduct, 'count'> = {
      _id,
      title,
      price,
      imageUrl,
      type: typesNames[activeType],
      size: sizes[activeSize],
    }

    addItemToCart(item)
  }

  return (
    <div className={styles.PizzaBlock}>
      <Link to={`/pizza/${_id}`}>
        <img className={styles.image} src={'/' + imageUrl} alt="Pizza" />
      </Link>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {types.map(type => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? 'pizzaBlockActive' : ''}
            >
              {typesNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'pizzaBlockActive' : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>от {price} грн.</div>
        <div className="button button--outline button--add" onClick={handleClickBtn}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  )
}
