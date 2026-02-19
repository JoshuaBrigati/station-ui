import { TokenImage } from "components/displays/list-items/token/utils"
import styles from "./NftSaleCard.module.scss"
import { Button, Flex, FlexColumn } from "components"
import Countdown from "./countdown/Countdown"

export interface NftSaleCardProps {
  collectionPrice: number
  currentPrice: number
  currencySymbol?: string
  saleEndDate: Date
  tokenImg: string
  tokenName: string
  onBuyNowClick: () => void
  onMakeOfferClick: () => void
  onSaleFinished: () => void
}

const NftSaleCard = ({
  collectionPrice,
  currencySymbol,
  currentPrice,
  saleEndDate,
  tokenImg,
  tokenName,
  onBuyNowClick,
  onMakeOfferClick,
  onSaleFinished
}: NftSaleCardProps) => {

  const FirstSection = () => {
    return (
      <Flex gap={24} className={styles.first}>
        <FlexColumn gap={12} align="flex-start">
          <h5>Collection Floor Price</h5>
          <Flex start gap={8}>
            <TokenImage
              medium
              tokenImg={tokenImg}
              tokenName={tokenName}
              className={styles.info__icon}
            />
            <h3>{currencySymbol}{collectionPrice.toFixed(2)}</h3>
          </Flex>
        </FlexColumn>
        <span className={styles.dashed__line} />
        <FlexColumn gap={12} align="flex-start">
          <h5>Sale End Time</h5>
          <Countdown
            className={styles.countdown}
            onSaleFinished={onSaleFinished}
            endDate={saleEndDate}
          />
        </FlexColumn>
        <span className={styles.dashed__line} />
        <FlexColumn gap={12} align="flex-start">
          <h5>Current Price</h5>
          <Flex start gap={8}>
            <TokenImage
              medium
              tokenImg={tokenImg}
              tokenName={tokenName}
              className={styles.info__icon}
            />
            <h3>{currencySymbol}{currentPrice.toFixed(2)}</h3>
          </Flex>
        </FlexColumn>
      </Flex>
    )
  }

  const SecondSection = () => {
    return (
      <div className={styles.nft__options__container}>
        <Flex gap={24} className={styles.second}>
          <Button variant="secondary" onClick={onMakeOfferClick}>
            Make Offer
          </Button>
          <Button variant="primary" onClick={onBuyNowClick}>
            Buy Now
          </Button>
        </Flex>
      </div>
    )
  }

  return (
    <div className={styles.nft__sale__container}>
      <FirstSection />
      <SecondSection />
    </div>
  )
}

export default NftSaleCard