
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Video, Image, Info, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SafetySimulationProps {
  onClose: () => void;
  scenario: 'height-work' | 'confined-space' | 'evacuation' | 'equipment-maintenance' | 'assembly' | 'building-management';
}

const SafetySimulation: React.FC<SafetySimulationProps> = ({ onClose, scenario }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showMedia, setShowMedia] = useState(false);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [mediaSource, setMediaSource] = useState('');
  const [mediaTitle, setMediaTitle] = useState('');

  const scenarios = {
    'height-work': {
      title: 'Lavori in Quota',
      description: 'Simulazione di procedure di sicurezza per lavori in altezza',
      image: '/safety-height-work.jpg',
      steps: [
        {
          title: 'Preparazione Area',
          description: "Verifica che l'area di lavoro sia adeguatamente delimitata e segnalata.",
          action: "Verifica delimitazione area",
          media: {
            type: 'image',
            source: '/height-work-area.jpg',
            title: 'Delimitazione area di lavoro'
          }
        },
        {
          title: 'Controllo DPI',
          description: "Indossa e verifica il corretto funzionamento del casco, imbracatura e corde.",
          action: "Verifica DPI",
          media: {
            type: 'video',
            source: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Controllo equipaggiamento di sicurezza'
          }
        },
        {
          title: 'Punti di Ancoraggio',
          description: "Identifica e verifica i punti di ancoraggio sicuri per l'imbracatura.",
          action: "Verifica punti di ancoraggio",
          media: {
            type: 'image',
            source: '/height-work-anchors.jpg',
            title: 'Punti di ancoraggio per imbracatura'
          }
        }
      ]
    },
    'confined-space': {
      title: 'Spazi Confinati',
      description: 'Simulazione di accesso e lavoro in ambienti confinati',
      image: '/safety-confined-space.jpg',
      steps: [
        {
          title: 'Valutazione Atmosfera',
          description: "Verifica la presenza di gas tossici e livelli di ossigeno.",
          action: "Misura l'atmosfera",
          media: {
            type: 'image',
            source: '/confined-space-gas-detector.jpg',
            title: 'Rilevatori di gas per spazi confinati'
          }
        },
        {
          title: 'Comunicazione',
          description: "Stabilisci un sistema di comunicazione con l'esterno.",
          action: "Testa la comunicazione",
          media: {
            type: 'image',
            source: '/confined-space-communication.jpg',
            title: 'Sistemi di comunicazione per spazi confinati'
          }
        },
        {
          title: 'Piano di Emergenza',
          description: "Verifica la conoscenza delle procedure di emergenza.",
          action: "Rivedi piano di emergenza",
          media: {
            type: 'video',
            source: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Procedure di emergenza per spazi confinati'
          }
        }
      ]
    },
    'evacuation': {
      title: 'Simulazione di Evacuazione',
      description: 'Esercitazione di evacuazione da edificio in emergenza',
      image: '/safety-evacuation.jpg',
      steps: [
        {
          title: 'Allarme',
          description: "Attiva l'allarme e avvisa tutti i presenti.",
          action: "Attiva l'allarme",
          media: {
            type: 'image',
            source: '/evacuation-alarm.jpg',
            title: 'Attivazione allarme di evacuazione'
          }
        },
        {
          title: 'Percorso di Fuga',
          description: "Identifica il percorso di fuga più sicuro.",
          action: "Traccia percorso",
          media: {
            type: 'image',
            source: '/evacuation-route.jpg',
            title: 'Percorsi di evacuazione di emergenza'
          }
        },
        {
          title: 'Punto di Ritrovo',
          description: "Dirigiti al punto di ritrovo designato.",
          action: "Conferma arrivo",
          media: {
            type: 'image',
            source: '/evacuation-meeting-point.jpg',
            title: 'Punto di ritrovo per evacuazione'
          }
        }
      ]
    },
    'equipment-maintenance': {
      title: 'Manutenzione Impianti',
      description: 'Procedure per la manutenzione di impianti tecnici',
      image: '/maintenance-hvac.jpg',
      steps: [
        {
          title: 'Isolamento Impianto',
          description: "Verifica che l'impianto sia isolato elettricamente prima di intervenire.",
          action: "Isola impianto",
          media: {
            type: 'image',
            source: '/maintenance-isolation.jpg',
            title: 'Isolamento elettrico di impianto'
          }
        },
        {
          title: 'Diagnostica',
          description: "Esegui la diagnostica dell'impianto per identificare eventuali guasti.",
          action: "Esegui diagnostica",
          media: {
            type: 'video',
            source: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Diagnostica di un sistema HVAC'
          }
        },
        {
          title: 'Manutenzione Programmata',
          description: "Completa la checklist di manutenzione programmata.",
          action: "Completa checklist",
          media: {
            type: 'image',
            source: '/maintenance-checklist.jpg',
            title: 'Checklist di manutenzione programmata'
          }
        }
      ]
    },
    'assembly': {
      title: 'Assemblaggio e Montaggio',
      description: 'Procedure per l\'assemblaggio di componenti prefabbricati',
      image: '/assembly-prefab.jpg',
      steps: [
        {
          title: 'Verifica Componenti',
          description: "Controlla che tutti i componenti siano presenti e integri.",
          action: "Verifica componenti",
          media: {
            type: 'image',
            source: '/assembly-components.jpg',
            title: 'Verifica componenti prefabbricati'
          }
        },
        {
          title: 'Sequenza di Montaggio',
          description: "Segui la corretta sequenza di montaggio per i componenti.",
          action: "Visualizza sequenza",
          media: {
            type: 'video',
            source: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Sequenza di montaggio strutturale'
          }
        },
        {
          title: 'Verifica Connessioni',
          description: "Controlla che tutte le connessioni siano sicure e conformi.",
          action: "Verifica connessioni",
          media: {
            type: 'image',
            source: '/assembly-connections.jpg',
            title: 'Verifica connessioni strutturali'
          }
        }
      ]
    },
    'building-management': {
      title: 'Gestione di Edifici',
      description: 'Procedure per la gestione di impianti e sistemi edificio',
      image: '/building-management.jpg',
      steps: [
        {
          title: 'Gestione BMS',
          description: "Accedi e configura il sistema di gestione dell'edificio.",
          action: "Accedi al BMS",
          media: {
            type: 'image',
            source: '/bms-dashboard.jpg',
            title: 'Dashboard di sistema BMS'
          }
        },
        {
          title: 'Controllo Sistemi',
          description: "Controlla lo stato dei principali sistemi dell'edificio.",
          action: "Controlla sistemi",
          media: {
            type: 'image',
            source: '/building-systems.jpg',
            title: 'Monitoraggio sistemi edificio'
          }
        },
        {
          title: 'Gestione Emergenze',
          description: "Simula una risposta a una situazione di emergenza.",
          action: "Simula emergenza",
          media: {
            type: 'video',
            source: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Gestione emergenze in edificio'
          }
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

  const handleNextStep = () => {
    if (currentStep < currentScenario.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleShowMedia = (type: 'image' | 'video', source: string, title: string) => {
    setMediaType(type);
    setMediaSource(source);
    setMediaTitle(title);
    setShowMedia(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-aec-blue-dark">{currentScenario.title}</h3>
            <p className="text-sm text-aec-gray-dark">{currentScenario.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XCircle className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-1">
            <div className="bg-aec-gray-light/30 p-4 rounded-lg h-full">
              <h4 className="font-medium text-aec-blue-dark mb-4">Fasi</h4>
              <div className="space-y-2">
                {currentScenario.steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 flex items-start gap-3 ${
                      index === currentStep 
                        ? 'bg-aec-blue text-white' 
                        : completedSteps.includes(index)
                        ? 'bg-aec-teal/10 border border-aec-teal'
                        : 'bg-white border hover:bg-aec-gray-light/50'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index === currentStep 
                        ? 'bg-white text-aec-blue' 
                        : completedSteps.includes(index)
                        ? 'bg-aec-teal text-white'
                        : 'bg-aec-gray-light text-aec-gray-dark'
                    }`}>
                      {completedSteps.includes(index) ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <span className={`text-sm ${
                      index === currentStep 
                        ? 'font-medium' 
                        : ''
                    }`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-aec-gray-light/30 p-6 rounded-lg h-full">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-aec-blue-dark">
                  Step {currentStep + 1}: {currentScenario.steps[currentStep].title}
                </h4>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePrevStep} 
                    disabled={currentStep === 0}
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      currentStep === 0 ? 'text-gray-300' : 'text-aec-blue hover:bg-aec-blue/10'
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-aec-gray-dark">
                    {currentStep + 1}/{currentScenario.steps.length}
                  </span>
                  <button 
                    onClick={handleNextStep}
                    disabled={currentStep === currentScenario.steps.length - 1}
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      currentStep === currentScenario.steps.length - 1 ? 'text-gray-300' : 'text-aec-blue hover:bg-aec-blue/10'
                    }`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-aec-gray-dark/10">
                  <img 
                    src={currentScenario.steps[currentStep].media?.source || '/placeholder.svg'} 
                    alt={currentScenario.steps[currentStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 p-2">
                    <button 
                      onClick={() => handleShowMedia(
                        currentScenario.steps[currentStep].media?.type || 'image',
                        currentScenario.steps[currentStep].media?.source || '',
                        currentScenario.steps[currentStep].media?.title || ''
                      )}
                      className="bg-white/80 hover:bg-white text-aec-blue-dark rounded-full p-2 transition-colors duration-200"
                    >
                      {currentScenario.steps[currentStep].media?.type === 'video' ? (
                        <Video className="h-5 w-5" />
                      ) : (
                        <Image className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <Info className="h-5 w-5 text-aec-blue mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      {currentScenario.steps[currentStep].description}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <Clock className="h-5 w-5 text-aec-blue mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      Tempo stimato: 5-10 minuti
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleStepError}
                  className="border border-red-500 text-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-50 transition-colors duration-300"
                >
                  Segnala problema
                </button>
                <button
                  onClick={handleStepComplete}
                  className="bg-aec-blue text-white px-6 py-2 rounded-full text-sm hover:bg-aec-blue-dark transition-colors duration-300"
                >
                  {currentScenario.steps[currentStep].action}
                </button>
              </div>
            </div>
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

      <Dialog open={showMedia} onOpenChange={setShowMedia}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{mediaTitle}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {mediaType === 'video' ? (
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={mediaSource}
                  title={mediaTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="flex justify-center">
                <img
                  src={mediaSource}
                  alt={mediaTitle}
                  className="max-h-[70vh] rounded-lg object-contain"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SafetySimulation;
