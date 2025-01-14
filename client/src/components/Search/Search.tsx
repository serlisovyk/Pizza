import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import useActions from '../../hooks/useActions'

export default function Search() {
  const { setSearchValue } = useActions()

  const [value, setValue] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  function handleClickClose() {
    setValue('')
    setSearchValue('')

    inputRef.current?.focus()
  }

  const debouncedSetSearchValue = useMemo(
    () => debounce((str: string) => setSearchValue(str), 250),
    [setSearchValue]
  )

  const updateSearchValue = useCallback(
    (str: string) => debouncedSetSearchValue(str),
    [debouncedSetSearchValue]
  )

  useEffect(() => debouncedSetSearchValue.cancel(), [debouncedSetSearchValue])

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        className={styles.input}
        id="search"
        name="search"
        type="text"
        value={value}
        onChange={handleChangeInput}
        placeholder="Поиск пиццы..."
        autoComplete="on"
      />
      {value && (
        <svg
          onClick={handleClickClose}
          className={styles.clearIcon}
          height="18"
          viewBox="0 0 48 48"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  )
}
