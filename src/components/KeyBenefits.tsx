
import React, { useState } from 'react';
import { Check, ChevronRight, Users, Layers, Eye, Database } from 'lucide-react';
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface KeyBenefitsProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const KeyBenefits = ({ 
  title = "Benefici Chiave", 
  subtitle = "I vantaggi principali della nostra soluzione integrata",
  className 
}: KeyBenefitsProps) => {
  const [activeBenefit, setActiveBenefit] = useState<string>("collaboration");

  const benefits: Benefit[] = [
    {
      id: "collaboration",
      title: "Collaborazione",
      description: "Facilita il lavoro di squadra tra tutti gli attori coinvolti nel progetto, con accesso condiviso alle stesse informazioni in tempo reale.",
      icon: Users
    },
    {
      id: "coordination",
      title: "Coordinamento",
      description: "Migliora la gestione e l'allineamento tra le diverse discipline e fasi di progetto, riducendo gli errori e i conflitti.",
      icon: Layers
    },
    {
      id: "visualization",
      title: "Visualizzazione",
      description: "Rappresenta graficamente informazioni complesse, rendendo immediatamente comprensibili concetti tecnici a tutti gli stakeholder.",
      icon: Eye
    },
    {
      id: "data",
      title: "Dati Strutturati",
      description: "Organizza le informazioni in modo logico e accessibile, permettendo analisi avanzate e processi decisionali basati sui dati.",
      icon: Database
    }
  ];

  const handleBenefitClick = (id: string) => {
    setActiveBenefit(id);
  };

  return (
    <div className={cn("space-y-6", className)}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-aec-blue-dark mb-2">{title}</h2>
          {subtitle && <p className="text-aec-gray-dark max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={cn(
                "p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3",
                activeBenefit === benefit.id 
                  ? "bg-aec-blue text-white shadow-md transform -translate-y-1" 
                  : "bg-white hover:bg-gray-100 border border-gray-200"
              )}
              onClick={() => handleBenefitClick(benefit.id)}
            >
              <benefit.icon className={cn(
                "h-5 w-5 transition-colors",
                activeBenefit === benefit.id ? "text-white" : "text-aec-blue"
              )} />
              <span className="font-medium">{benefit.title}</span>
              <ChevronRight className={cn(
                "h-4 w-4 ml-auto transition-transform",
                activeBenefit === benefit.id ? "rotate-90 text-white" : "text-gray-400"
              )} />
            </div>
          ))}
        </div>
        
        <div className="md:col-span-2">
          <Card className="h-full shadow-lg border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-6 h-full flex flex-col">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className={cn(
                    "space-y-4 transition-all duration-500",
                    activeBenefit === benefit.id
                      ? "opacity-100 translate-y-0"
                      : "absolute opacity-0 translate-y-4 pointer-events-none"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-aec-blue/10">
                      <benefit.icon className="h-8 w-8 text-aec-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-aec-blue-dark">{benefit.title}</h3>
                  </div>
                  
                  <p className="text-gray-700">{benefit.description}</p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Vantaggi specifici:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <Check className="h-4 w-4 text-aec-teal" />
                          </div>
                          <span className="text-sm text-gray-600">
                            {benefit.id === "collaboration" && i === 1 && "Facilita il lavoro di squadra remoto"}
                            {benefit.id === "collaboration" && i === 2 && "Migliora la comunicazione tra discipline"}
                            {benefit.id === "collaboration" && i === 3 && "Riduce incomprensioni e conflitti"}
                            {benefit.id === "collaboration" && i === 4 && "Aumenta la trasparenza del processo"}
                            
                            {benefit.id === "coordination" && i === 1 && "Riduce le interferenze tra sistemi"}
                            {benefit.id === "coordination" && i === 2 && "Ottimizza la pianificazione temporale"}
                            {benefit.id === "coordination" && i === 3 && "Facilita il tracciamento delle modifiche"}
                            {benefit.id === "coordination" && i === 4 && "Migliora la gestione delle revisioni"}
                            
                            {benefit.id === "visualization" && i === 1 && "Facilita l'approvazione del cliente"}
                            {benefit.id === "visualization" && i === 2 && "Migliora la comprensione in cantiere"}
                            {benefit.id === "visualization" && i === 3 && "Riduce errori interpretativi"}
                            {benefit.id === "visualization" && i === 4 && "Supporta la formazione del personale"}
                            
                            {benefit.id === "data" && i === 1 && "Facilita analisi e reportistica"}
                            {benefit.id === "data" && i === 2 && "Migliora la qualità delle decisioni"}
                            {benefit.id === "data" && i === 3 && "Supporta l'automazione dei processi"}
                            {benefit.id === "data" && i === 4 && "Agevola estrazione di quantità e costi"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
