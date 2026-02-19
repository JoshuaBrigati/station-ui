
import { useState } from 'react'
import classNames from 'classnames'
import { FlexColumn } from 'components'
import AssetListItem, { AssetListItemProps } from "./AssetListItem"
import styles from "./ExpandableAssetListItem.module.scss"

const cx = classNames.bind(styles)

export interface ExpandableAssetListItemProps {
  mainItem:  AssetListItemProps
  subItems:  AssetListItemProps[]
}

const ExpandableAssetListItem = ({
  mainItem,
  subItems,
}: ExpandableAssetListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={cx(styles.expandable__container, { [styles.expanded]: isExpanded })}>
      <AssetListItem {...mainItem} isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
      <div className={styles.sub__container}>
        <span className={styles.line} />
        <FlexColumn gap={24} className={styles.items__wrapper} justify="flex-start">
          {subItems.map((item, index) => (
            <AssetListItem key={index} {...item} subItem />
          ))}
        </FlexColumn>
      </div>
    </div>
  )
}

export default ExpandableAssetListItem
