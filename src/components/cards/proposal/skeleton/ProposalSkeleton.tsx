import classNames from "classnames/bind"
import styles from "./ProposalSkeleton.module.scss"
import skeletonStyles from "scss/skeleton__animation.module.scss"

const cx = classNames.bind(styles)

const ProposalSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.meta__row}>
        <div className={cx(styles.meta__image, skeletonStyles.animation)} />
        <div className={cx(styles.meta__title, skeletonStyles.animation)} />
      </div>
      <div className={styles.proposal__header__container}>
        <div className={cx(styles.proposal__header__line, skeletonStyles.animation)} />
        <div className={cx(styles.proposal__header__line, skeletonStyles.animation)} />
        <div className={cx(styles.proposal__header__line, skeletonStyles.animation)} />
      </div>
      <div className={styles.details__container}>
        <div className={cx(styles.pill, skeletonStyles.animation)} />
        <div className={cx(styles.date, skeletonStyles.animation)} />
      </div>
      <div className={cx(styles.progressbar, skeletonStyles.animation)} />
    </div>
  )
}

export default ProposalSkeleton
