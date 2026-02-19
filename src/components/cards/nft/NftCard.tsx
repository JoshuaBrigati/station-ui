import styles from "./NftCard.module.scss"
import { Flex, FlexColumn } from "components"
import { ChainImage, TokenImage } from "components/displays/list-items/token/utils"
import { NftImage } from "./utils"

export interface NftCardProps {
  chainImg: string
  chainName: string
  currencySymbol?: string
  nftImage: string
  nftImageLabel: string
  nftName: string
  tokenImg: string
  tokenName: string
  tokenValue: number
}

const NftCard = ({
  chainImg,
  chainName,
  nftImage,
  nftImageLabel,
  nftName,
  tokenImg,
  tokenName,
  currencySymbol: tokenSymbol,
  tokenValue,
}: NftCardProps) => {
  return (
    <div className={styles.nft__container}>
      <NftImage
        nftImage={nftImage}
        nftName={nftImageLabel}
        className={styles.nft__container__image}
      />
      <FlexColumn gap={16} align="flex-start" className={styles.nft__container__info}>
        <h3>{nftName}</h3>
        <Flex justify="space-between">
          <Flex gap={8} justify="flex-start">
            <ChainImage
              small
              chainImg={chainImg}
              chainName={chainName}
              className={styles.info__icon}
            />
            <h5>{chainName}</h5>
          </Flex>
          <Flex gap={8} justify="flex-end">
            <TokenImage
              small
              tokenImg={tokenImg}
              tokenName={tokenName}
              className={styles.info__icon}
            />
            <h5>{tokenSymbol}{tokenValue.toFixed(2)}</h5>
          </Flex>
        </Flex>
      </FlexColumn>
    </div>
  )
}

export default NftCard