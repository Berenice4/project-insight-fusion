
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

interface UseCaseCardProps {
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
}

const UseCaseCard = ({ title, problem, solution, technologies }: UseCaseCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-aec-gray-dark mb-1">Problema:</h4>
          <p className="text-sm">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-aec-gray-dark mb-1">Soluzione:</h4>
          <p className="text-sm">{solution}</p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div>
          <h4 className="text-sm font-medium text-aec-gray-dark mb-1">Tecnologie:</h4>
          <div className="space-y-1">
            {technologies.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-aec-teal" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UseCaseCard;
