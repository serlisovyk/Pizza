import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

export default function CartEmpty() {
  return (
    <>
      <div className="cartEmpty">
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="/img/empty-cart.png" alt="Empty cart" />
        <Link to={ROUTES.HOME} className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  )
}
