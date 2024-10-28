import { memo, useCallback } from 'react'
import styles from './Categories.module.scss'
import { useGetCategoriesQuery } from '../../redux/api/apiSlice'
import { selectFilter } from '../../redux/slices/filter/filterSlice'
import { useAppSelector } from '../../hooks/useAppSelector'
import useActions from '../../hooks/useActions'

export default memo(function Categories() {
  const { setActiveCategory } = useActions()

  const { data: categories, isLoading } = useGetCategoriesQuery()

  const { currentCategory } = useAppSelector(selectFilter)

  const handleChangeCategory = useCallback(
    (currentCategory: string) => setActiveCategory(currentCategory),
    [setActiveCategory]
  )

  return (
    <div className={styles.categories}>
      {isLoading ? (
        <span>Загрузка...</span>
      ) : (
        <ul>
          {categories?.map(category => (
            <li
              key={category._id}
              onClick={() => handleChangeCategory(category.name)}
              className={currentCategory === category.name ? 'categoriesActive' : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})
