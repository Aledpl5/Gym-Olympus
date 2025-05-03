import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';

const Settings = () => {

    const [currentStepsGoal, setCurrentStepsGoal] = useState(() => {
        if(localStorage.getItem("formData")) {
            const data = JSON.parse(localStorage.getItem("formData") || "")
            return data.stepsGoal
        }
    })

    useEffect(() => {
        document.title = "Gym Olympus ● Impostazioni";
    }, [])

    const handleChangeSteps = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setCurrentStepsGoal(Number(newValue))
    }

    const handleChangeStepSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const csvData = localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData") || "").csvData : []
        const stepsGoal = currentStepsGoal

        localStorage.setItem("formData", JSON.stringify({ stepsGoal, csvData }))
    }

  return (
    <div className='flex min-h-screen'>
        {/* Sidebar */}
        <Sidebar />

        {/* Contenuto principale */}
        <main className='ml-48 flex-1 bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans overflow-y-auto'>
            <h1 className='text-4xl font-bold text-gray-900 mb-6 text-left'>Impostazioni</h1>

            <form onSubmit={handleChangeStepSubmit}>
                <div className='mb-4 flex flex-col gap-4'>
                    <label htmlFor="new_input_steps_goal">Nuovo valore obiettivo passi:</label>
                    <input type="text" name="new_input_steps_goal" id="new_input_steps_goal" className='max-w-40 border-2 border-gray-300 rounded-lg px-4 py-2' value={currentStepsGoal} onChange={handleChangeSteps}/>
                </div>
                <input type="submit" value="Cambia" className='text-white bg-blue-500 hover:bg-blue-700 font-semibold transition-all hover:ease-in-out py-2 px-4 cursor-pointer rounded-lg'/>
            </form>

        </main>

    </div>
  )
}

export default Settings