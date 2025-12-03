import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-xiangqi-red shadow-lg border-b-4 border-xiangqi-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="w-10 h-10 bg-xiangqi-gold rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-xiangqi-red font-serif font-bold text-2xl">帥</span>
              </div>
              <span className="text-white font-serif font-bold text-lg md:text-xl tracking-widest hover:text-xiangqi-gold transition-colors">
                {APP_NAME}
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-red-800 text-xiangqi-gold shadow-inner border border-red-700'
                        : 'text-white hover:bg-red-700 hover:text-gray-100'
                    }`
                  }
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-red-800 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-900 border-t border-red-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${
                    isActive
                      ? 'bg-red-800 text-xiangqi-gold'
                      : 'text-gray-300 hover:bg-red-700 hover:text-white'
                  }`
                }
              >
                {item.icon && <item.icon size={20} />}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;