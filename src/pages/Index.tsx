
import React from 'react';
import { Building2, Brain, Database, VrHeadset, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TechCard from "@/components/TechCard";
import UseCaseCard from "@/components/UseCaseCard";
import IntegrationChart from "@/components/IntegrationChart";
import ProjectBrowser from "@/components/ProjectBrowser";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4 tracking-tight animate-fade-in">
              AECFusion
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Integrazione sinergica di BIM, Realtà Mista, AI Generativa e Archivio Digitale
              per trasformare il settore AEC
            </p>
            <Button size="lg" className="bg-white text-aec-blue-dark hover:bg-aec-gray">
              Esplora la piattaforma
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Tecnologie integrate */}
        <section>
          <Header 
            title="Tecnologie Integrate" 
            description="La nostra piattaforma unisce quattro tecnologie chiave per risolvere le sfide del settore AEC"
            className="mb-8 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard
              title="BIM"
              description="Building Information Modeling: il cuore digitale del progetto che contiene informazioni geometriche e non-geometriche."
              icon={Building2}
              benefits={["Collaborazione", "Coordinamento", "Visualizzazione", "Dati strutturati"]}
              color="bg-aec-blue-dark"
            />
            <TechCard
              title="Realtà Mista"
              description="AR e VR per sovrapporre informazioni digitali al mondo reale o immergersi completamente nel progetto virtuale."
              icon={VrHeadset}
              benefits={["Visualizzazione", "Training", "Verifica in cantiere", "Collaborazione remota"]}
              color="bg-aec-blue"
            />
            <TechCard
              title="AI Generativa"
              description="Algoritmi avanzati che creano nuovi contenuti, ottimizzano processi e generano insight da grandi quantità di dati."
              icon={Brain}
              benefits={["Automazione", "Ottimizzazione", "Predizione", "Reportistica"]}
              color="bg-aec-teal"
            />
            <TechCard
              title="Archivio Digitale / CDE"
              description="Common Data Environment: piattaforma centralizzata per archiviare, gestire e condividere documenti e informazioni."
              icon={Database}
              benefits={["Centralizzazione", "Tracciabilità", "Versioning", "Accessibilità"]}
              color="bg-aec-blue-dark"
            />
          </div>
        </section>

        {/* Integrazione delle tecnologie */}
        <section>
          <Header 
            title="Integrazione Sinergica" 
            description="Le quattro tecnologie lavorano insieme creando un ecosistema digitale collaborativo"
            className="mb-8 text-center"
          />

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <IntegrationChart />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-aec-gray">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-aec-blue-dark flex items-center">
                <Zap className="mr-2 h-5 w-5 text-aec-teal" />
                Benefici dell'Integrazione
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-aec-blue-dark text-white flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                  <p>Comunicazione migliorata tra tutti gli attori del progetto, con dati condivisi e visualizzati in modo intuitivo</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-aec-blue text-white flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                  <p>Accesso immediato alle informazioni rilevanti, sia in ufficio che in cantiere, con contesto visualizzato tramite AR</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-aec-teal text-white flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                  <p>Riduzione significativa dei costi grazie all'individuazione precoce di problemi e all'ottimizzazione automatica</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-aec-blue-dark text-white flex items-center justify-center text-sm mr-3 mt-0.5">4</div>
                  <p>Vera integrazione tra discipline, fasi e software attraverso standard aperti e piattaforme interoperabili</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-aec-blue text-white flex items-center justify-center text-sm mr-3 mt-0.5">5</div>
                  <p>Gestione documentale efficiente con automazione, tracciabilità e organizzazione intelligente</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-aec-gray">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-aec-blue-dark flex items-center">
                <Zap className="mr-2 h-5 w-5 text-aec-teal" />
                Implementazione Graduale
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Fase 1: Fondamenta</h4>
                  <p className="text-sm">Implementazione di CDE e BIM di base per stabilire il flusso informativo centrale</p>
                  <div className="mt-2 h-2 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-blue-dark" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Fase 2: Espansione</h4>
                  <p className="text-sm">Integrazione della Realtà Mista su progetti pilota per verifiche in cantiere e revisioni immersive</p>
                  <div className="mt-2 h-2 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-blue" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Fase 3: Intelligenza</h4>
                  <p className="text-sm">Aggiunta di soluzioni di AI Generativa per automazione, ottimizzazione e analisi predittive</p>
                  <div className="mt-2 h-2 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-teal" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Fase 4: Evoluzione continua</h4>
                  <p className="text-sm">Affinamento del sistema integrato con feedback dagli utenti e nuove tecnologie</p>
                  <div className="mt-2 h-2 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-gray-dark" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casi d'uso */}
        <section>
          <Header 
            title="Casi d'uso" 
            description="Esempi concreti di come la piattaforma integrata risolve problemi reali nel settore AEC"
            className="mb-8 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="Revisione di progetto collaborativa"
              problem="Team multidisciplinari che faticano a coordinarsi e a comunicare in modo efficace su aspetti tecnici del progetto."
              solution="Sessioni di revisione immersive in VR dove tutti gli stakeholder possono interagire con il modello BIM e discutere soluzioni, anche da remoti."
              technologies={["BIM", "Realtà Virtuale", "CDE"]}
            />
            <UseCaseCard
              title="Verifica in cantiere con AR"
              problem="Difficoltà nel verificare che la costruzione segua esattamente il progetto, con errori scoperti troppo tardi."
              solution="Visualizzazione in AR del modello BIM sovrapposto alla costruzione reale, con accesso immediato ai documenti tecnici dal CDE."
              technologies={["BIM", "Realtà Aumentata", "CDE"]}
            />
            <UseCaseCard
              title="Ottimizzazione del layout impiantistico"
              problem="Progettazione manuale di percorsi impiantistici complessi che spesso porta a interferenze e inefficienze."
              solution="AI generativa che analizza il modello BIM e propone automaticamente percorsi ottimali, riducendo interferenze e materiali."
              technologies={["BIM", "AI Generativa", "CDE"]}
            />
            <UseCaseCard
              title="Formazione tecnica immersiva"
              problem="Difficoltà nel formare il personale su procedure complesse o pericolose in modo efficace e sicuro."
              solution="Ambienti di training in VR basati sui modelli BIM reali, con istruzioni generate dall'AI in base al profilo dell'utente."
              technologies={["BIM", "Realtà Virtuale", "AI Generativa"]}
            />
            <UseCaseCard
              title="Reportistica automatizzata intelligente"
              problem="Ore spese nella creazione manuale di report di avanzamento, con informazioni spesso obsolete o incomplete."
              solution="Generazione automatica di report personalizzati basati sui dati più recenti dal BIM/CDE, con analisi AI delle tendenze e dei rischi."
              technologies={["CDE", "AI Generativa", "BIM"]}
            />
            <UseCaseCard
              title="Manutenzione predittiva"
              problem="Manutenzione reattiva costosa e interruzioni non pianificate dell'operatività dell'edificio."
              solution="Sistema che combina dati BIM, storici dal CDE e analisi AI per prevedere quando e dove sarà necessaria manutenzione."
              technologies={["BIM", "CDE", "AI Generativa"]}
            />
          </div>
        </section>

        {/* Browser di progetto */}
        <section>
          <Header 
            title="Browser di Progetto" 
            description="Esplora un progetto dimostrativo gestito con il nostro sistema integrato"
            className="mb-8 text-center"
          />

          <div className="bg-white rounded-lg shadow-md p-6 border border-aec-gray">
            <ProjectBrowser />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-aec-blue-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins text-xl mb-4">AECFusion</h2>
          <p className="max-w-md mx-auto mb-6 text-sm opacity-80">
            Trasformiamo il settore delle costruzioni integrando BIM, Realtà Mista,
            AI Generativa e Archivio Digitale in una soluzione completa e sinergica.
          </p>
          <p className="text-xs opacity-70">© 2025 AECFusion. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
