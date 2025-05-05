import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';

const Settings = () => {
  // Stato per il goal di passi corrente, ricavato da localStorage
  const [currentStepsGoal, setCurrentStepsGoal] = useState(() => {
    if (localStorage.getItem("formData")) {
      const data = JSON.parse(localStorage.getItem("formData") || "");
      return data.stepsGoal;
    }
    return 0; // Valore di default se non esiste
  });

  // Stato per mostrare/nascondere il toast di conferma
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.title = "Gym Olympus ● Impostazioni";
  }, []);

  // Gestisce il cambiamento dell'input di tipo numero per il nuovo obiettivo passi
  const handleChangeSteps = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrentStepsGoal(Number(newValue));
  };

  // Gestisce l'invio del form e salva il nuovo obiettivo in localStorage
  const handleChangeStepSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Recupera eventuali dati csv precedenti
    const stored = localStorage.getItem("formData");
    const csvData = stored ? JSON.parse(stored).csvData : [];
    const stepsGoal = currentStepsGoal;

    // Salva il nuovo obiettivo passi
    localStorage.setItem(
      "formData",
      JSON.stringify({ stepsGoal, csvData })
    );

    // Mostra il toast di conferma
    setShowToast(true);
  };

  // Effetto per nascondere automaticamente il toast dopo 5 secondi
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // 5000ms = 5 secondi
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenuto principale */}
      <main className="ml-48 flex-1 bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans overflow-y-auto relative">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-left">
          Impostazioni
        </h1>

        <form onSubmit={handleChangeStepSubmit} className="max-w-md">
          <div className="mb-4 flex flex-col gap-2">
            <label
              htmlFor="new_input_steps_goal"
              className="font-medium text-gray-700"
            >
              Nuovo valore obiettivo passi:
            </label>
            <input
              type="number"
              name="new_input_steps_goal"
              id="new_input_steps_goal"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              value={currentStepsGoal}
              onChange={handleChangeSteps}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Cambia
          </button>
        </form>

        {/* Toast di conferma che appare in basso a destra */}
        {showToast && (
          <div
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            role="alert"
          >
            {/* Icona di successo (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            <span>Obiettivo passi aggiornato con successo!</span>
          </div>
        )}
      </main>
    </div>
  );
};

export default Settings;
