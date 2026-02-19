import { useEffect, useState } from "react"
import classNames from "classnames/bind"
import { LoadingCircular } from "components"
import DefaultChainIcon from "assets/icon/DefaultChain.svg"
import styles from "./utils.module.scss"

const cx = classNames.bind(styles)

const nftImageCache = new Map()

interface NftImageProps {
  nftImage: string
  nftName: string
  className?: string
}

export const NftImage = ({ nftImage, nftName, className }: NftImageProps) => {
  const [isLoading, setIsLoading] = useState(!nftImageCache.get(nftImage))
  const [displayTokenImg, setDisplayTokenImg] = useState(nftImage)

  useEffect(() => {
    if (nftImageCache.get(nftImage)) {
      setIsLoading(false)
    }
  }, [nftImage])

  const handleTokenImgError = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    setDisplayTokenImg(DefaultChainIcon)
    nftImageCache.set(nftImage, false)
  }

  const handleLoad = () => {
    setIsLoading(false)
    nftImageCache.set(nftImage, true)
  }

  return (
    <div className={styles.image__wrapper}>
      {isLoading && (
        <LoadingCircular size={24} className={className} />
      )}
      <img
        className={cx(className, { [styles.loaded]: !isLoading })}
        src={displayTokenImg}
        alt={nftName}
        onError={handleTokenImgError}
        onLoad={handleLoad}
      />
    </div>
  )
}
