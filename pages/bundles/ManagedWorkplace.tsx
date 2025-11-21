import React from 'react';
import { Section, Button, Accordion, AccordionItem } from '../../components/UI';
import { Monitor, Box, Clock, CheckSquare, Briefcase, RefreshCcw } from 'lucide-react';

const ManagedWorkplace = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section bg="dark" className="pt-24 pb-24">
        <div className="max-w-4xl">
          <div className="text-komma-accent font-bold tracking-wider uppercase mb-2">Managed Workplace</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Der Arbeitsplatz der Zukunft – <br/>
            <span className="text-komma-highlight">Day-1-Ready & Sorgenfrei</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Beschaffung, Vorkonfiguration und Management von Laptops, Monitoren und Peripherie. 
            Rollouts und Austausch übernehmen wir. Damit dein Team ab Tag 1 produktiv ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" className="text-lg">Angebot anfordern</Button>
            <Button to="/contact" variant="outline" className="text-lg text-white border-white hover:bg-white/10">Services entdecken</Button>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-komma-primary">Typische Probleme im Workplace IT</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full text-indigo-600 mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Verzögerter Start</h3>
            <p className="text-slate-600">
              Neuer Mitarbeiter ist da, aber der Laptop fehlt oder ist nicht konfiguriert. Wertvolle Arbeitszeit geht verloren.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full text-indigo-600 mb-6">
              <Box size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Logistik-Aufwand</h3>
            <p className="text-slate-600">
              Interne IT ist mit Versand, Rückholung und Lagerung von Hardware beschäftigt statt mit Innovation.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full text-indigo-600 mb-6">
              <RefreshCcw size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Veraltete Hardware</h3>
            <p className="text-slate-600">
              Kein strukturierter Refresh-Zyklus. Mitarbeiter arbeiten mit langsamen, fehleranfälligen Geräten.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section bg="light">
        <h2 className="text-3xl font-bold text-komma-primary mb-12 text-center">Unsere Workplace Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <Briefcase className="text-komma-accent mb-4" size={40}/>
            <h3 className="text-xl font-bold text-komma-primary mb-4">Beschaffung & Staging</h3>
            <p className="text-slate-600">
              Hardware-Auswahl, Imaging und Vorkonfiguration nach deinen Standards. 
              Wir liefern direkt ins Homeoffice oder ins Büro.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <Monitor className="text-komma-accent mb-4" size={40}/>
            <h3 className="text-xl font-bold text-komma-primary mb-4">Incident Management</h3>
            <p className="text-slate-600">
              Zentrale Anlaufstelle bei Defekten. Vor-Ort-Austausch oder Swap-Service aus dem Pool. 
              Damit die Arbeit sofort weitergeht.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <CheckSquare className="text-komma-accent mb-4" size={40}/>
            <h3 className="text-xl font-bold text-komma-primary mb-4">Asset Management</h3>
            <p className="text-slate-600">
              Lückenlose Dokumentation aller Assets. Wer hat was? Wie alt ist das Gerät? 
              Wann steht der nächste Refresh an?
            </p>
          </div>
        </div>
      </Section>

      {/* KPI Section */}
      <Section bg="dark">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Qualität, die man messen kann</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≥95%</div>
            <div className="text-slate-300">Day-1-Ready Quote</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≤1%</div>
            <div className="text-slate-300">Fehlteilequote bei Auslieferung</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≤2%</div>
            <div className="text-slate-300">Kostenabweichung Plan/Ist</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">100%</div>
            <div className="text-slate-300">Asset-Transparenz</div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-komma-primary mb-8 text-center">Häufige Fragen</h2>
          <Accordion>
            <AccordionItem title="Was bedeutet 'Day-1-Ready'?">
              Das bedeutet, dass der Arbeitsplatz am ersten Arbeitstag vollständig eingerichtet ist: Hardware ist konfiguriert, Benutzer-Accounts sind aktiv und das Zubehör ist vollständig vorhanden.
            </AccordionItem>
            <AccordionItem title="Übernehmen Sie das Imaging der Geräte?">
              Ja, wir betanken die Geräte nach Ihren Vorgaben (Golden Image, Autopilot, etc.) mit Betriebssystem, Software und Security-Clients.
            </AccordionItem>
            <AccordionItem title="Wie läuft der Austausch bei Hardware-Problemen?">
              Wir nutzen einen definierten Poolbestand für den sofortigen Versand von Ersatzgeräten. Optional bieten wir auch Vor-Ort-Austauschservices an.
            </AccordionItem>
             <AccordionItem title="Können auch Monitore und Zubehör gemanagt werden?">
              Selbstverständlich. Wir kümmern uns um die komplette Ausstattung inklusive Dockingstations, Headsets, Monitore und Spezial-Peripherie.
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

       {/* Final CTA */}
       <Section className="text-center pb-32">
        <h2 className="text-3xl font-bold text-komma-primary mb-6">Optimiere deinen IT-Arbeitsplatz</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Entlaste deine IT-Abteilung von Logistik und Verwaltung. Wir kümmern uns um den Rest.
        </p>
        <Button to="/contact" variant="primary" className="px-8 py-4 text-lg shadow-xl">
          Kontakt aufnehmen
        </Button>
      </Section>
    </div>
  );
};

export default ManagedWorkplace;