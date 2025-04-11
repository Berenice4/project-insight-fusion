
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

interface UseCaseDetailLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const UseCaseDetailLayout: React.FC<UseCaseDetailLayoutProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with gradient background */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-10">
          <Button 
            variant="ghost" 
            className="text-white mb-6 hover:bg-white/10" 
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Torna alla home
            </Link>
          </Button>
          
          <div className="max-w-3xl">
            <h1 className="font-poppins text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg opacity-90">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 space-y-16 flex-grow">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-aec-blue-dark text-white py-8">
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

export default UseCaseDetailLayout;
