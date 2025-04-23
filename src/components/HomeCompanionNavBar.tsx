
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassButton from './GlassButton';
import GlassCard from './GlassCard';
import { Home, ArrowLeft, Video, Bell, Settings, Menu, X, HeartPulse, RefrigeratorIcon, ShoppingCart, Clock, Calendar, FileText } from 'lucide-react';

interface HomeCompanionNavBarProps {
  onMenuToggle: () => void;
  
  isMenuOpen: boolean;
}

const HomeCompanionNavBar: React.FC<HomeCompanionNavBarProps> = ({ onMenuToggle, isMenuOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <GlassCard className="p-4 rounded-b-xl bg-gradient-to-r from-indigo-900/60 to-purple-900/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GlassButton
              variant="ghost"
              className="mr-2 text-white"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </GlassButton>
            <h1 className="text-xl font-bold text-white hidden md:block">HomeCompanion</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <NavItem icon={<Home className="h-5 w-5" />} label="Dashboard" isActive={true} />
            <NavItem icon={<HeartPulse className="h-5 w-5" />} label="Health" />
            <NavItem icon={<RefrigeratorIcon className="h-5 w-5" />} label="Kitchen" />
            <NavItem icon={<ShoppingCart className="h-5 w-5" />} label="Shopping" />
            <NavItem icon={<Calendar className="h-5 w-5" />} label="Calendar" />
          </div>
          
          <div className="flex items-center space-x-2">
            <GlassButton
              variant="ghost"
              className="text-white"
              onClick={() => {}}
            >
              <Bell className="h-5 w-5" />
            </GlassButton>
            
            <GlassButton
              variant="ghost"
              className="text-white"
              onClick={() => {}}
            >
              <Video className="h-5 w-5" />
            </GlassButton>
            
            <GlassButton
              variant="ghost"
              className="text-white"
              onClick={() => {}}
            >
              <Settings className="h-5 w-5" />
            </GlassButton>
            
            <GlassButton
              variant="ghost"
              className="text-white md:hidden"
              onClick={onMenuToggle}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </GlassButton>
          </div>
        </div>
      </GlassCard>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[76px] left-0 right-0 bg-gradient-to-b from-indigo-900/90 to-purple-900/90 backdrop-blur-md transition-all duration-300 ease-in-out z-20">
          <div className="p-4 space-y-2">
            <MobileNavItem icon={<Home className="h-5 w-5" />} label="Dashboard" isActive={true} />
            <MobileNavItem icon={<HeartPulse className="h-5 w-5" />} label="Health" />
            <MobileNavItem icon={<RefrigeratorIcon className="h-5 w-5" />} label="Kitchen" />
            <MobileNavItem icon={<ShoppingCart className="h-5 w-5" />} label="Shopping" />
            <MobileNavItem icon={<Calendar className="h-5 w-5" />} label="Calendar" />
            <MobileNavItem icon={<FileText className="h-5 w-5" />} label="Notes" />
          </div>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, label, isActive = false }) => (
  <button
    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-white/20 text-white'
        : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const MobileNavItem = ({ icon, label, isActive = false }) => (
  <button
    className={`flex items-center w-full space-x-3 p-3 rounded-lg transition-colors ${
      isActive
        ? 'bg-white/20 text-white'
        : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default HomeCompanionNavBar;
