import classNames from "classnames/bind"
import { DropdownArrowIcon, Flex, Pill, Tooltip, TrendDownIcon, TrendUpIcon } from "components"
import styles from "./AssetListItem.module.scss"
import { formatNumber } from "utils/format"

const cx = classNames.bind(styles)

export interface AssetListItemProps {
  currencySymbol: string
  firstColumn: {
    symbol: string
    symbolIcon: string
    chainName?: string
    chainIcon?: string
    chainAmount?: string
    positionAmount?: string
    unsupported?: boolean
  }
  secondColumn: {
    currentPrice: number | string
    label: string
  }
  thirdColumn: {
    label: string
    percentage: number | undefined
  }
  fourthColumn: {
    symbol: string
    currencyAmount: number | string
    tokenAmount: number | string
  }
  subItem?: boolean
  isExpanded?: boolean
  onClick?: () => void
}

const AssetListItem = ({
  currencySymbol,
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  subItem,
  isExpanded,
  onClick
}: AssetListItemProps) => {

  const FirstColumn = () => {
    const { symbol, symbolIcon, chainName, chainIcon, chainAmount, positionAmount, unsupported } = firstColumn

    return (
      <div className={styles.first__column}>
        <div className={styles.first__container}>
          <img src={symbolIcon} alt={symbol} />
          <div className={styles.text}>
            {chainAmount ? (
              <>
                <div className={styles.title__wrapper}>
                  <h3 className={styles.title}>{symbol}</h3>
                  <Pill variant="secondary" text={chainAmount ?? ""} small />
                  <DropdownArrowIcon fill={"var(--token-light-500)"} style={{ rotate: `${isExpanded ? "180deg" : "0deg"}` }} />
                  {unsupported && (
                  <Tooltip placement="top" content="Use the Station Wallet extension to send this asset back to a supported chain">
                    <Pill variant="warning" text="Unsupported" small />
                  </Tooltip>
                  )}
                </div>
                <div className={styles.chain__wrapper}>
                  <h5>{chainAmount} chains {positionAmount ? `/ ${positionAmount} positions` : ""}</h5>
                </div>
              </>
            ) : (
              <>
                <h3 className={styles.title}>{symbol}</h3>
                <div className={styles.chain__wrapper}>
                <img src={chainIcon} alt={chainName} />
                  <h5>{chainName}</h5>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  const SecondColumn = () => {
    const { currentPrice, label } = secondColumn
    return (
      <div className={styles.second__column}>
        <div className={styles.second__container}>
          <div className={styles.text}>
            <h3>
              {currencySymbol}{formatNumber(currentPrice)}
            </h3>
            <h5>
              {label}
            </h5>
          </div>
        </div>
      </div>
    )
  }

  const ThirdColumn = () => {
    const { percentage, label } = thirdColumn

    let trendSymbol = null
    let icon = <TrendDownIcon fill={"var(--token-error-500)"} />

    if (percentage && percentage > 0) {
      trendSymbol = "+"
      icon = <TrendUpIcon fill={"var(--token-success-500"} />
    }

    return (
      <div className={styles.third__column}>
        <div className={styles.third__container}>
          <div className={cx(styles.text, { [styles.hide__content]: !percentage })}>
            <Flex gap={8} justify={"flex-start"}>
              {icon}
              <h3 className={cx({ [styles.positive]: percentage && percentage > 0 })}>
                {trendSymbol}{percentage?.toFixed(2)}%
              </h3>
            </Flex>
            <h5>{label}</h5>
          </div>
        </div>
      </div>
    )
  }

  const FourthColumn = () => {
    const {
      symbol,
      currencyAmount,
      tokenAmount
    } = fourthColumn

    return (
      <div className={styles.fourth__column}>
        <div className={styles.fourth__container}>
          <div className={styles.text}>
            <h3 className={styles.regular}>
              {currencySymbol}{formatNumber(currencyAmount)}
            </h3>
            <h5>
              {formatNumber(tokenAmount)} {symbol}
            </h5>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cx(styles.asset__li__container, { [styles.is__sub__item]: subItem, [styles.on__click]: onClick })}
      onClick={onClick}
    >
      <FirstColumn />
      <SecondColumn />
      <ThirdColumn />
      <FourthColumn />
    </div>
  )
}

export default AssetListItem
