import { ReactNode, useEffect, useRef, useState } from "react"
import classNames from "classnames/bind"
import { ReactComponent as DropdownArrowIcon } from "assets/icon/DropdownArrow.svg"
import { ReactComponent as SearchIcon } from "assets/icon/Search.svg"
import styles from "./Dropdown.module.scss"

const cx = classNames.bind(styles)

interface Option {
  value: string
  label: string
  image?: string
}
export interface DropdownProps {
  variant?: "default" | "large" | "dashboard" | "textDisplay"
  options: Option[]
  onChange: (value: string) => void
  value?: string
  children?: ReactNode
  withSearch?: boolean
  setSearchValue?: (value: string) => void
  className?: string
  width?: number
  optionsWidth?: number
  optionsAlign?: "left" | "right"
  defaultValue?: string
}

const Dropdown = ({
  variant = "default",
  options,
  onChange,
  value,
  children,
  withSearch,
  setSearchValue,
  className,
  width,
  optionsWidth,
  optionsAlign,
  defaultValue,
}: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  const optionsById = options?.reduce((acc, option) => {
    acc[option.value] = option
    return acc
  }, {} as Record<string, Option>)

  const searchTokens = (searchTerm: string) => {
    setSearchValue && setSearchValue(searchTerm)
    const filteredOptions = options.filter(token => {
      return token.value.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.label.toLowerCase().includes(searchTerm.toLowerCase())
    })

    setFilteredOptions(filteredOptions)
  }

  return (
    <div className={cx(styles.container, className, variant)} ref={ref} style={{ width }}>
      <button
        type="button"
        className={cx(styles.selector, { open })}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setOpen((o) => !o)
        }}
      >
        <span className={styles.selected__wrapper}>
          {value ? (
            <>
              {optionsById[value]?.image && (
                <img
                  src={optionsById[value]?.image}
                  alt={optionsById[value]?.label}
                />
              )}
              <span
                className={cx({ [styles.not__default__value]: defaultValue && value !== defaultValue })}
              >
                {optionsById[value]?.label}
              </span>
            </>
          ) : (
            <span className={styles.placeholder}>Select an option</span>
          )}
        </span>
        <DropdownArrowIcon className={styles.caret} fill="var(--token-light-white)" />
      </button>
      {open && (
        <div
          className={cx(
            styles.options, {
              withSearch,
              [styles.right]: optionsAlign === "right",
              [styles.left]: optionsAlign === "left"
            }
          )}
          style={{ width: `${optionsWidth}px` }}
        >
          {withSearch && (
            <div className={styles.search__container}>
              <input
                type="text"
                placeholder="Search"
                autoFocus
                className={styles.search}
                onChange={(e) => searchTokens(e.target.value)}
              />
              <SearchIcon fill="var(--token-dark-900)" />
            </div>
          )}
          <div className={cx(styles.options__container, { notChildren: !children })}>
            {children ? (
              <div className={styles.children} onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setOpen(false)
                setFilteredOptions(options)
                setSearchValue && setSearchValue("")
              }}>{children}</div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  className={option.value === value ? styles.active : ""}
                  key={option.value}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onChange(option.value)
                    setOpen(false)
                    setFilteredOptions(options)
                    setSearchValue && setSearchValue("")
                  }}
                >
                  <span className={styles.selected__wrapper}>
                    {option.image && (
                      <img
                        src={option.image}
                        alt={option.label}
                      />
                    )}
                    <span>{option.label}</span>
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown