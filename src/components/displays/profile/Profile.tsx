import { Button } from "components"
import styles from "./Profile.module.scss"

export interface ProfileProps {
  profileImg: string
  profileLabel: string
  profileCoverImg: string
  name: string
  description: string
  socials: React.ReactNode,
  onClickView: () => void,
  onClickEdit: () => void
}

const Profile = ({
  profileImg,
  profileCoverImg,
  profileLabel,
  name,
  description,
  socials,
  onClickEdit,
  onClickView
}: ProfileProps) => {
  return (
    <div className={styles.profile__container}>
      <img
        src={profileCoverImg}
        alt={profileLabel}
        className={styles.profile__cover__img}
      />
      <div className={styles.profile__user}>
        <div className={styles.profile__user__row}>
          <img
            src={profileImg}
            alt={profileLabel}
            className={styles.profile__user__img}
          />
          <div className={styles.profile__user__info}>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <div className={styles.profile__socials__container}>
              {socials}
            </div>
          </div>
        </div>
        <div className={styles.profile__user__actions}>
          <Button variant="secondary" onClick={onClickView}>View Profile</Button>
          <Button variant="secondary" onClick={onClickEdit}>Edit Profile</Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
