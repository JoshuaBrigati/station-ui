import { Button, Flex, FlexColumn } from "components"
import styles from "./ClaimCredential.module.scss"

export interface ClaimCredentialRowProps {
  title: string
  description: string
}

const ClaimCredentialRow = ({
  title,
  description
}: ClaimCredentialRowProps) => {
  return (
    <Flex justify="space-between" className={styles.claim__credential__row}>
      <h5>{title}</h5>
      <h6>{description}</h6>
    </Flex>
  )
}

export interface ClaimCredentialProps {
  icon: string
  label: string
  type: string
  issuedBy: string
  expirationDate: string
}

const ClaimCredential = ({
  icon,
  label,
  type,
  issuedBy,
  expirationDate
}: ClaimCredentialProps) => {
  return (
    <FlexColumn gap={32} align="center" className={styles.claim__credential__container}>
      <FlexColumn gap={16} align="center">
        <img
          src={icon}
          alt={label}
          className={styles.claim__credential__icon}
        />
        <FlexColumn gap={8}>
          <h3>Review & Claim</h3>
          <h4>Please review the following details and settings before claiming this credential</h4>
        </FlexColumn>
      </FlexColumn>
      <FlexColumn gap={16}>
        <ClaimCredentialRow title="Type" description={type} />
        <ClaimCredentialRow title="Label" description={label} />
        <ClaimCredentialRow title="Issued By" description={issuedBy} />
        <ClaimCredentialRow title="Expires On" description={expirationDate} />
      </FlexColumn>
      <FlexColumn gap={16} align="stretch">
        <Button variant="secondary">View JSON</Button>
        <Button variant="secondary">Ignore Credential</Button>
        <Button variant="primary">Claim Credential</Button>
      </FlexColumn>
    </FlexColumn>
  )
}

export default ClaimCredential
