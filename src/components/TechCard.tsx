
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
  color: string;
}

const TechCard = ({ title, description, icon: Icon, benefits, color }: TechCardProps) => {
  return (
    <Card className="tech-card overflow-hidden">
      <div className={`h-2 ${color}`}></div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Icon className={`h-8 w-8 ${color === 'bg-aec-blue' ? 'text-aec-blue' : 
                              color === 'bg-aec-teal' ? 'text-aec-teal' : 
                              'text-aec-blue-dark'}`} />
        </div>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Benefici chiave:</h4>
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit, i) => (
              <Badge key={i} variant="outline" className="whitespace-nowrap">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechCard;
