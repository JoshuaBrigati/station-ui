import { ReactComponent as RightArrow } from "assets/icon/RightArrow.svg"
import styles from "./ValidatorButton.module.scss"
import { useState } from "react"
import DefaultTokenIcon from "assets/icon/DefaultToken.svg"

export interface ValidatorButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  validatorLabel: string
  validatorSubLabel: string
  imgSrc: string
  onClick?: () => void
}

const ValidatorButton = ({
  validatorLabel,
  validatorSubLabel,
  imgSrc,
  onClick,
  ...attrs
}: ValidatorButtonProps) => {
  const [displayTokenImg, setDisplayTokenImg] = useState(imgSrc)

  const handleImgError = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setDisplayTokenImg(DefaultTokenIcon)
  }

  return (
    <button {...attrs} onClick={onClick} className={styles.validator__button}>
      <div className={styles.left__container}>
        <img
          src={displayTokenImg}
          width={32}
          height={32}
          alt={validatorLabel}
          onError={handleImgError}
        />
        <div className={styles.content__container}>
          <div className={styles.label}>{validatorLabel}</div>
          <div className={styles.sub__label}>{validatorSubLabel}</div>
        </div>
      </div>
      <RightArrow fill="var(--token-light-white)" />
    </button>
  )
}

export default ValidatorButton
