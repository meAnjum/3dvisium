import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const PriceCard = ({ title, price, features, popular }: PriceCardProps) => {
  return (
    <Card className={`card-gradient border-none transition-transform duration-300 hover:-translate-y-2 ${popular ? 'glow' : ''}`}>
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-crime-accent mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-crime-accent hover:bg-crime-accent/90">Get Started</Button>
      </CardFooter>
    </Card>
  );
};