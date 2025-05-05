import React from 'react';
import { ActivityCardProps } from '../../lib/utils';



const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {

    // Destruttura l'oggetto activity per ottenere i valori necessari
    const { calories, distance, start_time, end_time, steps, type } = activity;

    const icon = () => {
        switch(type) {
            case 'walking':
                return <img src="/icons/walking.png" alt="arm" className="w-10 h-10" />;
            case 'running':
             return <img src="/icons/running.png" alt="shoulder" className="w-10 h-10" />;
            case 'cycling':
                return <img src="/icons/cycling.png" alt="back" className="w-10 h-10" />;
            default:
                return <img src="/icons/walking.png" alt="default" className="w-10 h-10" />;
        }
    }

    const tranlateType = () => {
        switch(type) {
            case 'walking':
                return "Camminata"
            case 'running': 
                return "Corsa"
            case 'cycling':
                return 'Ciclismo'
            default: return "Esercizio registrato"
        }
    }

    // Converte timestamp Unix (sec) in data leggibile
    const formatDate = (ts: number) => new Date(ts * 1000).toLocaleString();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 flex flex-col sm:flex-row sm:items-center">
        <div className='w-full sm:w-28 top-4 p-5 flex items-center justify-center'>
            {icon()}
        </div>
        <div className="flex flex-col flex-1">
            <h2 className="text-xl font-semibold sm:text-left text-center text-gray-800 capitalize">{tranlateType()}</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-2'>
                <div>
                    <p className="text-black text-center sm:text-left">Calorie: <span className="font-bold">{calories} Cal</span></p>
                    <p className="text-black text-center sm:text-left">Distanza: <span className="font-bold">{distance} m</span></p>
                    <p className="text-black text-center sm:text-left">Passi: <span className="font-bold">{steps}</span></p>
                </div>
                <div>
                    <p className="text-gray-500 text-center sm:text-left text-sm"><span className='text-black font-bold'>Inizio:</span> {formatDate(start_time)}</p>
                    <p className="text-gray-500 text-center sm:text-left text-sm"><span className='text-black font-bold'>Fine:</span> {formatDate(end_time)}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ActivityCard;