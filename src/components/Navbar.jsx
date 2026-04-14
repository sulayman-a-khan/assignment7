import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[95%] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/src/assets/logo.png" 
              alt="KeenKeeper" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => `
                flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all
                ${isActive 
                  ? 'bg-emerald-700 text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Home size={20} />
              Home
            </NavLink>

            <NavLink 
              to="/timeline" 
              className={({ isActive }) => `
                flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all
                ${isActive 
                  ? 'bg-emerald-700 text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Clock size={20} />
              Timeline
            </NavLink>

            <NavLink 
              to="/stats" 
              className={({ isActive }) => `
                flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all
                ${isActive 
                  ? 'bg-emerald-700 text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <BarChart3 size={20} />
              Stats
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;