import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChooseCard from '../../components/ChooseCard';
import { exerciseType } from '../../../lib/utils';
import { exercises } from '../../../costants/exercises';

// Importa le immagini PNG
import beginnerIcon from '/icons/beginner.png';
import intermediateIcon from '/icons/intermediate.png';
import advancedIcon from '/icons/advanced.png';
import armIcon from '/icons/arm.png';
import shoulderIcon from '/icons/shoulder.png';
import backIcon from '/icons/back.png';
import legIcon from '/icons/leg.png';
import chestIcon from '/icons/chest.png';
import ExerciseCard from '../../components/ExerciseCard';

function Exercises() {
  // States
  const [formActive, setFormActive] = useState(true);
  const [trainingCardActive, setTrainingCardActive] = useState(false);

  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [armActive, setArmActive] = useState(false);
  const [shoulderActive, setShoulderActive] = useState(false);
  const [backActive, setBackActive] = useState(false);
  const [legActive, setLegActive] = useState(false);
  const [chestActive, setChestActive] = useState(false);

  const [exrs, setExrs] = useState<exerciseType[]>([]);

  // Functions
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impedisce il refresh della pagina

    setFormActive(false); // Nasconde il form
    setTrainingCardActive(true); // Mostra la scheda di allenamento

    let muscles = []
    if (armActive) muscles.push('arm');
    if (shoulderActive) muscles.push('shoulder');
    if (backActive) muscles.push('back');
    if (legActive) muscles.push('leg');
    if (chestActive) muscles.push('chest');

    setExrs(selectRandomExcercises(muscles));
  };

  const selectRandomExcercises = (muscles: string[]): exerciseType[] => {
    const selectedExercises: exerciseType[] = [];

    muscles.forEach(group => {
      // Filtra solo gli esercizi relativi al muscolo corrente e al livello di difficoltà selezionato
      const filtered = exercises.filter(ex => ex.group === group).filter(ex => ex.level === difficultyLevel);

      // Mischia gli esercizi filtrati
      const shuffled = filtered.sort(() => Math.random() - 0.5);

      // Prendi 2 o 3 esercizi casuali
      const count = Math.min(3, shuffled.length); // massimo 3 esercizi se disponibili
      const picked = shuffled.slice(0, count);

      selectedExercises.push(...picked);
    });

    return selectedExercises;
  };

  useEffect(() => {
    document.title = "Gym Olympus ● Esercizi";
  }, []);

  const formDisplayed = formActive ? 'block' : 'hidden';
  const trainingCardDisplayed = trainingCardActive ? 'block' : 'hidden';

  // Funzione per determinare la classe attiva
  // Funzione per determinare la classe attiva per il livello di difficoltà
const getDifficultyClass = (level: string) => {
  switch (level) {
    case 'beginner':
      return difficultyLevel === 'beginner' ? 'bg-green-500' : 'bg-green-200';
    case 'intermediate':
      return difficultyLevel === 'intermediate' ? 'bg-orange-500' : 'bg-orange-200';
    case 'advanced':
      return difficultyLevel === 'advanced' ? 'bg-red-500' : 'bg-red-200';
    default:
      return 'bg-gray-200';
  }
};

  const getMuscleGroupClass = (group: string, activeState: boolean) => activeState ? 'bg-blue-500' : 'bg-blue-200';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenuto principale */}
      <main className="ml-24 sm:ml-48 flex-1 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans overflow-y-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-left">Esercizi</h1>

        <p className={`${formDisplayed} text-lg font-bold mb-6`}>
          Dicci le tue preferenze e provvederemo a generarti una scheda di allenamento personalizzata!
        </p>

        <div id="form" className={`${formDisplayed} bg-white rounded-lg shadow-md p-7 my-5`}>
          <form onSubmit={handleFormSubmit}>
            {/* Livello di difficoltà */}
            <h2 className="text-left text-3xl font-bold mb-4">Livello di difficoltà</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <ChooseCard
                title="Beginner"
                icon={<img src={beginnerIcon} alt="Beginner" className="h-6 w-6 mx-auto" />}
                description="Esercizi semplici per cominciare alla grande!"
                iconStyle={`bg-yellow-300 ${getDifficultyClass('beginner')}`}
                onClick={() => setDifficultyLevel('beginner')}
              />
              <ChooseCard
                title="Intermedio"
                icon={<img src={intermediateIcon} alt="Intermedio" className="h-6 w-6 mx-auto" />}
                description="Esercizi per chi ha già un po' di esperienza."
                iconStyle={`bg-orange-300 ${getDifficultyClass('intermediate')}`}
                onClick={() => setDifficultyLevel('intermediate')}
              />
              <ChooseCard
                title="Avanzato"
                icon={<img src={advancedIcon} alt="Avanzato" className="h-6 w-6 mx-auto" />}
                description="Esercizi per chi è già navigato e vuole spingere sempre di più!"
                iconStyle={`bg-red-300 ${getDifficultyClass('advanced')}`}
                onClick={() => setDifficultyLevel('advanced')}
              />
            </div>

            {/* Gruppo muscolare */}
            <h2 className="text-left text-3xl font-bold mb-4">Gruppo muscolare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ChooseCard
                title="Braccia"
                icon={<img src={armIcon} alt="Braccia" className="h-6 w-6 mx-auto" />}
                description="Esercizi per allenare il gruppo muscolare delle braccia."
                iconStyle={`${getMuscleGroupClass('arm', armActive)}`}
                onClick={() => setArmActive(prev => !prev)}
              />
              <ChooseCard
                title="Spalle"
                icon={<img src={shoulderIcon} alt="Spalle" className="h-6 w-6 mx-auto" />}
                description="Esercizi per allenare il gruppo muscolare delle spalle."
                iconStyle={`${getMuscleGroupClass('shoulder', shoulderActive)}`}
                onClick={() => setShoulderActive(prev => !prev)}
              />
              <ChooseCard
                title="Schiena"
                icon={<img src={backIcon} alt="Schiena" className="h-6 w-6 mx-auto" />}
                description="Esercizi per allenare il gruppo muscolare della schiena."
                iconStyle={`${getMuscleGroupClass('back', backActive)}`}
                onClick={() => setBackActive(prev => !prev)}
              />
              <ChooseCard
                title="Gambe"
                icon={<img src={legIcon} alt="Gambe" className="h-6 w-6 mx-auto" />}
                description="Esercizi per allenare il gruppo muscolare delle gambe."
                iconStyle={`${getMuscleGroupClass('leg', legActive)}`}
                onClick={() => setLegActive(prev => !prev)}
              />
              <ChooseCard
                title="Petto"
                icon={<img src={chestIcon} alt="Petto" className="h-6 w-6 mx-auto" />}
                description="Esercizi per allenare il gruppo muscolare del petto."
                iconStyle={`${getMuscleGroupClass('chest', chestActive)}`}
                onClick={() => setChestActive(prev => !prev)}
              />
            </div>

            {/* Bottone invia */}
            <input
              type="submit"
              value="Invia"
              className="bg-blue-500 hover:bg-blue-700 transition-all hover:ease-in-out py-2 px-6 rounded-lg font-semibold text-white cursor-pointer mt-8"
            />
          </form>
        </div>
        <div className={`${trainingCardDisplayed} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {exrs.map((exercise) => {
            return <ExerciseCard ex={exercise} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Exercises;
