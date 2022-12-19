import config from "config"

export function TimerController(lastUpdateDay: number | string) {
  const date: Date = new Date()

  const timeDifferent = Math.abs(Number(date) - Number(lastUpdateDay))

  const daysBetweenUpdates: number = config.get("server.DaysBetweenUpdatesInDB")

  return Math.floor(timeDifferent / (1000 * 3600 * 24)) >= daysBetweenUpdates
}
