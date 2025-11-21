import React from 'react';
import { Section, Button, Accordion, AccordionItem } from '../../components/UI';
import { Lock, AlertTriangle, HelpCircle, FileCheck, Trash2, RefreshCw } from 'lucide-react';

// Based exactly on "Bundle 3 – Lifecycle & Compliance Pack" PDF structure

const LifecycleCompliance = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section bg="dark" className="pt-24 pb-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Lifecycle & Compliance Pack – <br/>
            <span className="text-komma-accent">Rücklauf, Löschung und Zertifikate geregelt</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Off- und Onboarding ohne operative Überlastung. Wir übernehmen Geräterücknahme, 
            datenschutzkonforme Löschung und Audit-Dokumentation – standardisiert, messbar, SLA-gesichert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" className="text-lg">Demo-Call vereinbaren</Button>
            <Button to="/contact" variant="outline" className="text-lg text-white border-white hover:bg-white/10">Beispiel-Reports ansehen</Button>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-komma-primary">Kennst du das?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full text-orange-600 mb-6">
              <RefreshCw size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Geräte-Rücklauf dauert Wochen</h3>
            <p className="text-slate-600">
              Altgeräte bleiben bei ausgeschiedenen Mitarbeitern. Nachforderungen, Eskalationen, Medienbrüche.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full text-orange-600 mb-6">
              <Lock size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Löschzertifikate fehlen</h3>
            <p className="text-slate-600">
              Audit-Findings wegen fehlender DSGVO-Nachweise. Manuelle Nacharbeit bindet dein Team.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full text-orange-600 mb-6">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-komma-primary mb-3">Unklare Zuständigkeiten</h3>
            <p className="text-slate-600">
              Wer holt ab? Wer löscht? Wer dokumentiert? Prozesse sind nicht standardisiert.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section bg="light">
        <h2 className="text-3xl font-bold text-komma-primary mb-12 text-center">Lifecycle & Compliance Pack – So funktioniert's</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-6xl opacity-20 pr-4 pt-2 leading-none">1</div>
            <h3 className="text-xl font-bold text-komma-primary mb-4 relative z-10">Offboarding koordiniert</h3>
            <p className="text-slate-600 relative z-10">
              Wir übernehmen Rücknahme von Mobilfunk- und Workplace-Hardware. 
              SIM/Device werden deaktiviert, Altgeräte zurückgeholt – strukturiert und nachvollziehbar.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-6xl opacity-20 pr-4 pt-2 leading-none">2</div>
            <h3 className="text-xl font-bold text-komma-primary mb-4 relative z-10">Datenschutzkonforme Löschung</h3>
            <p className="text-slate-600 relative z-10">
              DSGVO-konforme Zurücksetzung aller Geräte. 100% Löschzertifikate, dokumentiert und Audit-ready.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-6xl opacity-20 pr-4 pt-2 leading-none">3</div>
            <h3 className="text-xl font-bold text-komma-primary mb-4 relative z-10">Lifecycle Management</h3>
            <p className="text-slate-600 relative z-10">
              Von Tausch über Rücklauf bis Verwertung: Alle Prozesse sind standardisiert. 
              Du bekommst Lifecycle-Reports, Verwertungsbelege und vollständige Asset-Protokolle.
            </p>
          </div>
        </div>
      </Section>

      {/* KPI Section */}
      <Section bg="dark">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Die Zahlen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≥98%</div>
            <div className="text-slate-300">Rücklaufquote innerhalb von ≤8 Wochen</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">100%</div>
            <div className="text-slate-300">Löschzertifikate (DSGVO-konform)</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≥99%</div>
            <div className="text-slate-300">Rücknahmetreue</div>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-komma-highlight mb-2">≤8h</div>
            <div className="text-slate-300">P1-MTTR bei Incidents</div>
          </div>
        </div>
      </Section>

      {/* Artifacts Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-komma-primary mb-8 text-center">Deine Nachweise – transparent und vollständig</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Deaktivierungslogs (SIM/Device)", 
                "Löschzertifikate (DSGVO-konform)",
                "Rücknahmescheine mit Foto-Dokumentation",
                "Lifecycle-Reports mit Verwertungsbelegen",
                "Abholungsprotokolle",
                "Monatliche SLA-Reports"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-lg text-slate-700">
                  <FileCheck className="text-komma-accent mr-3 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-komma-primary mb-8 text-center">Häufige Fragen</h2>
           <Accordion>
            <AccordionItem title="Wie schnell werden Altgeräte zurückgeholt?">
              Wir steuern den Rücklaufprozess aktiv und erreichen in der Regel eine Rücklaufquote von ≥98% innerhalb von 8 Wochen nach Ausscheiden des Mitarbeiters.
            </AccordionItem>
            <AccordionItem title="Erhalte ich einen Nachweis über die Datenlöschung?">
              Ja, Sicherheit hat oberste Priorität. Sie erhalten zu 100% DSGVO-konforme Löschzertifikate für jedes einzelne Gerät.
            </AccordionItem>
             <AccordionItem title="Was passiert mit Geräten, die nicht mehr nutzbar sind?">
              Defekte oder zu alte Geräte werden umweltgerecht recycelt oder entsorgt. Sie erhalten hierfür offizielle Entsorgungsnachweise.
            </AccordionItem>
            <AccordionItem title="Welche Reports sind enthalten?">
              Sie erhalten transparente monatliche Lifecycle-Reports, Verwertungsbelege, Deaktivierungslogs und vollständige Asset-Protokolle für Ihre Audits.
            </AccordionItem>
           </Accordion>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl font-medium text-komma-primary italic mb-6">
            "Lifecycle & Compliance war früher ein Flickenteppich. Jetzt haben wir standardisierte Prozesse, 100% Zertifikate und keine Audit-Findings mehr."
          </blockquote>
          <cite className="text-slate-600 not-italic font-semibold block">
            — Markus Weber, IT-Leiter, Industrie-Mittelstand (800 MA)
          </cite>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center pb-32">
        <h2 className="text-3xl font-bold text-komma-primary mb-6">Lass uns kurz sprechen</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Wir zeigen dir, wie wir Lifecycle & Compliance bei vergleichbaren Setups umsetzen. 
          Mit konkreten KPIs, Beispiel-Reports und klaren SLAs.
        </p>
        <Button to="/contact" variant="primary" className="px-8 py-4 text-lg shadow-xl">
          Demo-Call vereinbaren (15 Min.)
        </Button>
      </Section>
    </div>
  );
};

export default LifecycleCompliance;