import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import classNames from "classnames/bind"
import { SmallCircleCheckIcon, SearchIcon, DropdownArrowIcon } from "assets"
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
  values: string[]
  children?: ReactNode
  withSearch?: boolean
  multipleLabel?: string
  className?: string
  width?: number
  optionsWidth?: number
  defaultDisplayValue?: string
  defaultValues?: string[]
}

const MultiSelectDropdown = ({
  variant = "default",
  options,
  onChange,
  values,
  children,
  withSearch,
  multipleLabel = "",
  className,
  width,
  optionsWidth,
  defaultDisplayValue = "Select an option",
  defaultValues,
}: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() =>  setSearch("") , [open])

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

  const displayOptions = useMemo(() => {
    return options.sort((a,b) => {
      const aInValues = values.includes(a.value);
      const bInValues = values.includes(b.value);
      if ((aInValues && bInValues) || (!aInValues && !bInValues)) {
        return a.value.toLowerCase().localeCompare(b.value.toLowerCase())
      } else if (aInValues && !bInValues) {
        return -1
      } else {
        return 1
      }
    }).filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
  }, [search, options, values])


  let displayValue = values?.length > 1 ? `${values.length} ${multipleLabel} Selected` : values[0]
  if (values?.length === 0) displayValue = defaultDisplayValue

  const areValuesDefault =
    (values?.length === defaultValues?.length
    && values?.every((value) => defaultValues?.includes(value)))
    || values?.length === 0

  return (
    <div className={cx(styles.container, styles.multi__select, className, variant)} ref={ref} style={{ width }}>
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
          {values?.length === 1 ? (
            <>
              {optionsById[values[0]]?.image && (
                <img
                  src={optionsById[values[0]]?.image}
                  alt={optionsById[values[0]]?.label}
                />
              )}
              <span
                className={cx({ [styles.not__default__value]: !areValuesDefault })}
              >{optionsById[values[0]]?.label}</span>
            </>
          ) : (
            <span
              className={cx({ [styles.not__default__value]: !areValuesDefault })}
            >
              {displayValue}
            </span>
          )}
        </span>
        <DropdownArrowIcon className={styles.caret} fill="var(--token-light-white)" />
      </button>
      {open && (
        <div className={cx(styles.options, { withSearch } )} style={{ width: optionsWidth }}>
          {withSearch && (
            <div className={styles.search__container}>
              <input
                type="text"
                placeholder="Search"
                autoFocus
                className={styles.search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchIcon fill="var(--token-dark-900)" />
            </div>
          )}
          <div className={cx(styles.options__container, { notChildren: !children })}>
          {displayOptions.length === 0 ? (
              <span className={styles.no__results}>No results</span>
            ) : displayOptions
              .map((option) => (
                <button
                  className={values.includes(option.value) ? styles.active : ""}
                  key={option.value}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onChange(option.value)
                  }}
                >
                  <span className={styles.selected__wrapper}>
                    <div className={styles.checkbox__image__wrapper}>
                      <div className={cx(styles.checkbox__container)}>
                        <input type="checkbox" hidden />
                        {values.includes(option.value) ? (
                          <SmallCircleCheckIcon fill="var(--token-light-white)" />
                        ) : (
                          <span className={styles.track} />
                        )}
                      </div>
                      {option.image && (
                        <img
                          src={option.image}
                          alt={option.label}
                        />
                      )}
                    </div>
                    <span>{option.label}</span>
                  </span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MultiSelectDropdown
