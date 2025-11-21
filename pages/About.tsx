import React from 'react';
import { Section, Button } from '../components/UI';
import { CheckCircle, Users, Target, History } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Header */}
      <Section bg="dark" className="pt-24 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wir machen die IT-Peripherie einfach.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Seit über 20 Jahren treten wir dafür an, dass Technik die Arbeit unserer Kunden erleichtert und möglich macht. 
            Wir fokussieren uns auf die Peripherie der IT: gemanagte Mobilgeräte, verlässliche Arbeitsplatz-Ausstattung und die Prozesse drumherum.
          </p>
        </div>
      </Section>

      {/* Was wir tun */}
      <Section>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-komma-primary mb-4">Was wir konkret tun</h2>
          <div className="h-1 w-20 bg-komma-highlight rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-komma-primary mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-komma-accent rounded-full"></div>
              Managed Mobile
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Betreuung von Mobilfunkverträgen, SIM-Pools und Geräte-Lifecycles — von der Bestellung bis zur datenschutzkonformen Rücknahme. 
              Ersatzgeräte, Tarifoptimierung und transparente Reports inklusive.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold text-komma-primary mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-komma-accent rounded-full"></div>
              Managed Workplace
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Beschaffung, Vorkonfiguration und Management von Arbeitsplatz-Hardware (Laptops, Monitore, Peripherie). 
              Rollouts, Austausch und „Day-1-ready“-Übergaben übernehmen wir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold text-komma-primary mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-komma-accent rounded-full"></div>
              Service & Prozessmanagement
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Incident-Handling, Stammdaten- und Vertragsmanagement, klares On-/Offboarding: 
              strukturierte Abläufe, damit dein Team handlungsfähig bleibt.
            </p>
          </div>
        </div>
      </Section>

      {/* Unser Versprechen */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-komma-primary mb-8">Unser Versprechen</h2>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                   <Target className="text-komma-highlight" size={24}/>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-komma-primary">Peripherie, nicht Core-Infrastructure</h4>
                  <p className="text-slate-600 mt-2">
                    Wir bauen keine Server und betreiben keine Backends — wir managen die Geräte, 
                    Verbindungen und operationalen Prozesse am Rand deiner IT-Landschaft.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                   <CheckCircle className="text-komma-highlight" size={24}/>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-komma-primary">Messbar & verlässlich</h4>
                  <p className="text-slate-600 mt-2">
                    Keine Worthülsen: nachvollziehbare KPIs, Ticket-Artefakte und regelmäßige Reports zeigen, dass wir liefern.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                   <History className="text-komma-highlight" size={24}/>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-komma-primary">Entlastung statt Mehrarbeit</h4>
                  <p className="text-slate-600 mt-2">
                    Wir nehmen operative Last ab, damit dein Team Zeit für Kernaufgaben gewinnt.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-md border border-slate-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-komma-primary mb-4">Warum das wirkt</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Viele Anbieter versprechen „IT-Lösungen“, bleiben aber vage. Wir liefern konkrete, wiederholbare Leistungen in klar definierten Bereichen — das schafft Planbarkeit, Transparenz und echte Entlastung im Alltag.
            </p>
            <div className="h-px w-full bg-slate-100 my-6"></div>
            <div className="flex items-center gap-4">
              <div className="bg-komma-light p-3 rounded-full">
                <Users className="text-komma-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-komma-primary">Unser Team</h4>
                <p className="text-slate-500 text-sm">
                  Klein, eingespielt, pragmatisch: wir mögen Technik, noch lieber aber, wenn sie einfach funktioniert. 
                  <span className="italic block mt-1">Freundlich im Ton, streng in Prozessen.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-komma-primary mb-6">Lass uns kurz sprechen</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Interessiert? Wir zeigen dir konkrete Beispiele und KPIs aus der Praxis.
        </p>
        <Button to="/contact" variant="primary" className="px-10 py-4 text-lg">
          Kontakt aufnehmen
        </Button>
      </Section>
    </div>
  );
};

export default About;