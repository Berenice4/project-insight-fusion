
import React from 'react';
import UseCaseDetailLayout from '@/components/UseCaseDetailLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Calendar, Wrench, Brain, Building, Database, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const PredictiveMaintenanceDetail = () => {
  return (
    <UseCaseDetailLayout
      title="Manutenzione predittiva"
      description="Sistema che combina dati BIM, storici dal CDE e analisi AI per prevedere quando e dove sarà necessaria manutenzione."
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Il Problema</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La manutenzione reattiva degli edifici e delle infrastrutture è costosa e inefficiente, causando interruzioni non pianificate, danni collaterali e riduzione della vita utile degli asset.
            </p>
            <p className="mb-4">
              I programmi di manutenzione preventiva tradizionali si basano su intervalli fissi che spesso non riflettono le reali condizioni degli impianti, portando a interventi non necessari o tardivi.
            </p>
            <p>
              La mancanza di visibilità sullo stato degli impianti e dei componenti edilizi rende difficile per i facility manager pianificare in modo efficiente risorse, budget e interventi, e reagire proattivamente a potenziali problemi.
            </p>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mt-12 mb-6 text-aec-blue-dark">La Soluzione</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La manutenzione predittiva utilizza l'integrazione di dati BIM, informazioni storiche dal CDE e algoritmi di intelligenza artificiale per prevedere quando e dove sarà necessaria manutenzione, prima che si verifichino guasti.
            </p>
            <p className="mb-4">
              Sensori IoT distribuiti nell'edificio monitorano continuamente parametri critici come temperature, vibrazioni, consumi energetici e altri indicatori di salute dei sistemi, alimentando algoritmi predittivi.
            </p>
            <p>
              L'AI analizza i pattern nei dati, confrontandoli con modelli di degrado noti e con lo storico delle manutenzioni, per identificare anomalie e predire con precisione quando un componente si avvicina al fallimento, consentendo interventi mirati e tempestivi.
            </p>
          </div>
        </div>

        <div>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-6 text-aec-blue-dark">Tecnologie Utilizzate</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="h-8 w-8 text-aec-blue-dark mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">BIM</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Modello informativo dettagliato che fornisce dati sui componenti, relazioni spaziali e specifiche tecniche
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Database className="h-8 w-8 text-aec-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">CDE</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Archivio di dati storici su manutenzioni, guasti, performance e cicli di vita dei componenti
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Brain className="h-8 w-8 text-aec-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">AI Generativa</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Algoritmi che analizzano dati in tempo reale e storici per prevedere guasti e ottimizzare la manutenzione
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Componenti del Sistema</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Activity className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Monitoraggio IoT</h3>
              <p className="text-sm">
                Rete di sensori distribuiti che monitorano in tempo reale parametri critici dell'edificio e degli impianti.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Raccoglie:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Temperature</li>
                  <li>• Vibrazioni</li>
                  <li>• Consumi energetici</li>
                  <li>• Acustica</li>
                  <li>• Qualità dell'aria</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Database className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Data Integration</h3>
              <p className="text-sm">
                Piattaforma che integra e normalizza dati da diverse fonti, creando un modello informativo completo per l'analisi predittiva.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Fonti:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Sensori IoT</li>
                  <li>• Modello BIM</li>
                  <li>• Storico manutenzioni</li>
                  <li>• Specifiche tecniche</li>
                  <li>• Sistemi di building management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Brain className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">AI Predittiva</h3>
              <p className="text-sm">
                Algoritmi avanzati che analizzano i dati per identificare pattern, anomalie e prevedere guasti con settimane o mesi di anticipo.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Tecniche:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Machine learning</li>
                  <li>• Analisi delle serie temporali</li>
                  <li>• Digital twins</li>
                  <li>• Modelli di degrado</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Calendar className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Pianificazione Intelligente</h3>
              <p className="text-sm">
                Sistema che ottimizza la pianificazione degli interventi in base alle previsioni di guasto, disponibilità di risorse e impatto sull'operatività.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Ottimizza:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Scheduling interventi</li>
                  <li>• Allocazione risorse</li>
                  <li>• Approvvigionamento ricambi</li>
                  <li>• Minimizzazione downtime</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Flusso Operativo</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Raccolta Continua dei Dati</h3>
                    <p className="text-sm">
                      I sensori IoT monitorano continuamente parametri critici degli impianti e componenti dell'edificio.
                    </p>
                    <p className="text-sm mt-1">
                      Il sistema raccoglie anche dati da altre fonti come BMS (Building Management System) e sistemi di controllo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Analisi e Previsione</h3>
                    <p className="text-sm">
                      Gli algoritmi AI confrontano i dati con modelli noti di degrado e malfunzionamento.
                    </p>
                    <p className="text-sm mt-1">
                      Il sistema identifica anomalie e tendenze che precedono guasti, stimando probabilità e tempistiche dei potenziali problemi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Pianificazione Ottimizzata</h3>
                    <p className="text-sm">
                      Il sistema genera automaticamente piani di manutenzione ottimizzati considerando criticità, risorse, costi e impatto operativo.
                    </p>
                    <p className="text-sm mt-1">
                      Gli interventi vengono raggruppati quando possibile per minimizzare le interruzioni e massimizzare l'efficienza.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Esecuzione e Feedback</h3>
                    <p className="text-sm">
                      Tecnici eseguono gli interventi utilizzando dati contestuali dal modello BIM e istruzioni dettagliate.
                    </p>
                    <p className="text-sm mt-1">
                      I risultati degli interventi alimentano il sistema di apprendimento, migliorando continuamente i modelli predittivi.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Applicazioni Principali</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Settings className="h-8 w-8 text-aec-blue-dark" />
                  <h3 className="text-xl font-medium text-aec-blue-dark">Impianti Meccanici</h3>
                </div>
                <p className="text-sm mb-4">
                  Monitoraggio e previsione guasti di sistemi HVAC, pompe, motori e altri componenti meccanici, attraverso l'analisi di pattern di vibrazioni, temperature e parametri operativi.
                </p>
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="text-sm font-medium mb-1">Risultati tipici:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Riduzione del 73% nei guasti non pianificati e aumento del 32% della vita utile delle apparecchiature.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <AlertTriangle className="h-8 w-8 text-aec-blue-dark" />
                  <h3 className="text-xl font-medium text-aec-blue-dark">Sistemi Elettrici</h3>
                </div>
                <p className="text-sm mb-4">
                  Identificazione precoce di problemi in quadri elettrici, trasformatori e sistemi di distribuzione, attraverso monitoraggio termico, analisi delle correnti e del fattore di potenza.
                </p>
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="text-sm font-medium mb-1">Risultati tipici:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Prevenzione dell'85% dei potenziali guasti critici e riduzione del 45% nei consumi energetici legati a inefficienze.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Wrench className="h-8 w-8 text-aec-blue-dark" />
                  <h3 className="text-xl font-medium text-aec-blue-dark">Componenti Strutturali</h3>
                </div>
                <p className="text-sm mb-4">
                  Monitoraggio dell'integrità di strutture, facciate e coperture, attraverso sensori di spostamento, inclinazione e analisi di immagini per identificare degrado e potenziali problemi.
                </p>
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="text-sm font-medium mb-1">Risultati tipici:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Identificazione precoce di problemi strutturali con 6-18 mesi di anticipo rispetto ai metodi tradizionali di ispezione.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Benefici Dimostrati</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-36 w-36">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-aec-blue-dark">85%</span>
                      <p className="text-sm mt-1">Riduzione</p>
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#e9ecef" strokeWidth="2"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="100" strokeDashoffset="15" transform="rotate(-90 18 18)"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-center text-aec-blue-dark">Tempi di Inattività</h3>
              <p className="text-sm text-center">
                Riduzione dei downtime non pianificati grazie all'identificazione precoce dei problemi e alla pianificazione efficiente degli interventi.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-36 w-36">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-aec-teal">32%</span>
                      <p className="text-sm mt-1">Risparmio</p>
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#e9ecef" strokeWidth="2"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="100" strokeDashoffset="68" transform="rotate(-90 18 18)"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-center text-aec-blue-dark">Costi di Manutenzione</h3>
              <p className="text-sm text-center">
                Riduzione dei costi complessivi grazie all'ottimizzazione degli interventi, eliminazione di manutenzioni non necessarie e prevenzione di danni collaterali.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-36 w-36">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-aec-blue">+40%</span>
                      <p className="text-sm mt-1">Incremento</p>
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#e9ecef" strokeWidth="2"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="100" strokeDashoffset="60" transform="rotate(-90 18 18)"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-center text-aec-blue-dark">Vita Utile degli Asset</h3>
              <p className="text-sm text-center">
                Estensione della durata operativa degli impianti e componenti grazie a interventi tempestivi che prevengono danni irreversibili e degradi accelerati.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Case Study: Centro Direzionale</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Torre Diamante - Milano</h3>
                
                <div className="prose max-w-none text-sm">
                  <p className="mb-3">
                    Edificio direzionale di classe A di 30 piani che ha implementato un sistema di manutenzione predittiva integrato con il gemello digitale BIM e sensori IoT distribuiti.
                  </p>
                  
                  <h4 className="font-medium text-base mt-4 mb-2">Implementazione:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>Oltre 3,500 sensori IoT integrati nei sistemi HVAC, elettrici e idraulici</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>Integrazione con il modello BIM completo aggiornato durante la fase di costruzione</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>Dashboard di monitoraggio in tempo reale e sistema di allerta avanzato</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-medium text-base mt-4 mb-2">Risultati dopo 24 mesi:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>92% di riduzione dei guasti non pianificati nei sistemi critici</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>28% di risparmio sui costi totali di manutenzione</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>18% di riduzione nei consumi energetici grazie all'ottimizzazione operativa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                      <span>ROI del sistema raggiunto in soli 14 mesi dall'implementazione</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-base mb-3">Interventi Predittivi Riusciti:</h4>
                
                <div className="space-y-4">
                  <div className="border rounded-md p-3 bg-green-50">
                    <h5 className="text-sm font-medium mb-1 text-green-700">UTA Piano 18</h5>
                    <p className="text-xs">
                      Identificato imminente guasto del cuscinetto 8 settimane prima del potenziale fallimento, evitando danni al motore principale.
                    </p>
                  </div>
                  
                  <div className="border rounded-md p-3 bg-green-50">
                    <h5 className="text-sm font-medium mb-1 text-green-700">Rete Idrica</h5>
                    <p className="text-xs">
                      Rilevata micro-perdita in un tratto nascosto grazie all'analisi dei pattern di pressione, prevenendo potenziali danni strutturali.
                    </p>
                  </div>
                  
                  <div className="border rounded-md p-3 bg-green-50">
                    <h5 className="text-sm font-medium mb-1 text-green-700">Quadro Elettrico Piano -2</h5>
                    <p className="text-xs">
                      Identificato surriscaldamento progressivo di un connettore, evitando un potenziale blackout dell'area parcheggi.
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 border-t">
                    <h5 className="text-sm font-medium mb-2">ROI del Sistema:</h5>
                    <div className="h-6 bg-aec-gray-light rounded-full overflow-hidden">
                      <div className="h-full bg-aec-teal" style={{ width: '86%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs">Investimento</span>
                      <span className="text-xs font-medium">860% ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </UseCaseDetailLayout>
  );
};

export default PredictiveMaintenanceDetail;
