import { SmallCircleCheckIcon } from "components"
import styles from "./Social.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

export interface SocialProps {
  icon: React.ReactNode
  connected: boolean
  username?: string
  title: string
}

const Social = ({
  connected,
  icon,
  title,
  username,
}: SocialProps) => {
  let statusIcon = null

  if (connected) {
    statusIcon = <SmallCircleCheckIcon fill="var(--token-success-500)" />
  }

  return (
    <div className={cx(styles.social__li__container, { notConnected: !connected })}>
      <div className={styles.social__li}>
        <div className={styles.social__icon__container}>
          {icon}
          {connected && <span className={styles.status__icon}>{statusIcon}</span>}
        </div>
        <div className={cx(styles.social__details__container, { connected })}>
          <h3>{title}</h3>
          <h4>{connected ? username : "Not Connected"}</h4>
        </div>
      </div>
    </div>
  )
}

export default Social
