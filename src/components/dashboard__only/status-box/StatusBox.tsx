import classNames from "classnames/bind"
import { ClaimableAssetsSVG, StakedAssetsSVG, TotalAssetsSVG } from "assets"
import styles from "./StatusBox.module.scss"

const cx = classNames.bind(styles)

export interface StatusBoxProps {
  label: string
  amount: number | string
  variant: "assets" | "staked" | "claimable"
  color?: boolean
  symbol: string
}

const StatusBox = ({
  label,
  amount,
  variant,
  color,
  symbol
}: StatusBoxProps) => {
  const Svg = variant === "assets" ?
    TotalAssetsSVG : variant === "staked" ?
      StakedAssetsSVG : ClaimableAssetsSVG

  return (
    <div className={styles.box}>
      <div className={styles.text__container}>
        <div className={styles.title}>{label}</div>
        <div className={cx(styles.amount, {[styles.positive]: color && Number(amount) > 0 })}>
          {symbol}{amount}
        </div>
      </div>
      <Svg className={styles.backdrop} />
    </div>
  )
}

export default StatusBox
