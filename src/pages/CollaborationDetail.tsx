
import React from 'react';
import { Users, ArrowLeft, CheckCircle2, UsersRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const CollaborationDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Header con navigazione */}
      <div className="bg-aec-blue text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-aec-blue-dark">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Torna alla Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 py-12">
        <Header 
          title="Collaborazione" 
          description="Come la nostra piattaforma integrata trasforma la collaborazione nel settore AEC"
          className="mb-12 text-center"
        />

        {/* Introduzione */}
        <div className="max-w-3xl mx-auto mb-12 bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-full bg-aec-blue/10">
              <Users className="h-8 w-8 text-aec-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-aec-blue-dark mb-2">Collaborazione Senza Barriere</h2>
              <p className="text-gray-700">
                La collaborazione efficace è la chiave del successo nei progetti AEC moderni. La nostra piattaforma 
                integrata elimina le barriere tradizionali e crea un ambiente di lavoro veramente collaborativo 
                tra tutti gli attori coinvolti, indipendentemente dalla loro ubicazione fisica o disciplina.
              </p>
            </div>
          </div>
        </div>

        {/* Descrizione dei vantaggi con casi d'uso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-aec-blue-dark mb-4 flex items-center">
                <UsersRound className="h-5 w-5 mr-2 text-aec-teal" />
                Collaborazione Multidisciplinare
              </h3>
              <p className="mb-4 text-gray-700">
                La piattaforma consente ai team di architettura, ingegneria, costruzione e gestione 
                di lavorare insieme su un modello BIM condiviso, ciascuno con la propria specializzazione 
                ma tutti contribuendo allo stesso ecosistema informativo.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Caso d'uso:</span> Durante la fase di progettazione, 
                    l'ingegnere strutturale può vedere in tempo reale le modifiche apportate dall'architetto 
                    e valutare immediatamente l'impatto sulle strutture.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Risultato:</span> Riduzione del 40% nei conflitti 
                    interdisciplinari e diminuzione del 25% nei tempi di coordinamento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-aec-blue-dark mb-4 flex items-center">
                <UsersRound className="h-5 w-5 mr-2 text-aec-teal" />
                Collaborazione Remota in Tempo Reale
              </h3>
              <p className="mb-4 text-gray-700">
                Con l'integrazione della Realtà Mista, i membri del team possono collaborare come 
                se fossero nello stesso spazio fisico, anche se geograficamente distanti, visualizzando 
                e interagendo con il modello BIM in un ambiente virtuale condiviso.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Caso d'uso:</span> Un team di progetto distribuito 
                    tra Milano, Roma e Napoli si riunisce settimanalmente in uno spazio VR per rivedere 
                    gli avanzamenti, identificare problemi e prendere decisioni condivise.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Risultato:</span> Riduzione del 60% nelle trasferte, 
                    aumento del 35% nella frequenza delle revisioni collaborative e decisioni più rapide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seconda riga di carte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-aec-blue-dark mb-4 flex items-center">
                <UsersRound className="h-5 w-5 mr-2 text-aec-teal" />
                Collaborazione con il Cliente
              </h3>
              <p className="mb-4 text-gray-700">
                La visualizzazione immersiva permette di coinvolgere il cliente nel processo 
                progettuale, mostrando in modo intuitivo concetti complessi e raccogliendo 
                feedback diretto e preciso in tempo reale.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Caso d'uso:</span> In una sessione di revisione, 
                    il cliente può "camminare" virtualmente all'interno dell'edificio progettato e 
                    fornire feedback immediato che viene registrato e geo-localizzato nel modello BIM.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Risultato:</span> Aumento del 70% nella soddisfazione 
                    del cliente, riduzione del 45% nelle richieste di modifica tardive e approvazioni più rapide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-aec-blue-dark mb-4 flex items-center">
                <UsersRound className="h-5 w-5 mr-2 text-aec-teal" />
                Collaborazione Cantiere-Ufficio
              </h3>
              <p className="mb-4 text-gray-700">
                L'integrazione tra Realtà Aumentata, BIM e CDE consente una comunicazione fluida e 
                contestuale tra il personale in cantiere e i progettisti in ufficio, risolvendo 
                rapidamente problemi e dubbi durante la fase costruttiva.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Caso d'uso:</span> Un capo cantiere utilizza un 
                    tablet AR per visualizzare il modello BIM sovrapposto alla costruzione reale, identifica 
                    una discrepanza e avvia una videochiamata con il progettista, condividendo la vista AR.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Risultato:</span> Riduzione del 30% nei tempi di 
                    risoluzione dei problemi in cantiere e diminuzione del 20% nei costi associati a errori costruttivi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Caso di studio */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-aec-blue/5 to-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-aec-blue-dark mb-4">Caso di Studio: Complesso Residenziale Parco Verde</h3>
              
              <p className="mb-6 text-gray-700">
                Un progetto residenziale di 5 edifici con 120 unità abitative ha implementato la nostra 
                piattaforma integrata con focus sulla collaborazione. I risultati sono stati significativi:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-aec-teal mb-1">30%</p>
                  <p className="text-sm text-gray-600">Riduzione nei tempi di progettazione</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-aec-teal mb-1">45%</p>
                  <p className="text-sm text-gray-600">Riduzione negli errori costruttivi</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-aec-teal mb-1">20%</p>
                  <p className="text-sm text-gray-600">Risparmio sui costi totali</p>
                </div>
              </div>
              
              <p className="italic text-gray-600 border-l-4 border-aec-teal pl-4">
                "La piattaforma ha trasformato il nostro modo di lavorare. La collaborazione tra i nostri team 
                interni, i consulenti esterni e i responsabili di cantiere è diventata senza soluzione di 
                continuità. Abbiamo eliminato le incomprensioni e accelerato significativamente i processi decisionali."
                <br />
                <span className="mt-2 block font-medium">— Ing. Marco Bianchi, Direttore di Progetto</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-aec-blue-dark text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins text-xl mb-3">AECFusion</h2>
          <p className="max-w-md mx-auto mb-4 text-sm opacity-80">
            Trasformiamo la collaborazione nel settore AEC integrando BIM, Realtà Mista,
            AI Generativa e Archivio Digitale.
          </p>
          <p className="text-xs opacity-70">© 2025 AECFusion. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default CollaborationDetail;
