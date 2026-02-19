import classNames from "classnames/bind"
import styles from "./WalletListItem.module.scss"

const cx = classNames.bind(styles)

export interface WalletListItemProps {
  name: string
  address: string
  emoji: string
  walletBalance?: string
  smallText?: boolean
  onClick?: () => void
}

const WalletListItem = ({
  name,
  address,
  emoji,
  walletBalance,
  smallText,
  onClick,
}: WalletListItemProps) => {
  return (
    <div
      className={cx(styles.wallet__li, {
        [styles.small]: smallText,
        [styles.clickable]: onClick,
      })}
      onClick={onClick}
    >
      <div className={styles.wallet__emoji}>
        {emoji}
      </div>
      <div className={styles.wallet__details}>
        <h3 className={styles.wallet__name}>
          {name}
        </h3>
        <div className={styles.bottom__line}>
          <h5 className={styles.wallet__address}>
            {address}
          </h5>

          {walletBalance && (
            <h4 className={styles.wallet__balance}>
              {walletBalance}
            </h4>
          )}
        </div>
      </div>
    </div>
  )
}

export default WalletListItem
