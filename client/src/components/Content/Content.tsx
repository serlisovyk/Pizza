import styles from './Content.module.scss'
import Skeleton from '../PizzaBlock/Skeleton'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import Pagination from '../Pagination/Pagination'
import Error from '../Error/Error'
import { selectFilter } from '../../redux/slices/filter/filterSlice'
import { useGetPizzasQuery } from '../../redux/api/apiSlice'
import { IProduct } from '../../types/types'
import { useAppSelector } from '../../hooks/useAppSelector'

export default function Content() {
  const {
    searchValue,
    sort: { sortProperty },
    currentPage,
    currentCategory,
  } = useAppSelector(selectFilter)

  const {
    data: products,
    isLoading,
    isError,
  } = useGetPizzasQuery({
    currentCategory,
    searchValue,
    currentPage,
    sortProperty,
  })

  return (
    <>
      <div className={styles.items}>
        {isError ? (
          <Error />
        ) : isLoading ? (
          [...new Array(4)].map((_, i) => <Skeleton key={i} />)
        ) : !products?.length ? (
          <Error />
        ) : (
          products?.map((product: IProduct) => (
            <PizzaBlock key={product._id} {...product} />
          ))
        )}
      </div>
      <Pagination />
    </>
  )
}
