import React from 'react';
import { Section, Button, Accordion, AccordionItem } from '../../components/UI';
import { Smartphone, Truck, FileSpreadsheet, Globe, ShieldAlert, Zap } from 'lucide-react';

const ManagedMobile = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section bg="dark" className="pt-24 pb-24">
        <div className="max-w-4xl">
          <div className="text-komma-accent font-bold tracking-wider uppercase mb-2">Managed Mobile</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Deine mobile Flotte im Griff – <br/>
            <span className="text-komma-highlight">Onboarding, Betrieb & Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Wir übernehmen den kompletten Lifecycle deiner Mobilgeräte. 
            Von der Bestellung bis zur Rücknahme. Inklusive SIM-Management, Tarifoptimierung und 24h-Austausch bei Defekten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" className="text-lg">Lösung besprechen</Button>
            <Button to="/contact" variant="outline" className="text-lg text-white border-white hover:bg-white/10">Prozess-Details ansehen</Button>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-komma-primary">Herausforderungen im Mobile Management</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-6">
              <FileSpreadsheet size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Intransparente Kosten</h3>
            <p className="text-slate-600">
              Unklare Tarifstrukturen, ungenutzte SIM-Karten und versteckte Roaming-Gebühren belasten das Budget.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-6">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Lange Wartezeiten</h3>
            <p className="text-slate-600">
              Neue Mitarbeiter warten Tage auf ihr Smartphone. Defekte Geräte legen den Außendienst lahm.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-6">
              <ShieldAlert size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Sicherheitsrisiken</h3>
            <p className="text-slate-600">
              Offboarding wird vergessen. Geräte mit Firmendaten bleiben im Umlauf. Kein zentrales Löschkonzept.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section bg="light">
        <h2 className="text-3xl font-bold text-komma-primary mb-12 text-center">So funktioniert Managed Mobile</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-6xl opacity-20 pr-4 pt-2 leading-none">1</div>
            <h3 className="text-xl font-bold text-komma-primary mb-4 relative z-10">Onboarding & Beschaffung</h3>
            <p className="text-slate-600 relative z-10">
              Bestellung per Portal. Vorkonfiguration und Lieferung direkt zum Mitarbeiter. 
              Das Gerät ist am ersten Arbeitstag einsatzbereit ("Sofort einsetzbares Mobilfunk Equipment").
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-6xl opacity-20 pr-4 pt-2 leading-none">2</div>
            <h3 className="text-xl font-bold text-komma-primary mb-4 relative z-10">Betrieb & Support</h3>
            <p className="text-slate-600 relative z-10">
              Incident-Management für SIM und Hardware. Tarifoptimierung und Stammdatenpflege. 
              Bei Defekt: Ersatzgerät aus dem Pool binnen 48h.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-6xl opacity-20 pr-4 pt-2 leading-none">3</div>
            <h3 className="text-xl font-bold text-komma-primary mb-4 relative z-10">Offboarding & Audit</h3>
            <p className="text-slate-600 relative z-10">
              Strukturierte Rücknahme. Datenschutzkonforme Löschung und Wiedervermarktung oder Entsorgung.
              Inklusive Löschzertifikat und Kostenstellen-Entlastung.
            </p>
          </div>
        </div>
      </Section>

      {/* KPI Section */}
      <Section bg="dark">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Leistungskennzahlen (SLA)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≥95%</div>
            <div className="text-slate-300">Termintreue Bereitstellung</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≤48h</div>
            <div className="text-slate-300">MTTR (Gerätetausch)</div>
          </div>
           <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">0%</div>
            <div className="text-slate-300">Poolunterdeckung</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">100%</div>
            <div className="text-slate-300">Datenqualität Stammdaten</div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-komma-primary mb-8 text-center">Häufige Fragen</h2>
          <Accordion>
            <AccordionItem title="Wie lange dauert der Austausch bei einem Defekt?">
              Wir garantieren einen Austausch durch ein Gerät aus dem Pool innerhalb von 48 Stunden (im Servicefenster). So bleibt ihr Team arbeitsfähig.
            </AccordionItem>
            <AccordionItem title="Was ist im Onboarding enthalten?">
              Das Gerät wird vollständig vorkonfiguriert (MDM-Enrollment), mit Schutzfolie/Panzerglas und Hülle versehen und betriebsbereit direkt an den Mitarbeiter versendet.
            </AccordionItem>
             <AccordionItem title="Kümmern Sie sich auch um die Mobilfunkverträge?">
              Ja, wir übernehmen das komplette Vertragsmanagement, inklusive Tarifoptimierung, Rechnungskontrolle und Fristenmanagement.
            </AccordionItem>
            <AccordionItem title="Wie verhindern Sie Engpässe bei der Hardware?">
              Wir managen einen kundenspezifischen Geräte-Pool, der dynamisch aufgefüllt wird, um eine Verfügbarkeit von ≥95% sicherzustellen.
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

       {/* Final CTA */}
       <Section className="text-center pb-32">
        <h2 className="text-3xl font-bold text-komma-primary mb-6">Starte mit Managed Mobile</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Kein Chaos mehr bei Handyverträgen und Hardware. Wir professionalisieren deine Flotte.
        </p>
        <Button to="/contact" variant="primary" className="px-8 py-4 text-lg shadow-xl">
          Beratungsgespräch vereinbaren
        </Button>
      </Section>
    </div>
  );
};

export default ManagedMobile;