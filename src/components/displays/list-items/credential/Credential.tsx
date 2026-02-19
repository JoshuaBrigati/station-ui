import { ReactNode } from "react"
import { Button, Flex, MenuDotsIcon, SmallCircleCheckIcon } from "components"
import Pill from "components/general/pill/Pill"
import styles from "./Credential.module.scss"
import { ChainImage } from "../token/utils"

export interface CredentialProps {
  chain: { icon: string, label: string }
  type: string
  readOnly?: boolean
  claimed: boolean
  description?: string
  additionalDescription?: string
  title?: string
  secondaryPill?: ReactNode,
  onRejectClick?: () => void,
  onClaimClick?: () => void
}

const Credential = ({
  claimed,
  readOnly,
  chain,
  additionalDescription,
  description,
  type,
  title,
  secondaryPill,
  onClaimClick,
  onRejectClick
}: CredentialProps) => {
  let statusIcon = null
  let actionMenu = null

  if (claimed) {
    statusIcon = <SmallCircleCheckIcon fill="var(--token-success-500)" />
  }

  if (!readOnly) {
    actionMenu = claimed ? (
      <Flex className={styles.credential__actions__icon} align="center" justify="flex-end">
        <MenuDotsIcon width={4} height={20} fill={"var(--token-dark-900)"} />
      </Flex>
    ) : (
      <Flex gap={16} className={styles.credential__actions__container}>
        <Button variant="secondary" onClick={onRejectClick}>Reject</Button>
        <Button variant="primary" onClick={onClaimClick}>Claim</Button>
      </Flex>
    )
  }

  return (
    <div className={styles.credential__li__container}>
      <div className={styles.credential__li}>
        <div className={styles.credential__icon__container}>
          <ChainImage
            chainImg={chain.icon}
            chainName={chain.label}
            className={styles.credential__icon}
          />
          {claimed && <span className={styles.status__icon}>{statusIcon}</span>}
        </div>
        <div className={styles.credential__details__container}>
          <div className={styles.pill__container}>
            <h3>{title}</h3>
            <Pill
              variant={"secondary"}
              text={type}
            />
            {secondaryPill}
          </div>
          <h4 className={styles.credential__msg}>{description}</h4>
        </div>
        {actionMenu}
      </div>
      {
        additionalDescription && <h4 className={styles.credential__desc}>{additionalDescription}</h4>
      }
    </div>
  )
}

export default Credential
