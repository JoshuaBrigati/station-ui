import { PropsWithChildren, ReactNode, useEffect, useState } from "react"
import ReactModal from "react-modal"
import classNames from "classnames/bind"
import CloseIcon from "@mui/icons-material/Close"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { getMaxHeightStyle } from "utils/style"
import skeletonStyles from "scss/skeleton__animation.module.scss"
import styles from "./Modal.module.scss"

const cx = classNames.bind(styles)

export interface ModalProps extends ReactModal.Props {
  /* content */
  title?: ReactNode
  centerTitle?: boolean
  subtitle?: ReactNode
  footer?: (close: ReactModal.Props["onRequestClose"]) => ReactNode

  /* style */
  confirm?: boolean
  minimal?: boolean
  maxHeight?: boolean | number
  borderRadius?: boolean
  smallBottom?: boolean

  closeIcon?: ReactNode
  icon?: ReactNode
  rootID?: string
  backAction?: () => void
  hideCloseButton?: boolean
  loading?: boolean
  classOverride?: string | ReactModal.Classes | undefined
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { title, subtitle, children, footer, rootID = "station" } = props
  const {
    centerTitle,
    icon,
    closeIcon,
    onRequestClose,
    confirm,
    maxHeight,
    minimal,
    backAction,
    hideCloseButton,
    loading,
    borderRadius,
    smallBottom,
    classOverride,
  } = props

  const [forceExtension, setForceExtension] = useState(false)

  useEffect(() => {
    const forceExists = document.getElementById('force__extension')
    setForceExtension(!!forceExists)
  }, [])

  return (
    <ReactModal
      {...props}
      className={cx(
        styles.modal,
        classOverride,
        {
          minimal,
          ['border__radius']: borderRadius,
          ['force__extension']: forceExtension,
          ["small__bottom"]: smallBottom,
        }
      )}
      overlayClassName={cx(styles.overlay, { ["small__bottom__overlay"]: smallBottom })}
      appElement={document.getElementById(rootID)!}
    >
      {(title || icon) && (
        <div className={styles.header__container}>
          {backAction && (
            <button className={styles.back__button} onClick={backAction}>
              <KeyboardBackspaceIcon fontSize="inherit" />
            </button>
          )}
          <header className={styles.header}>
            <section className={styles.icon}>{icon}</section>
            <h1 className={cx(styles.title, { confirm, [styles.center__title]: centerTitle })}>{title}</h1>
            <h3 className={cx(styles.subtitle)}>
              {subtitle}
            </h3>
          </header>
          {onRequestClose && !minimal && !hideCloseButton && (
            <button type="button" className={styles.close} onClick={onRequestClose}>
              {closeIcon ?? <CloseIcon fontSize="inherit" />}
            </button>
          )}
        </div>
      )}

      {loading ? (
        <div className={styles.loading}>
          <div className={cx(styles.line__1, skeletonStyles.animation)} />
          <div className={cx(styles.line__2, skeletonStyles.animation)} />
        </div>
      ) : children && (
        <section
          className={styles.main}
          style={getMaxHeightStyle(maxHeight, 320)}
        >
          {children}
        </section>
      )}

      {footer && (
        <footer className={styles.footer}>{footer(onRequestClose)}</footer>
      )}
    </ReactModal>
  )
}

export default Modal
