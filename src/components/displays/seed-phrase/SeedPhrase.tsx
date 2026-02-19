import styles from "./SeedPhrase.module.scss"

type SeedPhrasePillProps = {
  value: string
  index: number
}

const SeedPhrasePill = (props: SeedPhrasePillProps) => {
  return (
    <div className={styles.seedphrase__pill}>
      <span className={styles.seedphrase__pill__index}>{props.index}</span>
      <span className={styles.seedphrase__pill__value}>{props.value}</span>
    </div>
  )
}

export type SeedPhraseProps = {
  seedphrase: string[]
}

const SeedPhrase = (props: SeedPhraseProps) => {
  return (
    <div className={styles.seedphrase}>
      {
        props.seedphrase.map((value, index) => <SeedPhrasePill key={index} index={index + 1} value={value} />)
      }
    </div>
  )
}

export default SeedPhrase