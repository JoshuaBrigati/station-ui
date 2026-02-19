
import { ReactNode } from "react"
import { SettingsIcon } from "assets"
import { Dropdown } from "components"
import styles from "./SettingsListItem.module.scss"

export interface SettingsListItemProps {
  title: string
  subTitle: string
  extra: ReactNode
}

export const SettingsDropdown = ({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  className?: string
}) => {

  return (
    <Dropdown
      options={options}
      value={value}
      onChange={onChange}
      className={styles.dropdown__override}
    />
  )
}


const SettingsListItem = ({
  title,
  subTitle,
  extra,
}: SettingsListItemProps) => {
  return (
    <div className={styles.setting__li__container}>
      <div className={styles.left__container}>
        <SettingsIcon width={32} height={32} fill="var(--token-dark-900)" />

        <div className={styles.title__container}>
          <h3 className={styles.title}>{title}</h3>
          <h5 className={styles.subtitle}>{subTitle}</h5>
        </div>
      </div>

      {extra}
    </div>
  )
}

export default SettingsListItem
