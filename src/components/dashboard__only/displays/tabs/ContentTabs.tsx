import { Pill } from 'components'
import styles from "./ContentTabs.module.scss"

interface ContentTab {
  key: string
  label: string
  onClick: () => void
  notifications?: number
}
export interface ContentTabsProps {
  tabs: ContentTab[]
  activeTabKey: string
}

const ContentTabs = ({ tabs, activeTabKey }: ContentTabsProps) => {
  return (
    <div className={styles.tabs__container}>
      <div className={styles.border} />
      <div className={styles.tab__container}>
        {tabs.map(({ key, label, onClick, notifications }) => (
          <button
            className={activeTabKey === key ? styles.active : ""}
            type="button"
            key={key}
            onClick={onClick}
          >
            {label}
            {notifications && (
              <Pill
                variant="danger"
                text={`${notifications}`}
                small
              />
            )}
          </button>
          )
        )}
      </div>
    </div>
  )
}

export default ContentTabs
