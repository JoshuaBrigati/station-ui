import classNames from "classnames/bind"
import { CapitalIcon } from "assets"
import styles from "./GeoBlockCard.module.scss"

const cx = classNames.bind(styles)

export interface GeoBlockCardProps {
  variant?: "large" | "medium" | "small" | "no-background"
  title: string
  description: string
  includeQuote?: boolean
  className?: string
}

const GeoBlockCard = ({
  variant = "large",
  title,
  description,
  includeQuote = false,
  className,
}: GeoBlockCardProps) => {
  return (
    <div
      className={cx(
        styles.geo__block__card__container,
        {
          [styles.medium]: variant === "medium",
          [styles.small]: variant === "small",
          [styles.no__background]: variant === "no-background",
        },
        className
      )}
    >
      <div className={styles.icon__container}>
        <CapitalIcon />
      </div>
      <div className={styles.text__container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description}
        </p>
        {includeQuote && (
          <div className={styles.quote__wrapper}>
            <p className={styles.quote}>
              “A wise and frugal government, which shall leave men free to regulate their own pursuits of industry and improvement”
            </p>
            <p className={styles.author}>- Thomas Jefferson</p>
          </div>
        )}
      </div>

      {/* <div className={styles.icon__container}>
        <CapitalIcon />
      </div> */}
    </div>
  )
}

export default GeoBlockCard
