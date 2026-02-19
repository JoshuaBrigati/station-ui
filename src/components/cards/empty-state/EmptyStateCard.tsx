import { FlexColumn } from "components"
import { ReactComponent as CircleCheck } from "assets/icon/SmallCircleCheck.svg"
import { ReactComponent as AlertIcon } from "assets/icon/Alert.svg"
import styles from "./EmptyStateCard.module.scss"

export interface EmptyStateCardProps {
  message: string
  status?: "alert" | "success" | "warning"
}

const EmptyStateCard = ({
  message,
  status = "warning",
}: EmptyStateCardProps) => {
  let statusColor = "var(--token-error-500)"
  if (status === "success") {
    statusColor = "var(--token-success-500)"
  } else if (status === "warning") {
    statusColor = "var(--token-warning-500)"
  }

  const parts = message.split("`")

  return (
    <FlexColumn className={styles.empty__state__card} gap={16}>
      {status === "alert" || status === "warning" ? (
        <AlertIcon fill={statusColor} />
      ) : (
        <CircleCheck fill="var(--token-success-500)" />
      )}
      <h6 className={styles.description}>
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return <span key={index}>{part}</span>
          }
          return part
        })}
      </h6>
    </FlexColumn>
  )
}

export default EmptyStateCard
