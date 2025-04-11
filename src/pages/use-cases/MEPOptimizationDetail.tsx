
import React from 'react';
import UseCaseDetailLayout from '@/components/UseCaseDetailLayout';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid, Settings, Wrench, Brain, Building, Database, CheckCircle } from 'lucide-react';

const MEPOptimizationDetail = () => {
  return (
    <UseCaseDetailLayout
      title="Ottimizzazione del layout impiantistico"
      description="AI generativa che analizza il modello BIM e propone automaticamente percorsi ottimali, riducendo interferenze e materiali."
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Il Problema</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La progettazione manuale di percorsi impiantistici complessi è un processo laborioso che spesso porta a interferenze tra sistemi, inefficienze energetiche e spreco di materiali.
            </p>
            <p className="mb-4">
              I progettisti MEP (Mechanical, Electrical, Plumbing) devono considerare innumerevoli variabili e vincoli: spazi disponibili, normative, costi, efficienza energetica, manutenibilità e coordinamento con altre discipline.
            </p>
            <p>
              Il processo tradizionale di clash detection e risoluzione delle interferenze avviene in fasi avanzate del progetto, quando le modifiche sono più costose e impattanti sul programma di lavoro.
            </p>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mt-12 mb-6 text-aec-blue-dark">La Soluzione</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              L'intelligenza artificiale generativa analizza il modello BIM e propone automaticamente layout impiantistici ottimizzati, considerando vincoli progettuali, spazi disponibili e requisiti prestazionali.
            </p>
            <p className="mb-4">
              Algoritmi avanzati valutano milioni di possibili configurazioni di percorso, identificando quelle che minimizzano lunghezza dei tratti, numero di curve, interferenze con altri sistemi e costi di installazione e gestione.
            </p>
            <p>
              I progettisti possono interagire con le soluzioni proposte, impostare vincoli personalizzati e guidare l'AI verso soluzioni che bilanciano efficienza tecnica, costi e altri requisiti specifici del progetto.
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
                      Modello 3D completo dell'edificio con informazioni su strutture, spazi e sistemi esistenti
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Brain className="h-8 w-8 text-aec-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">AI Generativa</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Algoritmi di ottimizzazione, machine learning e deep learning per generare e valutare layout alternativi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Database className="h-8 w-8 text-aec-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">CDE</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Archivio di standard, specifiche tecniche e normative che alimentano i vincoli della generazione AI
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Come Funziona</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <LayoutGrid className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Analisi degli Spazi</h3>
              <p className="text-sm">
                L'AI analizza il modello BIM per identificare spazi disponibili, aree di servizio, vincoli strutturali e zone riservate per altri impianti.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Input:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Modello BIM dell'edificio</li>
                  <li>• Requisiti di spazio per servizi</li>
                  <li>• Zone di accesso per manutenzione</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Settings className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Definizione dei Requisiti</h3>
              <p className="text-sm">
                I progettisti specificano requisiti funzionali, prestazionali e vincoli normativi che gli impianti devono soddisfare.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Input:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Portate e dimensioni tubazioni</li>
                  <li>• Requisiti di pendenza</li>
                  <li>• Budget e tempi di installazione</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Brain className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Generazione di Alternative</h3>
              <p className="text-sm">
                L'AI generativa produce multiple soluzioni di layout, ottimizzate per diversi parametri: lunghezza, numero di curve, costo dei materiali, efficienza energetica.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Output:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 3-5 layout alternativi</li>
                  <li>• Analisi comparativa dei costi</li>
                  <li>• Report di ottimizzazione</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-14 w-14 bg-aec-blue/10 rounded-full flex items-center justify-center mb-5">
                <Wrench className="h-8 w-8 text-aec-blue" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Raffinamento Iterativo</h3>
              <p className="text-sm">
                I progettisti valutano le proposte, forniscono feedback all'AI che perfeziona ulteriormente le soluzioni in cicli iterativi di miglioramento.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Processo:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Feedback dei progettisti</li>
                  <li>• Modifiche in tempo reale</li>
                  <li>• Documentazione automatica</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Risultati Quantificabili</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Riduzione del Materiale</h3>
                  <p className="text-sm mb-4">
                    Ottimizzazione dei percorsi che riduce la lunghezza complessiva di tubazioni e canalizzazioni
                  </p>
                  <div className="h-4 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-teal" style={{ width: '18%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-aec-teal font-medium">18% di riduzione</span>
                    <span className="text-xs text-aec-gray-dark">rispetto alla progettazione tradizionale</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Eliminazione Clash</h3>
                  <p className="text-sm mb-4">
                    Interferenze tra sistemi MEP e altri elementi dell'edificio identificate e risolte automaticamente
                  </p>
                  <div className="h-4 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-teal" style={{ width: '94%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-aec-teal font-medium">94% di risoluzione automatica</span>
                    <span className="text-xs text-aec-gray-dark">dei potenziali clash</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Tempo di Progettazione</h3>
                  <p className="text-sm mb-4">
                    Accelerazione del processo di progettazione MEP grazie all'automazione e all'ottimizzazione
                  </p>
                  <div className="h-4 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-teal" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-aec-teal font-medium">65% più veloce</span>
                    <span className="text-xs text-aec-gray-dark">rispetto ai metodi tradizionali</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Applicazioni Specifiche</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Impianti HVAC</h3>
                <p className="text-sm mb-3">
                  Ottimizzazione del layout di condotti di ventilazione, unità di trattamento aria e terminali, bilanciando efficienza energetica, costi e manutenibilità.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Efficienza energetica</span>
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Bilanciamento aria</span>
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Acustica</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Impianti Idrico-Sanitari</h3>
                <p className="text-sm mb-3">
                  Progettazione di reti di approvvigionamento e scarico che minimizzano percorsi e massimizzano l'efficienza idraulica e la facilità di manutenzione.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Pressione ottimale</span>
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Risparmio idrico</span>
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Normative igieniche</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-aec-blue-dark">Impianti Elettrici</h3>
                <p className="text-sm mb-3">
                  Layout ottimizzati per cablaggio, distribuzione elettrica e sistemi speciali che bilanciano efficienza, costi e flessibilità futura.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Cadute di tensione</span>
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">EMI/EMC</span>
                  <span className="text-xs bg-aec-blue/10 text-aec-blue-dark px-2 py-1 rounded-full">Espandibilità</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </UseCaseDetailLayout>
  );
};

export default MEPOptimizationDetail;
