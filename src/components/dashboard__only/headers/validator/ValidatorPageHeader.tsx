
import { Button, Flex, SmallCircleCheckIcon } from 'components'
import styles from "./ValidatorPageHeader.module.scss"

export interface ValidatorPageHeaderProps {
  validatorBackground?: string
  validatorIcon: string
  validatorName: string
  validatorURL: string
  validatorDescription: string
  shareOnClick: () => void
  stakeOnClick: () => void
  isVerified?: boolean
}

const ValidatorPageHeader = ({
  validatorBackground,
  validatorIcon,
  validatorName,
  validatorURL,
  validatorDescription,
  shareOnClick,
  stakeOnClick,
  isVerified = false
}: ValidatorPageHeaderProps) => {

  return (
    <div className={styles.validator__page__header}>
      <div className={styles.background__image}>
        {validatorBackground ? (
          <img src={validatorBackground} />
        ) : (
          <div className={styles.default__background} />
        )}
      </div>

      <div className={styles.details}>
        <img src={validatorIcon} />
        <div className={styles.top__row}>
          <div className={styles.title__container}>
            <Flex gap={8}>
              <h2>{validatorName}</h2>
              {isVerified && <SmallCircleCheckIcon fill="var(--token-success-500)" />}
            </Flex>
            <a className={styles.validator__link}>
              {validatorURL}
            </a>
          </div>

          <div className={styles.buttons__wrapper}>
            <Button variant="secondary" onClick={shareOnClick} dashboardSmall>Share</Button>
            <Button variant="primary" onClick={stakeOnClick} dashboardSmall>Stake</Button>
          </div>
        </div>

        <p>{validatorDescription}</p>
      </div>
    </div>
  )
}

export default ValidatorPageHeader
