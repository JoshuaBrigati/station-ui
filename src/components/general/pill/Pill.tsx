import { ForwardedRef, forwardRef } from "react"
import classNames from "classnames/bind"
import styles from "./Pill.module.scss"

const cx = classNames.bind(styles)

export interface PillProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "disabled"
  text: string
  small?: boolean
}

const Pill = forwardRef(
  (
    { variant, text, small }: PillProps,
    ref?: ForwardedRef<HTMLSpanElement>
  ) => {
    return (
      <span
        ref={ref}
        className={cx(
          styles.pill,
          variant,
          { [styles.small]: small }
        )}
      >
        {text}
      </span>
    )
  },
)

export default Pill
