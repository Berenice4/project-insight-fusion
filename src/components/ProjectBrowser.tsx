
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Building, FileText, Hammer, PieChart, Users } from 'lucide-react';

const ProjectBrowser = () => {
  return (
    <Tabs defaultValue="model" className="w-full">
      <TabsList className="w-full grid grid-cols-5 mb-6">
        <TabsTrigger value="model" className="flex gap-2 items-center">
          <Building className="h-4 w-4" />
          <span className="hidden sm:inline">Modello</span>
        </TabsTrigger>
        <TabsTrigger value="documents" className="flex gap-2 items-center">
          <FileText className="h-4 w-4" />
          <span className="hidden sm:inline">Documenti</span>
        </TabsTrigger>
        <TabsTrigger value="team" className="flex gap-2 items-center">
          <Users className="h-4 w-4" />
          <span className="hidden sm:inline">Team</span>
        </TabsTrigger>
        <TabsTrigger value="stats" className="flex gap-2 items-center">
          <PieChart className="h-4 w-4" />
          <span className="hidden sm:inline">Statistiche</span>
        </TabsTrigger>
        <TabsTrigger value="tasks" className="flex gap-2 items-center">
          <Hammer className="h-4 w-4" />
          <span className="hidden sm:inline">Attività</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="model" className="mt-0">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="aspect-video bg-aec-gray-light rounded-md border overflow-hidden flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="font-poppins text-xl mb-2 text-aec-blue-dark">Visualizzazione BIM</h3>
                <p className="text-sm text-aec-gray-dark max-w-md mx-auto">
                  Il modello BIM integrato consente a tutti gli attori di visualizzare e interagire con il gemello digitale dell'edificio, garantendo decisioni basate su dati accurati e aggiornati.
                </p>
                <div className="text-xs text-aec-gray-dark mt-4">
                  [Questa è un'area di visualizzazione del modello 3D interattivo]
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-md border">
                <h4 className="font-medium text-sm mb-1">Elementi nel modello</h4>
                <p className="text-2xl font-bold text-aec-blue-dark">1,248</p>
                <p className="text-xs text-aec-gray-dark">Tutti aggiornati</p>
              </div>
              <div className="bg-white p-3 rounded-md border">
                <h4 className="font-medium text-sm mb-1">Conflitti rilevati</h4>
                <p className="text-2xl font-bold text-destructive">8</p>
                <p className="text-xs text-aec-gray-dark">2 risolti oggi</p>
              </div>
              <div className="bg-white p-3 rounded-md border">
                <h4 className="font-medium text-sm mb-1">Revisione attuale</h4>
                <p className="text-2xl font-bold text-aec-blue-dark">v2.4</p>
                <p className="text-xs text-aec-gray-dark">Aggiornato 2 giorni fa</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="documents" className="mt-0">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="font-poppins text-lg">Archivio Digitale (CDE)</h3>
              <p className="text-sm text-aec-gray-dark">Tutti i documenti sono centralizzati, versionati e accessibili in base ai permessi.</p>
              
              <div className="border rounded-md">
                <div className="bg-aec-gray-light px-4 py-2 border-b flex justify-between items-center">
                  <h4 className="font-medium text-sm">Documenti recenti</h4>
                  <button className="text-xs text-aec-blue hover:text-aec-blue-dark">Mostra tutti</button>
                </div>
                <div className="divide-y">
                  <div className="px-4 py-3 flex items-center justify-between hover:bg-aec-gray-light/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-aec-blue" />
                      <span className="text-sm">Relazione strutturale.pdf</span>
                    </div>
                    <span className="text-xs text-aec-gray-dark">Aggiornato ieri</span>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between hover:bg-aec-gray-light/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-aec-blue" />
                      <span className="text-sm">Piano di cantiere.xlsx</span>
                    </div>
                    <span className="text-xs text-aec-gray-dark">Aggiornato 3 giorni fa</span>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between hover:bg-aec-gray-light/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-aec-blue" />
                      <span className="text-sm">Verbale riunione 12/04.docx</span>
                    </div>
                    <span className="text-xs text-aec-gray-dark">Aggiornato 2 giorni fa</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="team" className="mt-0">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="font-poppins text-lg">Team di Progetto</h3>
              <p className="text-sm text-aec-gray-dark">La comunicazione tra gli attori è facilitata dall'integrazione tra BIM, CDE e strumenti collaborativi.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium">Team Architettonico</h4>
                  <p className="text-sm text-aec-gray-dark">5 membri</p>
                  <div className="mt-2 flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-aec-blue text-white flex items-center justify-center text-xs border-2 border-white">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="font-medium">Team Strutturale</h4>
                  <p className="text-sm text-aec-gray-dark">3 membri</p>
                  <div className="mt-2 flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-aec-blue-dark text-white flex items-center justify-center text-xs border-2 border-white">
                        {String.fromCharCode(74 + i)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="font-medium">Team Impiantistico</h4>
                  <p className="text-sm text-aec-gray-dark">4 membri</p>
                  <div className="mt-2 flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-aec-teal text-white flex items-center justify-center text-xs border-2 border-white">
                        {String.fromCharCode(84 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="stats" className="mt-0">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="font-poppins text-lg">Statistiche di Progetto</h3>
              <p className="text-sm text-aec-gray-dark">L'analisi dei dati migliora la trasparenza e supporta decisioni basate su fatti concreti.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-sm mb-2">Avanzamento del Progetto</h4>
                  <div className="h-4 bg-aec-gray-light rounded-full overflow-hidden">
                    <div className="h-full bg-aec-blue" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-aec-gray-dark">0%</span>
                    <span className="text-xs font-medium">65%</span>
                    <span className="text-xs text-aec-gray-dark">100%</span>
                  </div>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium text-sm mb-2">Problemi Risolti vs Aperti</h4>
                  <div className="flex items-end h-32 gap-4">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-aec-blue rounded-t-sm" style={{ height: '80%' }}></div>
                      <span className="text-xs mt-1">Risolti (40)</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-aec-gray rounded-t-sm" style={{ height: '20%' }}></div>
                      <span className="text-xs mt-1">Aperti (10)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="tasks" className="mt-0">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="font-poppins text-lg">Attività di Progetto</h3>
              <p className="text-sm text-aec-gray-dark">La gestione centralizzata delle attività migliora la coordinazione e riduce i tempi di attesa.</p>
              
              <div className="border rounded-md">
                <div className="bg-aec-gray-light px-4 py-2 border-b">
                  <h4 className="font-medium text-sm">Attività recenti</h4>
                </div>
                <div className="divide-y">
                  <div className="px-4 py-3 flex items-center gap-3 hover:bg-aec-gray-light/50">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-sm flex-grow">Revisione conflitti nell'area servizi</span>
                    <span className="text-xs text-aec-gray-dark whitespace-nowrap">Scadenza: oggi</span>
                  </div>
                  <div className="px-4 py-3 flex items-center gap-3 hover:bg-aec-gray-light/50">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm flex-grow">Aggiornamento parametri energetici</span>
                    <span className="text-xs text-aec-gray-dark whitespace-nowrap">Completato</span>
                  </div>
                  <div className="px-4 py-3 flex items-center gap-3 hover:bg-aec-gray-light/50">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm flex-grow">Verifica normativa antincendio</span>
                    <span className="text-xs text-aec-gray-dark whitespace-nowrap">Scadenza: domani</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectBrowser;
