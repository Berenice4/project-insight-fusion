
import React from "react";
import { Layers, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CoordinationDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-aec-blue text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla home
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <Layers className="h-8 w-8" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl font-bold">Coordinamento</h1>
          </div>
          
          <p className="mt-4 max-w-2xl text-white/90 text-lg">
            Migliora la gestione e l'allineamento tra le diverse discipline e fasi di progetto,
            riducendo errori e conflitti.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Image section */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/coordination-team.jpg" 
                alt="Team di coordinamento che analizza un progetto" 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-aec-blue-dark">Il Coordinamento nel settore AEC</h2>
              <p className="text-gray-700">
                Nel settore dell'architettura, ingegneria e costruzione (AEC), il coordinamento efficace 
                tra le diverse discipline coinvolte è fondamentale per il successo di un progetto. La nostra 
                soluzione integrata facilita questo processo critico, riducendo le interferenze, ottimizzando 
                la pianificazione e garantendo che tutti gli attori abbiano una visione chiara e comune 
                degli obiettivi e dei vincoli progettuali.
              </p>
              
              <h3 className="text-xl font-semibold text-aec-blue-dark mt-6">Sfide tradizionali</h3>
              <p className="text-gray-700">
                Storicamente, il coordinamento tra discipline ha rappresentato una delle maggiori sfide 
                del settore, con conseguenti ritardi, costi imprevisti e rifacimenti. La frammentazione 
                dei dati, l'uso di strumenti non interoperabili e i processi di revisione manuali hanno 
                ostacolato una vera collaborazione interdisciplinare.
              </p>
              
              <h3 className="text-xl font-semibold text-aec-blue-dark mt-6">La nostra soluzione</h3>
              <p className="text-gray-700">
                AECFusion affronta queste sfide integrando BIM, Realtà Mista, AI Generativa e CDE in un 
                ecosistema coerente che facilita il coordinamento attraverso:
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <Card className="border-l-4 border-l-aec-blue">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Rilevamento automatico delle interferenze</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Identifica e risolvi le collisioni tra sistemi diversi (strutturale, 
                    impiantistico, architettonico) prima che diventino problemi in cantiere.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-aec-teal">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Workflow di revisione collaborativi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Processi strutturati per revisioni interdisciplinari con assegnazione 
                    di compiti, tracciamento dello stato e notifiche automatiche.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-aec-blue-dark">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Gestione delle modifiche</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sistema integrato per valutare l'impatto delle modifiche su tutte le 
                    discipline coinvolte, con analisi di propagazione degli effetti.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-aec-blue">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Dashboard di coordinamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Visualizzazioni centralizzate dello stato del progetto con metriche 
                    chiave, problemi aperti e progressi per ogni disciplina.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Case study */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 mt-8">
              <h3 className="text-xl font-semibold text-aec-blue-dark mb-4">Case study: Ospedale San Raffaele</h3>
              <p className="text-gray-700 mb-4">
                Nel progetto di ampliamento dell'Ospedale San Raffaele, la nostra soluzione di coordinamento 
                ha permesso di ridurre le interferenze impiantistiche del 78%, abbattendo i tempi di 
                coordinamento del 45% e contribuendo a completare il progetto con 3 mesi di anticipo 
                rispetto alla pianificazione originale.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>78% riduzione interferenze</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>45% tempo risparmiato</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>3 mesi in anticipo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Benefici correlati</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/collaboration" className="block p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-aec-blue-dark mb-1">Collaborazione</div>
                  <p className="text-sm text-gray-600">Facilita il lavoro di squadra tra tutti gli attori coinvolti nel progetto</p>
                </Link>
                <div className="p-3 rounded-md bg-gray-50">
                  <div className="font-medium text-aec-blue-dark mb-1">Visualizzazione</div>
                  <p className="text-sm text-gray-600">Rappresenta graficamente informazioni complesse in modo comprensibile</p>
                </div>
                <div className="p-3 rounded-md bg-gray-50">
                  <div className="font-medium text-aec-blue-dark mb-1">Dati Strutturati</div>
                  <p className="text-sm text-gray-600">Organizza le informazioni in modo logico e accessibile</p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vantaggi specifici</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Riduce le interferenze tra sistemi",
                    "Ottimizza la pianificazione temporale",
                    "Facilita il tracciamento delle modifiche",
                    "Migliora la gestione delle revisioni",
                    "Aumenta la trasparenza del processo",
                    "Standardizza le procedure di coordinamento",
                    "Riduce i costi di costruzione",
                    "Accelera i tempi di consegna",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={cn(
                        "h-4 w-4 mt-1",
                        i % 3 === 0 ? "text-aec-blue-dark" : 
                        i % 3 === 1 ? "text-aec-blue" : "text-aec-teal"
                      )} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-aec-blue to-aec-blue-dark text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Pronto a migliorare il coordinamento?</h3>
                <p className="mb-4 text-white/80">
                  Scopri come la nostra soluzione integrata può ottimizzare il coordinamento del tuo progetto.
                </p>
                <Button variant="secondary" className="w-full">
                  Richiedi una demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related content section */}
      <div className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8 text-aec-blue-dark">Risorse correlate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Webinar: Coordinamento multidisciplinare efficace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Scopri le migliori pratiche per il coordinamento tra le diverse discipline progettuali utilizzando 
                  le tecnologie integrate.
                </p>
                <Button variant="outline" className="w-full">Guarda il webinar</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Whitepaper: ROI del coordinamento digitale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Analisi dettagliata dei benefici economici derivanti dall'implementazione di processi di 
                  coordinamento digitale avanzati.
                </p>
                <Button variant="outline" className="w-full">Scarica PDF</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tutorial: Workflow di coordinamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Video tutorial passo-passo su come configurare e utilizzare i nostri strumenti di coordinamento 
                  per massimizzare l'efficienza.
                </p>
                <Button variant="outline" className="w-full">Vedi i tutorial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-aec-blue-dark text-white py-8 mt-auto">
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

export default CoordinationDetail;
