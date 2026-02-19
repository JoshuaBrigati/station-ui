import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef
} from "react"
import classNames from "classnames/bind"
import styles from "./BaseInput.module.scss"

const cx = classNames.bind(styles)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  actionIcon?: {
    icon: ReactNode
    onClick?: () => void
  }
  emoji?: string
  extra?: ReactNode
  small?: boolean
  widthOverride?: number
  wrapperClassName?: string
}

const Input = forwardRef(
  (
    { actionIcon, emoji, extra, small, widthOverride, wrapperClassName, ...attrs }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={cx(styles.base__input, wrapperClassName, { small })} style={{ width: `${widthOverride}px` }}>
        <input
          className={styles.base__input__field}
          type={attrs.type ?? "text"}
          autoComplete="off"
          autoFocus={attrs.autoFocus ?? false}
          onWheel={(e) => e.currentTarget.blur()}
          {...attrs}
          ref={ref}
        />
        {actionIcon && (
          <button
            type="button"
            className={styles.base__input__action}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              actionIcon?.onClick?.()
            }}
          >
            {actionIcon.icon}
          </button>
        )}

        {emoji && (
          <span className={styles.base__input__emoji}>
            {emoji}
          </span>
        )}

        {extra && !emoji && !actionIcon && (
          <div className={styles.base__input__extra}>
            {extra}
          </div>
        )}
      </div>
    )
  }
)

export default Input
