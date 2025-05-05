import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Papa from 'papaparse'
import { csvDataType } from "../../lib/utils";
import { format } from "date-fns";

const FormData = () => {

    // effects
    useEffect(() => {
        document.title = "Gym Olympus ● Landing page"
    }, [])

    // states
    const [stepsGoal, setStepsGoal] = useState("0")
    const [csvData, setCsvData] = useState<csvDataType[]>([])

    // navigate
    const navigate = useNavigate()

    // functions
    const handleOnChangeStepsGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.replace(/\D/g, "")
        setStepsGoal(newValue)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // saving the data in the local storage
        localStorage.setItem("formData", JSON.stringify({ stepsGoal, csvData }))

        navigate("/dashboard")
    };

    function parseCSVFile(event: React.ChangeEvent<HTMLInputElement>): void {
        const file = event.target.files?.[0];
        if (!file) {
          console.error("No file selected");
          return;
        }
      
        // Se ho già dati salvati in localStorage, li ricarico e non rifaccio il parsing
        const storedData = localStorage.getItem("formData");
        if (storedData) {
          setCsvData(JSON.parse(storedData).csvData);
          return;
        }
      
        Papa.parse(file, {
          header: true,
          worker: true,
          skipEmptyLines: true,
          complete: (result) => {
            // 1) Mappo i row in oggetti con time: Date e numeri
            type Raw = { time: Date; steps: number; distance: number; calories: number };
            const rawEntries: Raw[] = result.data.map((row: any) => {
              const t = Number(row.time);
              const date = isNaN(t)
                ? new Date(row.time)
                : new Date(t * 1000);
              return {
                time: date,
                steps:    Number(row.steps),
                distance: Number(row.distance),
                calories: Number(row.calories),
              };
            });
      
            // aggrego per giorno
            const accumulator: Record<string, Raw> = {};
            rawEntries.forEach(({ time, steps, distance, calories }) => {
              const dayKey = format(time, 'yyyy-MM-dd');
              if (!accumulator[dayKey]) {
                accumulator[dayKey] = { time: new Date(`${dayKey}T00:00:00`), steps: 0, distance: 0, calories: 0 };
              }
              accumulator[dayKey].steps += steps;
              accumulator[dayKey].distance += distance;
              accumulator[dayKey].calories += calories;
            });
      
            // ricostruisco l'array finale in ordine di data
            const aggregated: csvDataType[] = Object.values(accumulator)
              .sort((a, b) => a.time.getTime() - b.time.getTime())
              .map(({ time, steps, distance, calories }) => ({
                time,
                steps:    steps.toString(),
                distance: distance.toString(),
                calories: calories.toString(),
              }));
      
            // imposto lo stato salvo in localStorage
            setCsvData(aggregated);
            localStorage.setItem(
              "formData",
              JSON.stringify({ stepsGoal, csvData: aggregated })
            );
          },
          error: (error) => {
            console.error("Error parsing CSV file:", error);
          },
        });
      }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-black font-extrabold text-center my-4 text-3xl md:text-5xl">Benvenuto!</h1>
            <p className="text-gray-600 text-center my-5">Inserisci i tuoi dati per proseguire!</p>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                    <label htmlFor="input_steps_goal" className="text-black font-semibold">Obiettivo giornalieri di passi:</label>
                    <input type="text" value={stepsGoal} onChange={handleOnChangeStepsGoal} inputMode="numeric"  placeholder="Inserisci il numero di passi" className="w-full rounded-lg bg-white py-1 px-2 text-gray-500" id="input_steps_goal" required/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <label htmlFor="input_primo_file" className="text-black font-semibold">File sorgente:</label>
                    <input type="file" accept=".csv" id="input_primo_file" name="input_primo_file"  className="rounded-lg bg-blue-500" required onChange={parseCSVFile}/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button type="submit" className="mt-7 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:ease-in-out">
                    Invia
                </button>
            </div>
        </form>
    );
};

export default FormData;
