import { ReactNode } from "react"
import { Pill } from "components"
import styles from "./DashboardPageHeader.module.scss"

export interface DashboardPageHeaderProps {
  pageIcon: ReactNode
  title: string
  titlePillLabel?: string
  subtitle?: string
  secondaryNode?: ReactNode
  mobileHamburger?: ReactNode
}

const DashboardPageHeader = ({
  pageIcon,
  title,
  titlePillLabel,
  subtitle,
  secondaryNode,
  mobileHamburger,
}: DashboardPageHeaderProps) => {
  return (
    <div className={styles.page__header}>
      <div className={styles.mobile__hamburger}>
        {mobileHamburger}
      </div>
      <div className={styles.left__side}>
        <div className={styles.page__icon}>
          {pageIcon}
        </div>
        <div className={styles.text__container}>
          <h1 className={styles.title}>
            {title}
            {titlePillLabel && (
              <Pill
                text={titlePillLabel}
                variant="warning"
              />
            )}
          </h1>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>

      <div className={styles.right__side}>
        {secondaryNode}
      </div>
    </div>
  )
}

export default DashboardPageHeader
