import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="card-gradient border-none animate-float">
      <CardHeader>
        <div className="w-12 h-12 mb-4 rounded-full bg-crime-accent/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-crime-accent" />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};