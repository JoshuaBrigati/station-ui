import { useEffect, useRef, useState } from "react"

export interface CountDownProps {
  className: string
  endDate: Date
  onSaleFinished: () => void
}

const Countdown = ({
  className,
  endDate,
  onSaleFinished
}: CountDownProps) => {
  const [timeLeft, setTimeLeft] = useState("00h 00m 00s")
  const interval = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const renderTimeLeft = () => {
      const currentTime = new Date()
      const timeLeft = Math.floor((endDate.getTime() - currentTime.getTime()) / 1000)

      let formattedTime

      if (timeLeft <= 0) {
        clearInterval(interval.current)
        onSaleFinished()
        formattedTime = "00h 00m 00s"
      } else {
        const hours = Math.floor(timeLeft / 3600)
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        formattedTime = `${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
      }

      setTimeLeft(formattedTime)
    }

    interval.current = setInterval(() => {
      renderTimeLeft()
    }, 1000)

    return () => clearInterval(interval.current)

  }, [onSaleFinished, endDate])

  return (
    <span className={className}>
      {timeLeft}
    </span>
  )
}

export default Countdown