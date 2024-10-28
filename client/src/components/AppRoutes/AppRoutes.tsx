import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

import Home from '../../pages/Home/Home'

const Cart = lazy(
  () => import(/* webpackChunkName: "Cart" */ '../../pages/Cart/Cart')
)

const SingleProduct = lazy(
  () =>
    import(
      /* webpackChunkName: "SingleProduct" */ '../../pages/SingleProduct/SingleProduct'
    )
)

const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound/NotFound')
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.CART}
        element={
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SINGLE_PRODUCT}
        element={
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <SingleProduct />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.NOT_FOUND}
        element={
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  )
}
