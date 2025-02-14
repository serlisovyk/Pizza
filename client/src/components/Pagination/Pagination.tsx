import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { selectFilter } from '../../redux/slices/filter/filterSlice'
import { useAppSelector } from '../../hooks/useAppSelector'
import useActions from '../../hooks/useActions'
import { IHandleUpdatePageProps } from '../../types/types'

export default function Pagination() {
  const { setCurrentPage } = useActions()

  const { currentPage } = useAppSelector(selectFilter)

  const handleUpdatePage = ({ selected }: IHandleUpdatePageProps) =>
    handleChangePage(selected + 1)

  const handleChangePage = (num: number) => setCurrentPage(num)

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handleUpdatePage}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  )
}
