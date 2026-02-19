import classNames from "classnames/bind"
import { WalletIcon } from "assets"
import { Button } from "components"
import styles from "./StakeListItem.module.scss"

const cx = classNames.bind(styles)

export interface StakeListItemProps {
  variant: "default" | "staked" | "unstaked"
  currencySymbol: string
  firstColumn: {
    symbol: string
    symbolIcon: string
    chainName: string
    chainIcon: string
  }
  secondColumn: {
    tokenAmount: number
    tokenSymbol: string
    currencyAmount: number
  }
  thirdColumn: {
    isAlliance: boolean
  }
  fourthColumn: {
    variant: "default" | "staked" | "unstaking"
    defaultUnstakeDays?: number
    claimableCurrencyAmount?: number
    unstakingTimer?: string
    forceGreenText?: boolean
    onClick?: () => void
  }
  fifthColumn: {
    variant: "default" | "staked" | "unstaked"
    defaultAPR?: number
    stakedDetails?: {
      validatorName: string
      validatorCommission: number
    }
    unstakedDetails?: {
      validatorName: string
      validatorCommission: number
    }
  }
  sixthColumn: {
    variant: "default" | "staked" | "unstaked"
    manageOnClick?: () => void
    newStakeOnClick?: () => void
    buttonDisabled?: boolean
  }
}

const StakeListItem = ({
  variant,
  currencySymbol,
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  fifthColumn,
  sixthColumn,
}: StakeListItemProps) => {
  const parseAmount = (
    amount: number,
    symbol: string = "",
    isCurrency = false
  ) => {
    if (typeof amount !== "number" || isNaN(amount) || amount < 0)
      return "Invalid amount"
    if (amount === 0) return "—"
    const roundedAmount = Math.round(amount * 100) / 100
    if (isCurrency) {
      return roundedAmount < 0.01
        ? `< ${symbol} 0.01`
        : `${symbol} ${roundedAmount.toFixed(2)}`
    } else {
      return roundedAmount < 0.01
        ? `< 0.01 ${symbol} `
        : `${roundedAmount.toFixed(2)} ${symbol} `
    }
  }

  const FirstColumn = () => {
    const { symbol, symbolIcon, chainName, chainIcon } = firstColumn
    return (
      <div className={styles.first__column}>
        <div className={styles.first__container}>
          <img src={symbolIcon} alt={symbol} />
          <div className={styles.text}>
            <h3 className={styles.title}>{symbol}</h3>
            <div className={styles.chain__wrapper}>
              <img src={chainIcon} alt={chainName} />
              <h5>{chainName}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SecondColumn = () => {
    const { tokenAmount, tokenSymbol, currencyAmount } = secondColumn
    return (
      <div className={styles.second__column}>
        <div className={styles.second__container}>
          <div className={styles.text}>
            <h3 className={cx({ [styles.regular]: currencyAmount > 0 })}>
              {parseAmount(currencyAmount, currencySymbol, true)}
            </h3>
            <div className={styles.amount__wrapper}>
              {variant === "default" ? (
                <>
                  <WalletIcon
                    height={14}
                    width={14}
                    fill="var(--token-dark-900)"
                  />
                  <h5>{parseAmount(tokenAmount)}</h5>
                </>
              ) : (
                <h5>{parseAmount(tokenAmount, tokenSymbol)}</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ThirdColumn = () => {
    const { isAlliance } = thirdColumn
    return (
      <div className={styles.third__column}>
        {isAlliance && (
          <div className={styles.third__container}>
            <div className={styles.text}>
              <h3>🤝 Alliance</h3>
              <h5>Enabled</h5>
            </div>
          </div>
        )}
      </div>
    )
  }

  const FourthColumn = () => {
    const {
      variant,
      defaultUnstakeDays,
      claimableCurrencyAmount = 0,
      unstakingTimer,
      forceGreenText = false,
      onClick,
    } = fourthColumn

    return (
      <div className={cx(styles.fourth__column, variant)}>
        <div
          onClick={onClick}
          className={cx(styles.fourth__container, {
            [styles.on__click]: !!onClick,
          })}
        >
          <div className={styles.text}>
            {variant === "default" && (
              <>
                <h3
                  className={cx(styles.regular, {
                    [styles.green]: forceGreenText,
                  })}
                >
                  {defaultUnstakeDays}
                </h3>
                <h5>To Unstake</h5>
              </>
            )}
            {variant === "staked" && (
              <>
                <h3
                  className={cx(styles.regular, {
                    [styles.green]:
                      claimableCurrencyAmount > 0 || forceGreenText,
                  })}
                >
                  {parseAmount(claimableCurrencyAmount, currencySymbol, true)}
                </h3>
                <h5>Claimable</h5>
              </>
            )}
            {variant === "unstaking" && (
              <>
                <h3
                  className={cx(styles.regular, {
                    [styles.green]: forceGreenText,
                  })}
                >
                  {unstakingTimer}
                </h3>
                <h5>To Unstake</h5>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  const FifthColumn = () => {
    const { variant, defaultAPR, stakedDetails, unstakedDetails } = fifthColumn

    return (
      <div className={cx(styles.fifth__column, variant)}>
        <div className={styles.fifth__container}>
          <div className={styles.text}>
            {variant === "default" && (
              <>
                <h3>{defaultAPR}%</h3>
                <h5>APR</h5>
              </>
            )}
            {variant === "staked" && (
              <>
                <h3>{stakedDetails?.validatorName}</h3>
                <h5>{stakedDetails?.validatorCommission}% Commission</h5>
              </>
            )}
            {variant === "unstaked" && (
              <>
                <h3>{unstakedDetails?.validatorName}</h3>
                <h5>{unstakedDetails?.validatorCommission}% Commission</h5>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  const SixthColumn = () => {
    const { variant, manageOnClick, newStakeOnClick, buttonDisabled } =
      sixthColumn

    return (
      <div className={styles.sixth__column}>
        <div className={styles.sixth__container}>
          {variant === "default" && (
            <Button
              className={styles.button__override}
              variant="primary"
              onClick={newStakeOnClick}
              disabled={buttonDisabled}
            >
              Stake
            </Button>
          )}
          {variant === "staked" && (
            <Button
              className={cx(styles.button__override, styles.outlined)}
              variant="outlined"
              onClick={manageOnClick}
              disabled={buttonDisabled}
            >
              Manage
            </Button>
          )}
          {variant === "unstaked" && <></>}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.stake__li__container}>
      <FirstColumn />
      <SecondColumn />
      <ThirdColumn />
      <FourthColumn />
      <FifthColumn />
      <SixthColumn />
    </div>
  )
}

export default StakeListItem
