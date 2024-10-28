import styles from './Home.module.scss'
import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import Content from '../../components/Content/Content'
import { selectFilter } from '../../redux/slices/filter/filterSlice'
import { useAppSelector } from '../../hooks/useAppSelector'

export default function Home() {
  const { searchValue } = useAppSelector(selectFilter)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>
        {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все пиццы'}
      </h2>
      <Content />
    </div>
  )
}
