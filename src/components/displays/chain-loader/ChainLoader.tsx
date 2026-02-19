import styles from "./ChainLoader.module.scss"

export interface ChainLoaderProps {
  count: number
  total: number
  textLabel?: string
}

const ChainLoader = ({
  count,
  total,
  textLabel = "Chains Loading"
}: ChainLoaderProps) => {
  return (
    <div className={styles.chain__loader__container}>
      <div className={styles.chain__loader__bg} />
      <div
        className={styles.chain__loader__bar}
        style={{
          width: `${(count / total) * 100}%`,
        }}
      />
      <h6 className={styles.text}>
        {count}/{total} {textLabel}
      </h6>
    </div>
  )
}

export default ChainLoader
