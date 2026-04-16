import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-13 py-2">

          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo.png" alt="KeenKeeper" className="h-8 w-auto" />
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { to: '/',         label: 'Home',     Icon: Home      },
              { to: '/timeline', label: 'Timeline', Icon: Clock     },
              { to: '/stats',    label: 'Stats',    Icon: BarChart3 },
            ].map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 sm:px-5 py-2 rounded-xl text-sm font-medium transition-all
                   ${isActive ? 'bg-emerald-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                <Icon size={17} />
                <span className="hidden xs:inline sm:inline">{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
