import { useEffect, useState } from "react"
import { monthDataType } from "../../lib/utils"

const MonthData = ( { selectedDate } : monthDataType ) => {

  // states 
  const [stepsSum, setStepsSum] = useState<number>(0)
  const [distanceSum, setDistanceSum] = useState<number>(0)
  const [caloriesSum, setCaloriesSum] = useState<number>(0)
  const [rawData] = useState<{ csvData?: any[] }>(() => {
    const stored = localStorage.getItem("formData")
    return stored ? JSON.parse(stored) : {}
  })

  // hook per sistemare i dati al variare della data e dei dati dal localStorage
  useEffect(() => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()

    if(!Array.isArray(rawData.csvData)){
      setStepsSum(0)
      setDistanceSum(0)
      setCaloriesSum(0)
      return
    }

    // imposto delle somme temporanee e 0
    let ss = 0 // somma dei passi
    let ds = 0 // somma della distanza
    let cs = 0 // somma delle calorie

    // ciclo per ogni entry (ovvero i giorni)
    rawData.csvData.forEach((entry) => {
      const entryDate = new Date(entry.time)

      if(entryDate.getMonth() === month && entryDate.getFullYear() === year){
        ss += Number(entry.steps) || 0
        ds += Number(entry.distance) || 0
        cs += Number(entry.calories) || 0
      }
    })

    // setto i miei stati una volta sola
    setStepsSum(ss)
    setDistanceSum(ds)
    setCaloriesSum(cs)
  }, [selectedDate, rawData.csvData])

  return (
    <div className="flex flex-col">
      <p>🚶‍♂️ Passi: <span className="font-semibold">{stepsSum}</span></p>
      <p>📏 Distanza: <span className="font-semibold">{Math.round(distanceSum / 10) / 100} km</span></p>
      <p>🔥 Calorie: <span className="font-semibold">{Math.round(caloriesSum * 100) / 100} kCal</span></p>
    </div>
  )
}

export default MonthData