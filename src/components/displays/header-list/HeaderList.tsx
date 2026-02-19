import { SectionHeader } from "components"
import styles from "./HeaderList.module.scss"

export interface HeaderListProps {
  color?: string
  title: string
  renderList: Array<React.ReactNode>
}

const HeaderList = ({
  color,
  title,
  renderList
}: HeaderListProps) => {
  return (
    <div className={styles.header__list__container}>
      <SectionHeader
        title={title}
        extraSmallText
        icon={
          color && <div className={styles.header__list__info} style={{ backgroundColor: color }} />
        }
      />
      <div className={styles.header__list__values}>
        {renderList}
      </div>
    </div>
  )
}

export default HeaderList