
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import { ArrowLeft } from 'lucide-react';

const ChildJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#070B34] to-[#0A1128]">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </GlassButton>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 border border-blue-500/40"></div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-70"></div>
            <GlassCard className="relative p-8 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 border border-blue-500/30 shadow-[0_8px_32px_rgba(31,41,55,0.4)]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Hello! What would you like to do today?
                  </h1>
                  <p className="text-gray-300 mb-4 text-lg">
                    I'm Chhota Dost, your friendly robot buddy!
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src="/lovable-uploads/6092619e-e957-4c21-b480-20454027a7e2.png" 
                    alt="Child Assistant" 
                    className="w-48 h-48 object-contain animate-float"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Tell me a story */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#101643]/90 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg">
                  <div className="text-blue-400 text-3xl">📚</div>
                </div>
                <p className="text-white font-medium text-center">Tell me a story</p>
              </div>
            </div>
            
            {/* Fun facts */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#3A1F0B]/90 to-[#2C1A14]/90 backdrop-blur-md rounded-2xl border border-orange-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                  <div className="text-orange-400 text-3xl">🎨</div>
                </div>
                <p className="text-white font-medium text-center">Fun facts</p>
              </div>
            </div>
            
            {/* Let's draw */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0B2A3A]/90 to-[#0D1F36]/90 backdrop-blur-md rounded-2xl border border-cyan-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <div className="text-cyan-400 text-3xl">🚀</div>
                </div>
                <p className="text-white font-medium text-center">Let's draw</p>
              </div>
            </div>
            
            {/* Games */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#2D1434]/90 to-[#1F1346]/90 backdrop-blur-md rounded-2xl border border-pink-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                  <div className="text-pink-400 text-3xl">🎮</div>
                </div>
                <p className="text-white font-medium text-center">Games</p>
              </div>
            </div>
            
            {/* Learn math */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F342B]/90 to-[#0D2D20]/90 backdrop-blur-md rounded-2xl border border-green-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
                  <div className="text-green-400 text-3xl">🔢</div>
                </div>
                <p className="text-white font-medium text-center">Learn math</p>
              </div>
            </div>
            
            {/* Animals */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#332D0B]/90 to-[#2D270B]/90 backdrop-blur-md rounded-2xl border border-yellow-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg">
                  <div className="text-yellow-400 text-3xl">🦁</div>
                </div>
                <p className="text-white font-medium text-center">Animals</p>
              </div>
            </div>
            
            {/* Music */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#221634]/90 to-[#1A1443]/90 backdrop-blur-md rounded-2xl border border-violet-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-lg">
                  <div className="text-violet-400 text-3xl">🎵</div>
                </div>
                <p className="text-white font-medium text-center">Music</p>
              </div>
            </div>
            
            {/* Puzzles */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0B2A3A]/90 to-[#0D1F36]/90 backdrop-blur-md rounded-2xl border border-sky-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-lg">
                  <div className="text-sky-400 text-3xl">🧩</div>
                </div>
                <p className="text-white font-medium text-center">Puzzles</p>
              </div>
            </div>
          </div>
          
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-50"></div>
            <GlassCard className="relative bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 border border-blue-500/20">
              <h2 className="text-xl font-semibold mb-3 text-white">Continue learning</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 text-xl">
                    🔤
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Continue Alphabet Game</p>
                    <div className="w-full h-2 bg-blue-900/50 rounded-full mt-1">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mr-4 text-xl">
                    🌍
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">World of Dinosaurs</p>
                    <div className="w-full h-2 bg-indigo-900/50 rounded-full mt-1">
                      <div className="h-full bg-indigo-500 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-60"></div>
            <GlassCard className="relative p-4 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 border border-blue-500/20">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask Chhota Dost..." 
                  className="w-full bg-blue-900/20 border border-blue-500/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-2 shadow-lg shadow-blue-500/20">
                  <div className="h-5 w-5 text-white flex items-center justify-center">
                    🚀
                  </div>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChildJourney;
