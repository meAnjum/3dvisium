import { Shield, Lock, Database } from 'lucide-react';
import { Globe } from '@/components/Globe';
import { FeatureCard } from '@/components/FeatureCard';
import { PriceCard } from '@/components/PriceCard';
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Reduced height */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Crime.si</h1>
          <p className="text-lg text-gray-400 mb-6">Advanced Security Analytics Platform</p>
        </div>
        <div className="absolute inset-0 -z-10">
          <Globe />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-crime-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Advanced Protection"
              description="State-of-the-art security measures to protect your data"
            />
            <FeatureCard
              icon={Lock}
              title="Secure Access"
              description="Multi-factor authentication and role-based access control"
            />
            <FeatureCard
              icon={Database}
              title="Data Analytics"
              description="Powerful analytics tools for threat detection"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-crime-dark to-crime-gray">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard
              title="Starter"
              price="$49"
              features={["Basic Analytics", "5 Users", "24/7 Support"]}
            />
            <PriceCard
              title="Professional"
              price="$99"
              features={["Advanced Analytics", "25 Users", "Priority Support", "API Access"]}
              popular
            />
            <PriceCard
              title="Enterprise"
              price="$199"
              features={["Custom Solutions", "Unlimited Users", "Dedicated Support", "Full API Access"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-crime-dark">
        <div className="container mx-auto max-w-md">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;