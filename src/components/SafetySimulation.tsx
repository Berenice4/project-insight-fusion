import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SafetySimulationProps {
  onClose: () => void;
  scenario: 'height-work' | 'confined-space' | 'evacuation';
}

const SafetySimulation: React.FC<SafetySimulationProps> = ({ onClose, scenario }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const scenarios = {
    'height-work': {
      title: 'Lavori in Quota',
      steps: [
        {
          title: 'Preparazione Area',
          description: "Verifica che l'area di lavoro sia adeguatamente delimitata e segnalata.",
          action: "Clicca per verificare la delimitazione"
        },
        {
          title: 'Controllo DPI',
          description: "Indossa e verifica il corretto funzionamento del casco, imbracatura e corde.",
          action: "Clicca per verificare i DPI"
        },
        {
          title: 'Punti di Ancoraggio',
          description: "Identifica e verifica i punti di ancoraggio sicuri per l'imbracatura.",
          action: "Clicca per verificare i punti di ancoraggio"
        }
      ]
    },
    'confined-space': {
      title: 'Spazi Confinati',
      steps: [
        {
          title: 'Valutazione Atmosfera',
          description: "Verifica la presenza di gas tossici e livelli di ossigeno.",
          action: "Clicca per misurare l'atmosfera"
        },
        {
          title: 'Comunicazione',
          description: "Stabilisci un sistema di comunicazione con l'esterno.",
          action: "Clicca per testare la comunicazione"
        },
        {
          title: 'Piano di Emergenza',
          description: "Verifica la conoscenza delle procedure di emergenza.",
          action: "Clicca per rivedere il piano"
        }
      ]
    },
    'evacuation': {
      title: 'Simulazione di Evacuazione',
      steps: [
        {
          title: 'Allarme',
          description: "Attiva l'allarme e avvisa tutti i presenti.",
          action: "Clicca per attivare l'allarme"
        },
        {
          title: 'Percorso di Fuga',
          description: "Identifica il percorso di fuga più sicuro.",
          action: "Clicca per tracciare il percorso"
        },
        {
          title: 'Punto di Ritrovo',
          description: "Dirigiti al punto di ritrovo designato.",
          action: "Clicca per confermare l'arrivo"
        }
      ]
    }
  };

  const currentScenario = scenarios[scenario];

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setShowFeedback(true);
    setFeedbackMessage('Procedura completata correttamente!');
    
    setTimeout(() => {
      setShowFeedback(false);
      if (currentStep < currentScenario.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 2000);
  };

  const handleStepError = () => {
    setShowFeedback(true);
    setFeedbackMessage('Attenzione! Procedura non corretta. Riprova.');
    
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-aec-blue-dark">{currentScenario.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XCircle className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-aec-blue-dark">Progresso</h4>
            <div className="flex gap-2">
              {currentScenario.steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full ${
                    completedSteps.includes(index)
                      ? 'bg-aec-teal'
                      : index === currentStep
                      ? 'bg-aec-blue'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="bg-aec-gray-light/30 p-4 rounded-lg">
            <h4 className="font-medium text-aec-blue-dark mb-2">
              Step {currentStep + 1}: {currentScenario.steps[currentStep].title}
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              {currentScenario.steps[currentStep].description}
            </p>
            <button
              onClick={handleStepComplete}
              className="bg-aec-blue text-white px-4 py-2 rounded-full text-sm hover:bg-aec-blue-dark transition-colors duration-300"
            >
              {currentScenario.steps[currentStep].action}
            </button>
          </div>
        </div>

        {showFeedback && (
          <div className={`p-4 rounded-lg ${
            feedbackMessage.includes('correttamente') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {feedbackMessage.includes('correttamente') ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              )}
              <p className={`text-sm ${
                feedbackMessage.includes('correttamente') ? 'text-green-700' : 'text-red-700'
              }`}>
                {feedbackMessage}
              </p>
            </div>
          </div>
        )}

        {completedSteps.length === currentScenario.steps.length && (
          <div className="mt-6 bg-aec-teal/10 p-4 rounded-lg border border-aec-teal">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-aec-teal" />
              <p className="text-sm text-aec-teal-dark">
                Simulazione completata con successo! Hai dimostrato di conoscere tutte le procedure di sicurezza necessarie.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetySimulation; 