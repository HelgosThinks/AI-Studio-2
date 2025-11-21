import React from 'react';
import { Section, Button, FeatureCard } from '../components/UI';
import { Smartphone, Monitor, ShieldCheck, ArrowRight, BarChart3, Clock, ClipboardList, Settings, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-komma-primary pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Wir machen die <span className="text-komma-accent">IT-Peripherie</span> einfach.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light">
            Mobilgeräte, Arbeitsplatz & Service. Seit über 20 Jahren.
            Klar strukturiert, messbar effizient und absolut verlässlich.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/portfolio" variant="primary">
              Zu unseren Lösungen
            </Button>
            <Button to="/about" variant="outline" className="border-slate-400 text-white hover:bg-white/10 hover:text-white">
              Über komma
            </Button>
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <Section bg="light">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-komma-primary mb-4">Technik, die funktioniert.</h2>
          <p className="text-lg text-slate-600">
            Wir fokussieren uns auf die Peripherie der IT: gemanagte Mobilgeräte, 
            verlässliche Arbeitsplatz-Ausstattung und die Prozesse drumherum. 
            Entlastung statt Mehrarbeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Managed Mobile" 
            description="Betreuung von Mobilfunkverträgen, SIM-Pools und Geräte-Lifecycles — von der Bestellung bis zur Rücknahme."
            icon={<Smartphone size={40} />}
            link="/bundles/managed-mobile"
          />
          <FeatureCard 
            title="Managed Workplace" 
            description="Beschaffung, Vorkonfiguration und Management von Arbeitsplatz-Hardware. Rollouts, Austausch und Day-1-ready."
            icon={<Monitor size={40} />}
            link="/bundles/managed-workplace"
          />
          <FeatureCard 
            title="Lifecycle & Compliance" 
            description="Datenschutzkonforme Löschung, Rücknahme und Zertifikate. Standardisiert, messbar und audit-sicher."
            icon={<ShieldCheck size={40} />}
            link="/bundles/lifecycle-compliance"
          />
        </div>
      </Section>

      {/* How it Works Section */}
      <Section bg="white">
        <div className="text-center mb-16">
          <div className="text-komma-accent font-bold tracking-wider uppercase mb-2">Prozess</div>
          <h2 className="text-3xl font-bold text-komma-primary mb-4">So funktioniert die Zusammenarbeit</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wir integrieren uns nahtlos in Ihre bestehenden Abläufe und übernehmen die operative Last.
            In drei Schritten zur entlasteten IT.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {/* Connector Line (Hidden on mobile) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

           {/* Step 1 */}
           <div className="bg-white p-6 rounded-lg text-center relative group">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-white shadow-sm rounded-full flex items-center justify-center mb-6 z-10 relative">
                <div className="absolute inset-0 bg-komma-light rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10 text-komma-accent">
                   <ClipboardList size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-komma-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">1</div>
              </div>
              <h3 className="text-xl font-bold text-komma-primary mb-3">Analyse & Onboarding</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Wir definieren gemeinsam Warenkörbe, SLAs und Prozesse. Ihr individuelles Portal wird aufgesetzt.
              </p>
           </div>

           {/* Step 2 */}
           <div className="bg-white p-6 rounded-lg text-center relative group">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-white shadow-sm rounded-full flex items-center justify-center mb-6 z-10 relative">
                <div className="absolute inset-0 bg-komma-light rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10 text-komma-accent">
                   <Settings size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-komma-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">2</div>
              </div>
              <h3 className="text-xl font-bold text-komma-primary mb-3">Operativer Betrieb</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Bestellungen, Support und Logistik laufen automatisiert über uns. Ihr Team wird sofort entlastet.
              </p>
           </div>

           {/* Step 3 */}
           <div className="bg-white p-6 rounded-lg text-center relative group">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-white shadow-sm rounded-full flex items-center justify-center mb-6 z-10 relative">
                <div className="absolute inset-0 bg-komma-light rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10 text-komma-accent">
                   <TrendingUp size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-komma-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">3</div>
              </div>
              <h3 className="text-xl font-bold text-komma-primary mb-3">Transparenz & Steuerung</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Über monatliche Reports und Reviews behalten Sie Kosten, Qualität und Assets jederzeit im Blick.
              </p>
           </div>
        </div>
      </Section>

      {/* Trust/Promise Section */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-komma-primary mb-6">Unser Versprechen</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full h-fit shadow-sm">
                  <BarChart3 className="text-komma-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-komma-primary">Messbar & verlässlich</h4>
                  <p className="text-slate-600">Keine Worthülsen: nachvollziehbare KPIs, Ticket-Artefakte und regelmäßige Reports zeigen, dass wir liefern.</p>
                </div>
              </div>
              <div className="flex gap-4">
                 <div className="bg-white p-3 rounded-full h-fit shadow-sm">
                  <Clock className="text-komma-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-komma-primary">Entlastung statt Mehrarbeit</h4>
                  <p className="text-slate-600">Wir nehmen operative Last ab, damit dein Team Zeit für Kernaufgaben gewinnt.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button to="/about" variant="secondary">Mehr über uns</Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg p-8 md:p-12 lg:p-16 shadow-md">
               <blockquote className="text-xl md:text-2xl font-medium text-komma-primary italic mb-6">
                "Viele Anbieter versprechen IT-Lösungen, bleiben aber vage. Wir liefern konkrete, wiederholbare Leistungen in klar definierten Bereichen."
               </blockquote>
               <div className="flex items-center gap-4">
                 <div className="h-12 w-12 bg-komma-primary rounded-full flex items-center justify-center text-white font-bold">k</div>
                 <div>
                   <div className="font-bold text-komma-primary">Das Team von komma</div>
                   <div className="text-sm text-slate-500">IT-Peripherie Spezialisten</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-komma-primary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interessiert? Lass uns kurz sprechen.</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Wir zeigen dir konkrete Beispiele und KPIs aus der Praxis, wie wir deine IT-Peripherie vereinfachen können.
          </p>
          <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;