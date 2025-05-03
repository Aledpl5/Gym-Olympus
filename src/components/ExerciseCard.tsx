import { exerciseCardType } from '../../lib/utils'

const ExerciseCard = ( { ex } : exerciseCardType) => {

    const icon = () => {
        switch(ex.group) {
            case 'arm':
                return <img src="/icons/arm.png" alt="arm" className="w-8 h-8" />;
            case 'shoulder':
                return <img src="/icons/shoulder.png" alt="shoulder" className="w-8 h-8" />;
            case 'back':
                return <img src="/icons/back.png" alt="back" className="w-8 h-8" />;
            case 'leg':
                return <img src="/icons/leg.png" alt="leg" className="w-8 h-8" />;
            case 'chest':
                return <img src="/icons/chest.png" alt="chest" className="w-8 h-8" />;
            default:
                return <img src="/icons/arm.png" alt="default" className="w-8 h-8" />;
        }
    }

  return (
    <div className="group rounded-[50px] shadow-lg py-6 px-8 bg-white cursor-pointer">  
      <div className="flex items-center w-full space-x-4 mb-4">
        <div className='px-4 py-3 bg-blue-300 rounded-xl'>
          {icon()}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-left">
          {ex.title}
        </h2>
      </div>
      
      <p className="text-gray-700 text-left">
        {ex.description}
      </p>

      <div className='grid grid-cols-2 gap-4 mt-4'>
        <p><span className='font-bold'>Reps:</span> {ex.reps}</p>
        <p><span className='font-bold'>Tempo di recupero:</span> {ex.recoveryTime}</p>
        <p><span className='font-bold'>Sets:</span> {ex.series}</p>
      </div>
    </div>
  )
}

export default ExerciseCard