import { Book, Clock, House, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className=" sm:w-48 h-screen bg-gray-800 text-white py-4 flex flex-col items-start fixed px-4">
      <div id="title" className="mb-4">
        <h1 className="text-base sm:text-2xl font-bold">Gym</h1>
        <h2 className="text-sm sm:text-xl">Olympus</h2>
      </div>

      <hr className="w-full border-t-2 border-white mb-4 rounded-lg" />

      <Link
        to="/dashboard"
        className="flex items-center space-x-2 py-2 hover:bg-gray-700 transition-colors w-full px-2 rounded-lg"
      >
        <House className="h-5 w-5" color='#fff'/>
        <span className='text-white hidden sm:block'>Dashboard</span>
      </Link>

      <Link
        to="/exercises"
        className="flex items-center space-x-2 py-2 hover:bg-gray-700 transition-colors w-full px-2 rounded-lg"
      >
        <Book className="h-5 w-5" color='#fff'/>
        <span className='text-white hidden sm:block'>Esercizi</span>
      </Link>

      <Link
        to="/history"
        className="flex items-center space-x-2 py-2 hover:bg-gray-700 transition-colors w-full px-2 rounded-lg"
      >
        <Clock className="h-5 w-5" color='#fff'/>
        <span className='text-white hidden sm:block'>Storico</span>
      </Link>

      <Link to="/settings" className='flex items-centere space-x-2 py-2 hover:bg-gray-700 transition-colors w-full px-2 rounded-lg'>
        <Settings className='h-5 w-5' color="#fff"/>
        <span className='text-white hidden sm:block'>Impostazioni</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
