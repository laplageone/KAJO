import React, { useState, useEffect } from 'react';
import SpaceBackground from './components/SpaceBackground';
import RocketMessage from './components/RocketMessage';

const App: React.FC = () => {
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    // Trigger the rocket launch immediately on load
    const timer = setTimeout(() => {
      setIsLaunched(true);
    }, 100); // Slight delay to ensure DOM is ready for transition
    return () => clearTimeout(timer);
  }, []);

  const handleReplay = () => {
    setIsLaunched(false);
    setTimeout(() => setIsLaunched(true), 100);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900 flex items-center justify-center">
      {/* Background Layer */}
      <SpaceBackground />

      {/* Main Content Layer */}
      <div className="z-10 relative flex flex-col items-center justify-center w-full h-full">
        <RocketMessage isVisible={isLaunched} onReplay={handleReplay} />
      </div>
    </div>
  );
};

export default App;