import classNames from "classnames/bind"
import { FlexColumn, Pill } from "components"
import { ChainImage } from "components/displays/list-items/token/utils"
import Countdown from "components/cards/proposal/count-down/CountDown"
import styles from "./ProposalHeader.module.scss"

const cx = classNames.bind(styles)

export interface ProposalHeaderProps {
  status: "Voting" | "Deposit" | "Rejected" | "Passed"
  title: string
  metaText: string
  metaImage: string
  submittedDate: string
  endsDate?: string
  voteValue?: "Yes" | "No" | "Abstain" | "No (Veto)"
  isProposalPage?: boolean
}

const ProposalHeader = ({
  status,
  title,
  metaText,
  metaImage,
  submittedDate,
  endsDate,
  voteValue,
  isProposalPage,
}: ProposalHeaderProps) => {
  const statusPill =
    status === "Voting" || status === "Deposit"
      ? <Pill text={`${status} Proposal`} variant="secondary" />
      : status === "Rejected"
        ? <Pill text={status} variant="danger" />
        : <Pill text={status} variant="success" />

  return (
    <FlexColumn
      className={cx(
        styles.proposal__header__container,
        {
          [styles.has__voted]: voteValue,
          [styles.proposal__page]: isProposalPage,
        }
      )}
      gap={16}
      align={"flex-start"}
    >
      <div className={styles.meta__container}>
        <ChainImage
          chainImg={metaImage}
          chainName={metaText}
          className={styles.meta__icon}
          xSmall={!isProposalPage}
          small={isProposalPage}
        />
        <h6 className={styles.meta__text}>{metaText}</h6>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.submit__container}>
        {statusPill}
        <h6 className={styles.submitted__date}>
          {isProposalPage ? (
            `Submitted ${submittedDate}`
          ) : (
            <Countdown targetDate={endsDate || ""} backupDataDisplay={submittedDate} />
          )}
        </h6>
        {/* <h6 className={styles.submitted__date}>Submitted {submittedDate}</h6> */}
        {/* {voteValue && (
          <div className={styles.voted__status__container}>
            <div className={styles.voted__display}>
              <SmallCircleCheckIcon
                className={styles.voted__icon}
                height={10}
                width={10}
                fill="var(--token-light-white)"
              />
              <h6 className={styles.voted__text}>Voted</h6>
            </div>
            <h6
              className={cx(
                styles.vote__value,
                { [styles.yes]: voteValue === "Yes" },
                { [styles.no]: voteValue === "No" },
                { [styles.abstain]: voteValue === "Abstain" },
                { [styles.no__with__veto]: voteValue === "No (Veto)" },
              )}
            >{voteValue}</h6>
          </div>
        )} */}
      </div>
    </FlexColumn>
  )
}

export default ProposalHeader
