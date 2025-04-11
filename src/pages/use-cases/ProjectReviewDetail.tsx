
import React from 'react';
import UseCaseDetailLayout from '@/components/UseCaseDetailLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, MessageSquare, Eye, Video, Building, FileText } from 'lucide-react';

const ProjectReviewDetail = () => {
  return (
    <UseCaseDetailLayout
      title="Revisione di progetto collaborativa"
      description="Sessioni di revisione immersive in VR dove tutti gli stakeholder possono interagire con il modello BIM e discutere soluzioni, anche da remoti."
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Il Problema</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              I team multidisciplinari faticano a coordinarsi e a comunicare in modo efficace su aspetti tecnici del progetto. Questo porta a incomprensioni, errori costosi e ritardi nel programma di lavoro.
            </p>
            <p className="mb-4">
              Le riunioni tradizionali spesso non riescono a trasmettere la complessità spaziale dei progetti. I partecipanti hanno difficoltà a visualizzare mentalmente le stesse soluzioni, e chi partecipa da remoto è ulteriormente svantaggiato.
            </p>
            <p>
              La documentazione 2D tradizionale non riesce a rappresentare adeguatamente le relazioni spaziali tra elementi complessi, specialmente quando si discutono interferenze tra sistemi diversi.
            </p>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mt-12 mb-6 text-aec-blue-dark">La Soluzione</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Le sessioni di revisione immersive in VR trasformano radicalmente il processo di revisione del progetto, consentendo a tutti gli stakeholder di interagire con il modello BIM in uno spazio virtuale condiviso.
            </p>
            <p className="mb-4">
              I partecipanti possono navigare liberamente all'interno del modello, evidenziare problemi, proporre e visualizzare soluzioni in tempo reale. Ogni modifica è immediatamente visibile a tutti, creando un feedback loop più rapido.
            </p>
            <p>
              Le sessioni sono accessibili sia in presenza che da remoto, con partecipanti che possono collegarsi tramite VR, desktop o dispositivi mobili, eliminando barriere geografiche e tecnologiche.
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
                      Fonte di dati centralizzata e geometria 3D dettagliata del progetto
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Eye className="h-8 w-8 text-aec-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Realtà Virtuale</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Ambiente immersivo per visualizzare e interagire con il modello BIM in scala 1:1
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-aec-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">CDE</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Accesso ai documenti tecnici, standard e requisiti durante la revisione
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
        
        <Tabs defaultValue="preparation" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="preparation">Preparazione</TabsTrigger>
            <TabsTrigger value="session">Sessione di Revisione</TabsTrigger>
            <TabsTrigger value="collaboration">Collaborazione</TabsTrigger>
            <TabsTrigger value="outcomes">Risultati</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preparation" className="p-6 border rounded-md mt-6">
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center bg-aec-blue/10 rounded-full p-4">
                <Building className="h-10 w-10 text-aec-blue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Preparazione della Sessione</h3>
                <p className="mb-4">
                  Il modello BIM viene ottimizzato per la visualizzazione in VR, assicurando prestazioni fluide senza sacrificare dettagli importanti.
                </p>
                <p className="mb-4">
                  Vengono definiti diversi percorsi di navigazione per guidare i partecipanti attraverso gli aspetti critici del progetto.
                </p>
                <p>
                  I documenti rilevanti vengono collegati a elementi specifici del modello per un accesso immediato durante la sessione.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="session" className="p-6 border rounded-md mt-6">
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center bg-aec-blue/10 rounded-full p-4">
                <Video className="h-10 w-10 text-aec-blue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Sessione di Revisione</h3>
                <p className="mb-4">
                  I partecipanti accedono all'ambiente virtuale tramite visori VR, computer o dispositivi mobili.
                </p>
                <p className="mb-4">
                  Un facilitatore guida la sessione, evidenziando gli aspetti critici del progetto e moderando la discussione.
                </p>
                <p>
                  Gli strumenti di annotazione VR permettono ai partecipanti di evidenziare problemi direttamente nel modello 3D.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="collaboration" className="p-6 border rounded-md mt-6">
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center bg-aec-blue/10 rounded-full p-4">
                <Users className="h-10 w-10 text-aec-blue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Collaborazione in Tempo Reale</h3>
                <p className="mb-4">
                  Avatar personalizzati rappresentano i partecipanti nell'ambiente virtuale, migliorando il senso di presenza.
                </p>
                <p className="mb-4">
                  La comunicazione vocale integrata consente discussioni fluide, mentre i gesti VR migliorano l'espressività.
                </p>
                <p>
                  I partecipanti possono proporre modifiche in tempo reale, visualizzando immediatamente l'impatto delle loro proposte.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="outcomes" className="p-6 border rounded-md mt-6">
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center bg-aec-blue/10 rounded-full p-4">
                <MessageSquare className="h-10 w-10 text-aec-blue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Risultati e Follow-up</h3>
                <p className="mb-4">
                  L'intera sessione viene registrata per riferimento futuro, incluse tutte le annotazioni e le discussioni.
                </p>
                <p className="mb-4">
                  Un report automatico viene generato, riassumendo i problemi identificati, le soluzioni proposte e le decisioni prese.
                </p>
                <p>
                  Le attività di follow-up vengono assegnate direttamente nell'ambiente VR e sincronizzate con il sistema di gestione del progetto.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Vantaggi Principali</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Comprensione Migliorata</h3>
              <p>
                La visualizzazione immersiva in scala 1:1 consente a tutti i partecipanti di comprendere meglio gli spazi e le relazioni tra i sistemi, riducendo incomprensioni e errori di interpretazione.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Decisioni Più Rapide</h3>
              <p>
                La capacità di visualizzare problemi e soluzioni in tempo reale accelera il processo decisionale, riducendo i cicli di revisione e abbreviando i tempi di progettazione.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Collaborazione Inclusiva</h3>
              <p>
                L'accesso da remoto e multipiattaforma consente la partecipazione di tutti gli stakeholder rilevanti, indipendentemente dalla loro posizione geografica o disponibilità tecnologica.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </UseCaseDetailLayout>
  );
};

export default ProjectReviewDetail;
