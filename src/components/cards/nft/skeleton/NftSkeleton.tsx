import classNames from "classnames/bind"
import styles from "./NftSkeleton.module.scss"
import skeletonStyles from "scss/skeleton__animation.module.scss"

const cx = classNames.bind(styles)

const NftSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={cx(styles.image, skeletonStyles.animation)} />

      <div className={styles.column}>
        <div className={cx(styles.top, skeletonStyles.animation)} />
        <div className={styles.row}>
          <div className={cx(styles.bottom, skeletonStyles.animation)} />
          <div className={cx(styles.bottom, skeletonStyles.animation)} />
        </div>
      </div>
    </div>
  )
}

export default NftSkeleton
