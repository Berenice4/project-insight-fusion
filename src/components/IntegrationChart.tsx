
import React from 'react';
import { Building2, Brain, Database, Glasses } from 'lucide-react';

const IntegrationChart = () => {
  return (
    <div className="relative h-80 md:h-96 w-full">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10 border-2 border-aec-blue flex items-center justify-center">
        <div className="w-14 h-14 md:w-20 md:h-20 flex flex-col items-center justify-center">
          <span className="text-xs md:text-sm font-bold text-center text-aec-blue-dark">AEC Fusion</span>
        </div>
      </div>
      
      {/* BIM Node */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-aec-blue-dark">
        <div className="relative">
          <Building2 className="h-8 w-8 md:h-10 md:w-10 text-aec-blue-dark" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold">BIM</span>
        </div>
      </div>

      {/* MR Node */}
      <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-aec-blue">
        <div className="relative">
          <Glasses className="h-8 w-8 md:h-10 md:w-10 text-aec-blue" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold">Realtà Mista</span>
        </div>
      </div>

      {/* CDE Node */}
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-aec-blue-dark">
        <div className="relative">
          <Database className="h-8 w-8 md:h-10 md:w-10 text-aec-blue-dark" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold">CDE / Archivio</span>
        </div>
      </div>

      {/* AI Node */}
      <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-aec-teal">
        <div className="relative">
          <Brain className="h-8 w-8 md:h-10 md:w-10 text-aec-teal" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold">AI Generativa</span>
        </div>
      </div>

      {/* Connection lines using SVG */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 400">
        <line className="connection-line" x1="100" y1="100" x2="200" y2="200" stroke="#0a2463" strokeWidth="2" />
        <line className="connection-line" x1="100" y1="300" x2="200" y2="200" stroke="#3e92cc" strokeWidth="2" />
        <line className="connection-line" x1="300" y1="300" x2="200" y2="200" stroke="#0a2463" strokeWidth="2" />
        <line className="connection-line" x1="300" y1="100" x2="200" y2="200" stroke="#2aefcb" strokeWidth="2" />
        <line className="connection-line" x1="100" y1="100" x2="300" y2="100" stroke="#0a2463" strokeOpacity="0.5" strokeWidth="1.5" />
        <line className="connection-line" x1="100" y1="100" x2="100" y2="300" stroke="#0a2463" strokeOpacity="0.5" strokeWidth="1.5" />
        <line className="connection-line" x1="300" y1="100" x2="300" y2="300" stroke="#0a2463" strokeOpacity="0.5" strokeWidth="1.5" />
        <line className="connection-line" x1="100" y1="300" x2="300" y2="300" stroke="#0a2463" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default IntegrationChart;
