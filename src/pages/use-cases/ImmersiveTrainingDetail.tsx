
import React from 'react';
import UseCaseDetailLayout from '@/components/UseCaseDetailLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Headset, Video, Book, Brain, Building, Users, CheckCircle } from 'lucide-react';

const ImmersiveTrainingDetail = () => {
  return (
    <UseCaseDetailLayout
      title="Formazione tecnica immersiva"
      description="Ambienti di training in VR basati sui modelli BIM reali, con istruzioni generate dall'AI in base al profilo dell'utente."
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Il Problema</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La formazione del personale su procedure complesse o pericolose nel settore AEC rappresenta una sfida significativa in termini di efficacia, sicurezza e costi.
            </p>
            <p className="mb-4">
              I metodi tradizionali di formazione spesso non riescono a simulare adeguatamente scenari reali, portando a un gap tra teoria e pratica che può causare errori, incidenti e inefficienze quando il personale si trova ad affrontare situazioni reali.
            </p>
            <p>
              L'addestramento sul campo comporta rischi, costi elevati e può rallentare i lavori in corso, mentre la formazione in aula è spesso percepita come astratta e difficile da trasferire nel contesto pratico.
            </p>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mt-12 mb-6 text-aec-blue-dark">La Soluzione</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Gli ambienti di training in realtà virtuale basati sui modelli BIM reali offrono un'esperienza di apprendimento immersiva, sicura ed efficace, dove gli utenti possono praticare procedure e tecniche in un ambiente virtuale che replica fedelmente quello reale.
            </p>
            <p className="mb-4">
              L'intelligenza artificiale personalizza l'esperienza formativa in base al profilo dell'utente, adattando contenuti, difficoltà e feedback in tempo reale per ottimizzare l'apprendimento.
            </p>
            <p>
              Scenari complessi o pericolosi possono essere simulati senza rischi, permettendo agli utenti di comprendere le conseguenze delle loro azioni e di ripetere le procedure fino al raggiungimento della padronanza.
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
                      Modelli dettagliati di edifici e impianti che forniscono la base geometrica e informativa per gli ambienti virtuali
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Headset className="h-8 w-8 text-aec-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Realtà Virtuale</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Tecnologia immersiva che consente agli utenti di interagire con l'ambiente virtuale in modo naturale e intuitivo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Brain className="h-8 w-8 text-aec-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">AI Generativa</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Algoritmi che personalizzano contenuti, scenari e feedback in base al profilo e alle performance dell'utente
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Caratteristiche Principali</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-aec-blue/10 rounded-full flex items-center justify-center">
                  <Book className="h-6 w-6 text-aec-blue" />
                </div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Scenari Realistici</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ambienti di cantiere, impianti e strutture riprodotti fedelmente dai modelli BIM reali</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Simulazione fisica realistica di materiali, strumenti e comportamento degli elementi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Condizioni ambientali e situazioni critiche variabili (maltempo, emergenze, guasti)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-aec-blue/10 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-aec-blue" />
                </div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Personalizzazione AI</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Adattamento dinamico della difficoltà in base alle performance dell'utente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Generazione di istruzioni e guide contestuali personalizzate per ogni ruolo professionale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Analisi predittiva delle aree di miglioramento e suggerimenti di formazione supplementare</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-aec-blue/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-aec-blue" />
                </div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Collaborazione</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Modalità multi-utente per training di team e procedure collaborative</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ruoli differenziati con responsabilità e strumenti specifici</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Istruttori virtuali o reali che possono guidare e valutare le sessioni di formazione</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Casi d'Uso Specifici</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Sicurezza in Cantiere</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Formazione su procedure di sicurezza, riconoscimento di rischi e gestione delle emergenze in ambienti di cantiere virtuali.
                </p>
                
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="font-medium text-sm mb-1">Risultati:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Riduzione del 78% degli incidenti legati a errori procedurali nei cantieri che hanno implementato questo tipo di formazione.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Include:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Uso DPI</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Lavori in quota</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Spazi confinati</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Gestione emergenze</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Manutenzione Impianti</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Training su procedure di manutenzione ordinaria e straordinaria di impianti complessi, con simulazione di guasti e procedure di risoluzione.
                </p>
                
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="font-medium text-sm mb-1">Risultati:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Aumento del 45% dell'efficienza nelle operazioni di manutenzione e riduzione del 62% dei tempi di inattività degli impianti.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Include:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Centrali termiche</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Quadri elettrici</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">UTA</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Diagnostica guasti</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Assemblaggio e Montaggio</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Formazione su procedure di assemblaggio di componenti prefabbricati, montaggio di elementi strutturali e installazione di sistemi complessi.
                </p>
                
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="font-medium text-sm mb-1">Risultati:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Riduzione del 40% dei tempi di montaggio e del 67% degli errori di installazione dopo l'implementazione del training VR.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Include:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Elementi prefabbricati</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Sequenze di montaggio</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Connessioni strutturali</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-aec-blue text-white flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-medium text-aec-blue-dark">Gestione di Edifici</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Training per facility manager e personale di gestione su procedure operative, sistemi di controllo e gestione delle emergenze negli edifici.
                </p>
                
                <div className="border-l-4 border-aec-blue pl-4 py-2">
                  <h4 className="font-medium text-sm mb-1">Risultati:</h4>
                  <p className="text-xs text-aec-gray-dark">
                    Riduzione del 25% dei costi operativi e miglioramento del 35% nei tempi di risposta alle emergenze negli edifici gestiti.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Include:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">BMS</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Antincendio</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Evacuazione</span>
                    <span className="text-xs bg-aec-gray-light px-2 py-1 rounded-full">Ottimizzazione energetica</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Dimostrazione</h2>
        
        <div className="aspect-video bg-aec-gray-light rounded-lg flex items-center justify-center">
          <div className="text-center p-8">
            <Headset className="h-16 w-16 text-aec-blue mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Esperienza Immersiva</h3>
            <p className="max-w-md mx-auto text-sm">
              Questa è un'area dimostrativa che in un'implementazione reale conterrebbe un video o un'esperienza interattiva che mostra il sistema di training VR in azione.
            </p>
          </div>
        </div>
      </section>
    </UseCaseDetailLayout>
  );
};

export default ImmersiveTrainingDetail;
