import { useEffect, useState } from "react"
import { csvDataType, weekDataType } from "../../lib/utils"
import { addDays, isSameDay, startOfWeek } from "date-fns";

const WeekData = ( {selectedDate, stepsGoal}: weekDataType) => {

  // states
  const [stepsSum, setStepsSum] = useState<number>(0)
  const [distanceSum, setDistanceSum] = useState<number>(0)
  const [caloriesSum, setCaloriesSum] = useState<number>(0)
  const [rawData] = useState(() => {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : {};
  })

  useEffect(() => {

    if(!Array.isArray(rawData.csvData)){
      setStepsSum(0)
      setDistanceSum(0)
      setCaloriesSum(0)
      return
    }

    // calcolo l'inizio della settimana
    const startWeek = startOfWeek(selectedDate, { weekStartsOn: 1 });
    console.log(startWeek)

    // preparo array di giorni da controllare
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startWeek, i));

    console.log(weekDays)

    let ss = 0
    let sd = 0
    let sc = 0

    // calcolo delle somme della settimana
    weekDays.map((day) => {
      const entry = rawData.csvData.find((e: csvDataType) => isSameDay(new Date(e.time), day))

      if(entry){
        ss += Number(entry.steps) || 0
        sd += Number(entry.distance) || 0
        sc += Number(entry.calories) || 0
      }
    })

    setStepsSum(ss)
    setDistanceSum(sd)
    setCaloriesSum(sc)

  }, [selectedDate, rawData.csvData])

  return (
    <div>
      <p>🚶‍♂️ Passi: <span className="font-semibold">{stepsSum}</span></p>
      <p>📏 Distanza: <span className="font-semibold">{Math.round(distanceSum / 10) / 100} km</span></p>
      <p>🔥 Calorie: <span className="font-semibold">{Math.round(caloriesSum * 100) / 100} kCal</span></p>
    </div>
  )
}

export default WeekData