import classNames from "classnames/bind"
import { ProgressBar, ProposalHeader, ProposalHeaderProps, ProgressBarData, SmallCircleCheckIcon } from "components"
import styles from "./ProposalCard.module.scss"

const cx = classNames.bind(styles)

export interface ProposalCardProps extends React.HTMLAttributes<HTMLDivElement>  {
  className?: string
  proposal: ProposalHeaderProps
  progressData: ProgressBarData[]
  threshold: number
  progressLabelOverride?: string
}

const ProposalCard = ({
  className,
  proposal,
  progressData,
  threshold,
  progressLabelOverride,
}: ProposalCardProps) => {
  return (
    <div className={cx(styles.proposal__card__container, className)}>
      {proposal.voteValue && (
        <div className={styles.user__voted}>
          <svg className={styles.bg} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 0H40C44.4183 0 48 3.58172 48 8V48L0 0Z" fill="#212227"/>
          </svg>
          <SmallCircleCheckIcon className={styles.check} fill="var(--token-light-100)" width={12} height={12} />
        </div>
      )}
      <ProposalHeader
        status={proposal.status}
        metaText={proposal.metaText}
        metaImage={proposal.metaImage}
        title={proposal.title}
        submittedDate={proposal.submittedDate}
        endsDate={proposal.endsDate}
        voteValue={proposal.voteValue}
      />
      <div className={styles.progressbar__wrapper}>
        <ProgressBar
          data={progressData}
          threshold={threshold}
          isSmall
          labelOverride={progressLabelOverride}
        />
      </div>
    </div>
  )
}

export default ProposalCard
