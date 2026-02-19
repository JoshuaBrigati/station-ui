import { ReactNode } from "react"
import classNames from "classnames/bind"
import styles from "./ListItemWrapperCard.module.scss"

const cx = classNames.bind(styles)

const ListItemWrapperCard = ({
  children,
  overflow = "auto",
}: {
  children: ReactNode,
  overflow?: "visible" | "hidden" | "auto"
}) => {
  return <div className={cx(styles.wrapper__card, overflow)}>{children}</div>
}

export default ListItemWrapperCard
