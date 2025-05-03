import { chooseCardType } from '../../lib/utils'

const ChooseCard = ({ title, icon, description, iconStyle, onClick }: chooseCardType) => {
  return (
    <div onClick={onClick} className="group rounded-[50px] shadow-lg py-6 px-8 bg-white hover:translate-y-1 transition-all hover:duration-300 cursor-pointer">  
      <div className="flex items-center w-full space-x-4 mb-4">
        <div className={`px-4 py-3 ${iconStyle} rounded-xl`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-left">
          {title}
        </h2>
      </div>
      
      <p className="text-gray-700 text-left">
        {description}
      </p>
    </div>
  )
}

export default ChooseCard;
