
import React from 'react';
import UseCaseDetailLayout from '@/components/UseCaseDetailLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Building, FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const ARSiteVerificationDetail = () => {
  return (
    <UseCaseDetailLayout
      title="Verifica in cantiere con AR"
      description="Visualizzazione in AR del modello BIM sovrapposto alla costruzione reale, con accesso immediato ai documenti tecnici dal CDE."
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Il Problema</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Durante la costruzione, verificare che l'esecuzione segua esattamente il progetto è una sfida costante. Gli errori vengono spesso scoperti troppo tardi, quando correggere è costoso e complicato.
            </p>
            <p className="mb-4">
              Il personale in cantiere deve costantemente consultare disegni 2D, confrontandoli manualmente con la costruzione reale, un processo soggetto a errori e interpretazioni.
            </p>
            <p>
              L'accesso a informazioni tecniche dettagliate direttamente in cantiere è spesso limitato, costringendo a ritornare in ufficio per consultare documenti o chiarire dettagli.
            </p>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mt-12 mb-6 text-aec-blue-dark">La Soluzione</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              La realtà aumentata (AR) consente di sovrapporre il modello BIM 3D direttamente sulla costruzione reale, attraverso dispositivi mobili o visori AR dedicati, rendendo immediatamente visibili discrepanze ed errori.
            </p>
            <p className="mb-4">
              I tecnici in cantiere possono visualizzare elementi non ancora costruiti o nascosti (come impianti dentro pareti o controsoffitti), facilitando il posizionamento preciso e la verifica delle installazioni.
            </p>
            <p>
              L'integrazione con il CDE (Common Data Environment) fornisce accesso immediato a specifiche tecniche, dettagli costruttivi e altra documentazione direttamente dal visore AR, senza dover lasciare il punto di lavoro.
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
                      Modello 3D dettagliato con informazioni geometriche precise e metadati
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Smartphone className="h-8 w-8 text-aec-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Realtà Aumentata</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Sovrapposizione di contenuti digitali sul mondo reale attraverso tablet, smartphone o visori dedicati
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-aec-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">CDE</h4>
                    <p className="text-sm text-aec-gray-dark">
                      Accesso alla documentazione tecnica completa direttamente in cantiere
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Flusso di Lavoro</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-aec-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Preparazione</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Ottimizzazione del modello BIM per l'uso in AR, riducendo la complessità mantenendo la precisione</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Impostazione di punti di riferimento fisici in cantiere per l'allineamento del modello AR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Collegamento di documenti tecnici rilevanti agli elementi del modello nel CDE</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-aec-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Ispezione in Cantiere</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Calibrazione dell'applicazione AR con l'ambiente fisico attraverso i punti di riferimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Visualizzazione in tempo reale del modello BIM sovrapposto alla costruzione esistente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Identificazione automatica e manuale di discrepanze tra progetto e costruzione</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-aec-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Documentazione e Follow-up</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Cattura di screenshot e note AR direttamente nell'applicazione</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Sincronizzazione automatica dei problemi identificati con il sistema di gestione del progetto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                  <span>Generazione di report di ispezione dettagliati con evidenze visive</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Benefici Chiave</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 border-l-4 border-aec-blue pl-4 py-2">
              <AlertTriangle className="h-6 w-6 text-aec-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg mb-1">Individuazione Precoce di Errori</h4>
                <p className="text-sm text-aec-gray-dark">
                  L'identificazione immediata di discrepanze tra progetto e costruzione permette correzioni rapide e meno costose
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 border-l-4 border-aec-blue pl-4 py-2">
              <Clock className="h-6 w-6 text-aec-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg mb-1">Efficienza Migliorata</h4>
                <p className="text-sm text-aec-gray-dark">
                  Riduzione dei tempi di ispezione e verifica grazie alla visualizzazione immediata e intuitiva delle informazioni
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 border-l-4 border-aec-blue pl-4 py-2">
              <Smartphone className="h-6 w-6 text-aec-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg mb-1">Accesso Contestuale alle Informazioni</h4>
                <p className="text-sm text-aec-gray-dark">
                  Consultazione immediata di documenti tecnici, specifiche e dettagli costruttivi direttamente nel contesto fisico rilevante
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-aec-blue-dark">Case Study</h2>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-aec-blue-dark">Ospedale San Raffaele - Milano</h3>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Durante la costruzione del nuovo padiglione, l'implementazione della verifica AR ha permesso di identificare:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24 conflitti tra impianti meccanici ed elementi strutturali prima dell'installazione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Posizionamento errato di 12 aperture per porte e finestre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-aec-teal mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Discrepanze nelle altezze dei controsoffitti in 8 aree diverse</span>
                  </li>
                </ul>
                
                <div className="mt-4 border-t pt-4">
                  <p className="text-sm font-medium mb-2">Risultati:</p>
                  <p className="text-sm">
                    La correzione tempestiva di questi problemi ha evitato ritardi stimati in 3 settimane e costi aggiuntivi per circa €185.000, con un ROI del 450% sull'investimento nella tecnologia AR.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </UseCaseDetailLayout>
  );
};

export default ARSiteVerificationDetail;
