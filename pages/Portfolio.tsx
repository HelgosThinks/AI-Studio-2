import React from 'react';
import { Section, Button } from '../components/UI';
import { Link } from 'react-router-dom';
import { Smartphone, Monitor, ShieldCheck, ArrowRight, FileText, Settings, Truck } from 'lucide-react';

const Portfolio = () => {
  const bundles = [
    {
      id: 'mobile',
      title: 'Managed Mobile',
      subtitle: 'Der komplette Lifecycle für Smartphones & Tablets',
      description: 'Vom Onboarding neuer Mitarbeiter über den Hardware-Tausch bei Defekt bis zum Vertragsmanagement. Wir kümmern uns um die Details, damit dein Team mobil bleibt.',
      features: ['On- & Offboarding', 'Hardware Tausch (48h)', 'Vertragsmanagement', 'Kostenstellen-Reporting'],
      icon: <Smartphone size={48} />,
      path: '/bundles/managed-mobile',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'workplace',
      title: 'Managed Workplace',
      subtitle: 'Arbeitsplatz-Hardware "Day-1-Ready"',
      description: 'Wir sorgen dafür, dass Laptops, Monitore und Peripherie pünktlich und vorkonfiguriert am Platz sind. Inklusive Rollout-Planung und Ersatzgeräte-Pool.',
      features: ['Beschaffung & Vorkonfiguration', 'Rollout Management', 'Day-1-Ready Übergabe', 'Ersatzgeräte-Logistik'],
      icon: <Monitor size={48} />,
      path: '/bundles/managed-workplace',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'lifecycle',
      title: 'Lifecycle & Compliance',
      subtitle: 'Rücknahme, Löschung und Zertifikate geregelt',
      description: 'Das Ende des Lifecycles ist oft chaotisch. Wir strukturieren die Rücknahme, löschen Daten DSGVO-konform und liefern audit-sichere Nachweise.',
      features: ['Datenschutzkonforme Löschung', 'Rücknahme-Logistik', 'Revisionssichere Zertifikate', 'Reporting'],
      icon: <ShieldCheck size={48} />,
      path: '/bundles/lifecycle-compliance',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <div>
      <Section bg="dark" className="text-center pt-20 pb-20">
        <h1 className="text-4xl font-bold text-white mb-6">Unsere Bundles</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Klar definierte Leistungspakete für maximale Transparenz und Planbarkeit. 
          Wähle den Bereich, der dich entlastet.
        </p>
      </Section>

      <Section>
        <div className="space-y-16">
          {bundles.map((bundle, index) => (
            <div key={bundle.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="flex-1">
                <div className={`${bundle.bgColor} ${bundle.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  {bundle.icon}
                </div>
                <h2 className="text-3xl font-bold text-komma-primary mb-2">{bundle.title}</h2>
                <h3 className="text-xl text-komma-accent font-medium mb-4">{bundle.subtitle}</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {bundle.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                        <ArrowRight size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button to={bundle.path} variant="outline" className="group">
                  Details ansehen 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
              
              <div className="flex-1 w-full">
                <Link to={bundle.path} className="block group overflow-hidden rounded-xl shadow-lg border border-slate-100 relative bg-white h-80 flex items-center justify-center hover:shadow-xl transition-all">
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50"></div>
                   {/* Abstract Visual Representation */}
                   <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                      {/* Simple visual placeholder using the icon again but huge */}
                      <div className={`${bundle.color} opacity-10`}>
                        {React.cloneElement(bundle.icon as React.ReactElement, { size: 200 })}
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-bold text-komma-primary uppercase tracking-wider flex items-center justify-center">
                        Zur Detailseite <ArrowRight size={16} className="ml-2"/>
                      </span>
                   </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;