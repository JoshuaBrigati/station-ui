import { Button, MenuDotsIcon, SmallCircleCheckIcon } from "components"
import styles from "./LinkSocial.module.scss"

export interface LinkSocialProps {
  icon: React.ReactNode
  connected: boolean
  title: string
  username?: string
  onVerifyClick?: () => void
}

const LinkSocial = ({
  icon,
  connected,
  title,
  username,
  onVerifyClick
}: LinkSocialProps) => {
  let statusIcon = null

  if (connected) {
    statusIcon = <SmallCircleCheckIcon fill="var(--token-success-500)" />
  }

  return (
    <div className={styles.link__social__li__container}>
      <div className={styles.link__social__li}>
        <div className={styles.link__social__icon__container}>
          {icon}
          {connected && <span className={styles.status__icon}>{statusIcon}</span>}
        </div>
        <div className={styles.link__social__details__container}>
          <h3>{title}</h3>
          <h4>{connected ? username : "Not Connected"}</h4>
        </div>
        <div className={styles.link__social__actions__container}>
          {
            !connected ?
              <Button variant="primary" onClick={onVerifyClick}>Verify</Button> :
              <div className={styles.link__social__actions__icon}>
                <MenuDotsIcon width={4} height={20} fill={"var(--token-dark-900)"} />
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default LinkSocial
