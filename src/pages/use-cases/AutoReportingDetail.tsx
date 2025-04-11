
import React from 'react';
import UseCaseDetailLayout from '@/components/UseCaseDetailLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, ChartBar, Database, Clock, Target, CheckCircle, BarChart3 } from 'lucide-react';

const AutoReportingDetail = () => {
  return (
    <UseCaseDetailLayout
      title="Reportistica automatizzata intelligente"
      description="Generazione automatica di report personalizzati basati sui dati più recenti dal BIM/CDE, con analisi AI delle tendenze e dei rischi."
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Il Problema</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La creazione manuale di report di avanzamento e analisi nel settore AEC è un processo che richiede molto tempo, è soggetto a errori e spesso produce risultati con informazioni già obsolete al momento della pubblicazione.
            </p>
            <p className="mb-4">
              I project manager, i clienti e altri stakeholder necessitano di dati aggiornati e analisi approfondite per prendere decisioni informate, ma i metodi tradizionali di reportistica non riescono a soddisfare questa esigenza in modo efficiente.
            </p>
            <p>
              L'eterogeneità dei dati provenienti da diverse fonti (BIM, sistemi di project management, monitoraggio del cantiere, ecc.) rende difficile creare report coerenti, completi e facilmente comprensibili per tutti gli attori coinvolti.
            </p>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mt-12 mb-6 text-aec-blue-dark">La Soluzione</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La reportistica automatizzata intelligente utilizza l'intelligenza artificiale per raccogliere, analizzare e presentare i dati più recenti dal BIM e dal CDE in report personalizzati per diversi stakeholder, generati su richiesta o secondo scadenze predefinite.
            </p>
            <p className="mb-4">
              Gli algoritmi di AI identificano automaticamente tendenze, anomalie e potenziali rischi nei dati, fornendo non solo informazioni descrittive ma anche analisi predittive e raccomandazioni proattive.
            </p>
            <p>
              I report vengono personalizzati in base al ruolo e alle esigenze specifiche del destinatario, presentando le informazioni più rilevanti nel formato più accessibile (testo, grafici, visualizzazioni 3D, dashboard interattive).
            </p>
          </div>
        </div>

        <div>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-6 text-aec-blue-dark">Tecnologie Utilizzate</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-aec-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">CDE</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Fonte centrale di dati documentali, cronologia delle versioni e informazioni di progetto
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Database className="h-8 w-8 text-aec-blue-dark mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">BIM</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Modello informativo che fornisce dati geometrici, quantitativi e qualitativi sugli elementi del progetto
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ChartBar className="h-8 w-8 text-aec-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">AI Generativa</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Algoritmi di analisi, elaborazione del linguaggio naturale e generazione di contenuti personalizzati
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Tipologie di Report</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-aec-blue/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-aec-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Report di Avanzamento</h3>
              <p className="text-sm mb-4">
                Analisi dettagliata dello stato di avanzamento del progetto rispetto al programma, con identificazione automatica delle attività critiche e a rischio.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Attività completate</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                  <div className="h-full bg-aec-blue" style={{ width: '68%' }}></div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span>Budget utilizzato</span>
                  <span className="font-medium">72%</span>
                </div>
                <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                  <div className="h-full bg-aec-teal" style={{ width: '72%' }}></div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span>Rischio ritardo</span>
                  <span className="font-medium text-yellow-500">Medio</span>
                </div>
                <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: '45%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-aec-blue/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-aec-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Report di Qualità</h3>
              <p className="text-sm mb-4">
                Monitoraggio automatico di parametri di qualità, conformità a standard e normative, e controllo delle non conformità.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Conformità normativa</h4>
                    <p className="text-xs text-aec-gray-dark">96% conforme, 4% in revisione</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Standard qualitativi</h4>
                    <p className="text-xs text-aec-gray-dark">92% conforme, 8% da verificare</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Non conformità</h4>
                    <p className="text-xs text-aec-gray-dark">12 identificate, 7 risolte, 5 in corso</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-aec-blue/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-aec-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Report Predittivo</h3>
              <p className="text-sm mb-4">
                Analisi AI che identifica tendenze, prevede potenziali problemi futuri e suggerisce azioni preventive.
              </p>
              
              <div className="border-l-4 border-aec-teal pl-4 py-2 mb-4">
                <h4 className="text-sm font-medium mb-1">Trend identificati</h4>
                <p className="text-xs text-aec-gray-dark">
                  Ritardi sistematici nelle consegne di materiali specifici che potrebbero impattare le attività delle prossime 3 settimane.
                </p>
              </div>
              
              <div className="border-l-4 border-aec-blue pl-4 py-2">
                <h4 className="text-sm font-medium mb-1">Azioni suggerite</h4>
                <ul className="text-xs text-aec-gray-dark space-y-1">
                  <li>• Contattare fornitori alternativi</li>
                  <li>• Riorganizzare sequenza attività</li>
                  <li>• Valutare materiali sostitutivi</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Personalizzazione per Ruoli</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6 text-aec-blue-dark">Stakeholder e Focus</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="h-10 w-10 rounded-full bg-aec-blue-dark text-white flex items-center justify-center font-medium text-sm">PM</div>
                  <div>
                    <h4 className="font-medium mb-1">Project Manager</h4>
                    <p className="text-sm text-aec-gray-dark mb-2">
                      Visione completa con focus su avanzamento, costi, rischi e decisioni critiche
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">KPI</span>
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Path critico</span>
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Analisi rischi</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-medium text-sm">CL</div>
                  <div>
                    <h4 className="font-medium mb-1">Cliente</h4>
                    <p className="text-sm text-aec-gray-dark mb-2">
                      Report executive con informazioni su milestone, budget e impatti sul business
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">ROI</span>
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Milestone</span>
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Qualità</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-aec-teal text-white flex items-center justify-center font-medium text-sm">TM</div>
                  <div>
                    <h4 className="font-medium mb-1">Team Tecnico</h4>
                    <p className="text-sm text-aec-gray-dark mb-2">
                      Report dettagliati su aspetti tecnici, problemi di coordinamento e soluzioni tecniche
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Clash</span>
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Specifiche</span>
                      <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6 text-aec-blue-dark">Formati e Distribuzione</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Formato dei Report</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-aec-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium">Documenti Interattivi</span>
                        <p className="text-xs text-aec-gray-dark">PDF navigabili con link a modelli 3D e dashboard live</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 text-aec-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium">Dashboard</span>
                        <p className="text-xs text-aec-gray-dark">Visualizzazioni interattive con filtri e drill-down personalizzati</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-aec-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium">Feed Dati</span>
                        <p className="text-xs text-aec-gray-dark">API per l'integrazione con sistemi esterni e strumenti specifici</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Modalità di Distribuzione</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-aec-teal flex-shrink-0" />
                      <span className="text-sm">Notifiche automatiche pianificate (giornaliere, settimanali, mensili)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-aec-teal flex-shrink-0" />
                      <span className="text-sm">Report on-demand generati tramite interfaccia user-friendly</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-aec-teal flex-shrink-0" />
                      <span className="text-sm">Alert automatici quando KPI critici escono dai parametri definiti</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-aec-teal flex-shrink-0" />
                      <span className="text-sm">Accesso mobile tramite app dedicata per consultazione in movimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Implementazione e Benefici</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark border-b pb-2">Implementazione</h3>
              
              <ol className="space-y-3 mt-4">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-aec-blue text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-sm font-medium">Configurazione Iniziale</h4>
                    <p className="text-xs text-aec-gray-dark">Mappatura delle fonti dati e definizione dei modelli di report</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-aec-blue text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-sm font-medium">Personalizzazione</h4>
                    <p className="text-xs text-aec-gray-dark">Adattamento dei template ai ruoli specifici e alle esigenze del progetto</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-aec-blue text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-sm font-medium">Apprendimento AI</h4>
                    <p className="text-xs text-aec-gray-dark">Training del sistema con dati storici e feedback continuo</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-aec-blue text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h4 className="text-sm font-medium">Integrazione</h4>
                    <p className="text-xs text-aec-gray-dark">Connessione con sistemi esistenti tramite API e connectori</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark border-b pb-2">Benefici Misurabili</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-aec-teal">Efficienza</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Tempo risparmiato nella creazione di report</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-aec-teal" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Accuratezza dei dati</span>
                        <span className="text-sm font-medium">97%</span>
                      </div>
                      <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-aec-teal" style={{ width: '97%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Tempestività delle informazioni</span>
                        <span className="text-sm font-medium">Real-time</span>
                      </div>
                      <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-aec-teal" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-aec-blue">Impatto sul Progetto</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Riduzione ritardi di progetto</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-aec-blue" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Miglioramento qualità decisionale</span>
                        <span className="text-sm font-medium">48%</span>
                      </div>
                      <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-aec-blue" style={{ width: '48%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">ROI sull'implementazione</span>
                        <span className="text-sm font-medium">560%</span>
                      </div>
                      <div className="h-2 bg-aec-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-aec-blue" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </UseCaseDetailLayout>
  );
};

export default AutoReportingDetail;
