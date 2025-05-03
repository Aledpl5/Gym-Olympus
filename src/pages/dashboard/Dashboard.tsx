import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isSameDay } from 'date-fns';
import StepChart from '../../components/StepChart'; // Assicurati che il percorso sia corretto
import Sidebar from '../../components/Sidebar'; // Assicurati che il percorso sia corretto
import WeeklyStepsChart from '../../components/WeeklyStepsChart';
import WeekData from '../../components/WeekData';
import MonthlyStepsChart from '../../components/MonthlyStepsChart';
import MonthData from '../../components/MonthData';

function Dashboard() {
  const [data] = useState<any>(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : {};
  });

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [filteredEntry, setFilteredEntry] = useState<any>(null);
  const [banner, setBanner] = useState<string>("hidden");


  useEffect(() => {
    document.title = "Gym Olympus ● Dashboard";
  }, []);

  useEffect(() => {
    if (!selectedDate || !data.csvData) return;

    const match = data.csvData.find((entry: any) => {
      const entryDate = new Date(entry.time);
      return isSameDay(entryDate, selectedDate);
    });

    setFilteredEntry(match || null);
    setBanner(match && Number(match.steps) < data.stepsGoal ? "block" : "hidden");
  }, [selectedDate, data.csvData]);

  return (
    <div className="flex">
      {/* Sidebar fissa */}
      <Sidebar />

      {/* Contenuto che scrolla */}
      <main className="ml-48 flex-1 bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans overflow-y-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-left">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Spazio vuoto per il layout */}
          <div></div>

          {/* DatePicker */}
          <div className="bg-green-700 rounded-lg shadow-md p-4 flex items-center justify-center">
            <div className="text-center">
              <label className="block font-semibold text-white mb-2 text-sm">📅 Seleziona una data:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => date && setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                className="rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-center"
                placeholderText="Clicca per scegliere una data"
              />
            </div>
          </div>

          {/* Info Obiettivo */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center flex justify-center items-center">
            <p className="text-gray-700 font-bold text-xl">🎯 Obiettivo passi: <strong className="text-blue-600 text-lg">{data.stepsGoal}</strong></p>
          </div>

          {/* Grafico Passi */}
          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">📊 Grafico Passi</h2>
            {filteredEntry && data.stepsGoal ? (
              <StepChart entry={filteredEntry} stepsGoal={data.stepsGoal} />
            ) : (
              <p className="text-gray-500 text-center">Seleziona una data per visualizzare il grafico.</p>
            )}
          </div>

          {/* Dati Giorno */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">🗓️ Dati del Giorno</h2>
            {selectedDate ? (
              filteredEntry ? (
                <ul className="text-gray-700 space-y-2">
                  <li>🚶‍♂️ Passi: <span className="font-semibold">{filteredEntry.steps}</span></li>
                  <li>📏 Distanza: <span className="font-semibold">{filteredEntry.distance}</span> m</li>
                  <li>🔥 Calorie: <span className="font-semibold">{Math.round(filteredEntry.calories * 100) / 100} kCal</span></li>
                </ul>
              ) : (
                <p className="text-gray-500">Nessun dato disponibile per questa data.</p>
              )
            ) : (
              <p className="text-gray-500">Seleziona una data per visualizzare i dati.</p>
            )}

            {/* banner per mancato completamento dei passi giornalieri */}
            <div className={`${banner} rounded border-2 border-red-500 bg-red-200 p-4 mt-4`}>
              <p className='text-red text font-bold'>Attenzione! Non hai completato il tuo obiettivo di passi giornaliero!</p>
            </div>
          </div>

          {/* Grafico Passi Settimanale */}
          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">📊 Andamento settimanale passi:</h2>
              {data.csvData && data.stepsGoal && filteredEntry ? (
                  <WeeklyStepsChart csvData={data.csvData} stepsGoal={data.stepsGoal} selectedDate={selectedDate}/>
                ) : (
                  <p className="text-gray-500 text-center">Seleziona una data per visualizzare il grafico.</p>
              )}
          </div>

          {/* Dati della settimana */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-3'>🗓️ Progressi settimanali:</h2>
            {data.csvData && filteredEntry ? (
              <WeekData selectedDate={selectedDate} stepsGoal={data.stepsGoal}></WeekData>
            ) : (<p className='text-gray-500'>Nessun dato disponibile per questa data.</p>)}
          </div>

          {/* Grafico del progesso mensile */}
          <div className='bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2'>
            <h2 className='text-xl font-semibold text-gray-900 mb-3'>📊 Andamento mensile dei passi:</h2>
            {data.csvData && filteredEntry ? (
              <MonthlyStepsChart selectedDate={selectedDate} stepsGoal={data.stepsGoal}/>
            ) : (
              <p className="text-gray-500 text-center">
                Seleziona una data per visualizzare il grafico.
              </p>
            )}

          </div>

          {/* Dati del mese */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-3'>🗓️ Progressi mensili:</h2>
            {data.csvData && filteredEntry ? (
              <MonthData selectedDate={selectedDate} stepsGoal={data.stepsGoal} />
            ) : (<p className='text-gray-500'>Nessun dato disponibile per questa data.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
