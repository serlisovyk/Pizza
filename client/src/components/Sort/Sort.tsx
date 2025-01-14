import { memo, useEffect, useRef, useState } from 'react'
import styles from './Sort.module.scss'
import { selectFilter } from '../../redux/slices/filter/filterSlice'
import { useGetSortListQuery } from '../../redux/api/apiSlice'
import { ISortListItem } from '../../types/types'
import { useAppSelector } from '../../hooks/useAppSelector'
import useActions from '../../hooks/useActions'
import Loader from '../Loader/Loader'

export default memo(function Sort() {
  const { setSort } = useActions()

  const { sort } = useAppSelector(selectFilter)

  const { data: sortList, isLoading } = useGetSortListQuery()

  const sortRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  function handleClickListItem(item: ISortListItem) {
    setSort(item)
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(prev => !prev)}>{sort.name}</span>
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <ul>
            {isLoading ? (
              <Loader />
            ) : (
              sortList?.map((sortListItem, i) => (
                <li
                  key={i}
                  onClick={() => handleClickListItem(sortListItem)}
                  className={
                    sort.sortProperty === sortListItem.sortProperty
                      ? 'sortActive'
                      : ''
                  }
                >
                  {sortListItem.name}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
})
