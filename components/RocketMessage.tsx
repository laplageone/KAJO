import React from 'react';
import { Rocket, Heart, RefreshCw } from 'lucide-react';

interface RocketMessageProps {
  isVisible: boolean;
  onReplay: () => void;
}

const RocketMessage: React.FC<RocketMessageProps> = ({ isVisible, onReplay }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      
      {/* Rocket Container */}
      <div 
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[100vh] opacity-0 scale-50'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }} // Spring-like effect
      >
        <div className="relative mb-8 animate-[float_3s_ease-in-out_infinite]">
          {/* Flame Effect */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
          
          {/* Rocket Icon */}
          <div className="relative z-10 bg-white p-6 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)] border-4 border-slate-200">
             <Rocket 
                size={80} 
                className="text-red-600 transform -rotate-45" 
                fill="currentColor" 
                strokeWidth={1.5}
             />
          </div>
        </div>
      </div>

      {/* Message Container */}
      <div 
        className={`flex flex-col items-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg mb-6 leading-tight py-2">
          بحبك يا كاجو
        </h1>
        
        <div className="flex items-center gap-2 mb-8">
          <Heart className="text-red-500 animate-bounce" fill="currentColor" size={32} />
          <span className="text-xl md:text-2xl text-pink-200 font-bold">جدا جدا جدا</span>
          <Heart className="text-red-500 animate-bounce" fill="currentColor" size={32} style={{ animationDelay: '0.1s' }} />
        </div>

        {/* Replay Button */}
        <button 
          onClick={onReplay}
          className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white transition-all hover:scale-105 active:scale-95"
        >
          <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
          <span>اجمل بيتفورايا في الدنيا</span>
        </button>
      </div>
    </div>
  );
};

export default RocketMessage;