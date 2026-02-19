import styles from "./NftHeaderCard.module.scss"
import { Flex, FlexColumn, WalletIcon } from "components"

export interface NftHeaderCardProps {
  address: string
  collectionImg: string
  collectionName: string
}

const NftHeaderCard = ({
  address,
  collectionImg,
  collectionName
}: NftHeaderCardProps) => {
  return (
    <Flex gap={24} className={styles.nft__header__container}>
      <FlexColumn gap={12} align="flex-start" className={styles.first}>
        <h4>Owner</h4>
        <Flex start gap={8}>
          <WalletIcon width={14} height={14} fill="var(--token-dark-900)" />
          <h3>{address}</h3>
        </Flex>
      </FlexColumn>
      <span className={styles.dashed__line} />
      <Flex gap={16} className={styles.second}>
        <img src={collectionImg} alt={collectionName} className={styles.collection__image} />
        <FlexColumn align="flex-start" gap={12}>
          <h4>Collection</h4>
          <h3>{collectionName}</h3>
        </FlexColumn>
      </Flex>
    </Flex>
  )
}

export default NftHeaderCard