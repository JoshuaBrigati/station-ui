import classNames from "classnames/bind"
import ProgressBar, { ProgressBarData } from "../progress-bar/ProgressBar"
import styles from "./VotingSummary.module.scss"
import React from "react"

const cx = classNames.bind(styles)

export type VotingSummaryProps = {
  data: ProgressBarData[]
  threshold: number
  labelOverride?: string
  voterTurnoutNode?: React.ReactNode
}

const VotingSummary = ({ data, threshold, labelOverride, voterTurnoutNode }: VotingSummaryProps) => {
  const getCategory = (type: string) => {
    return type === "noWithVeto" ? "No (Veto)" : type
  }

  return (
    <div className={styles.voting__summary__container}>
      <div className={styles.progress__bar__container}>
        <ProgressBar
          data={data}
          threshold={threshold}
          labelOverride={labelOverride}
        />
        {voterTurnoutNode}
      </div>

      <div className={styles.vote__details}>
        {data.map((item, index) => (
          <div className={styles.vote} key={index}>
            <h3 className={cx(styles.type, item.type)}>{getCategory(item.type)}</h3>
            <h6 className={styles.percent}>{item.percent}</h6>
            <p className={styles.amount}>{item.amount}</p>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VotingSummary
