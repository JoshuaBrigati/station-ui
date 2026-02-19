import { useEffect, useState } from "react"
import styles from "./CountDown.module.scss"

interface CountdownProps {
  targetDate: string // Expected format: "3 July 2023, 18:49:03 UTC"
  backupDataDisplay: string
}

const Countdown = ({ targetDate, backupDataDisplay }: CountdownProps) => {
  const [countdown, setCountdown] = useState<string>("")

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = target - now

      if (distance < 0) {
        setCountdown("Date has passed")
        return true
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        return false
      }
    };

    if(updateCountdown()) {
      return
    }

    const interval = setInterval(() => {
      if(updateCountdown()) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!targetDate) {
    return <div>{backupDataDisplay}</div>
  }

  if (countdown === "Date has passed") {
    return <div>{targetDate}</div>
  }

  return (
    <div className={styles.countdown}>
      Ends in <span>{countdown}</span>
    </div>
  )
}

export default Countdown
