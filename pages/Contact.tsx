import React from 'react';
import { Section, Button } from '../components/UI';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Section bg="dark" className="py-20">
        <h1 className="text-4xl font-bold text-white text-center">Kontakt</h1>
        <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto">
          Gerne besprechen wir deine Anforderungen in einem kurzen Telefonat oder per Video-Call.
        </p>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-komma-primary">Hier erreichst du uns</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-komma-light p-3 rounded-full text-komma-highlight">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-komma-primary">Telefon</h3>
                <p className="text-slate-600">+49 30 12345678</p>
                <p className="text-slate-500 text-sm">Mo-Fr, 9:00 - 17:00 Uhr</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-komma-light p-3 rounded-full text-komma-highlight">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-komma-primary">E-Mail</h3>
                <p className="text-slate-600">kontakt@komma.de</p>
                <p className="text-slate-500 text-sm">Wir antworten in der Regel innerhalb von 24h.</p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="bg-komma-light p-3 rounded-full text-komma-highlight">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-komma-primary">Büro</h3>
                <p className="text-slate-600">Musterstraße 123<br/>10115 Berlin<br/>Deutschland</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Static Visual) */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-komma-primary mb-6">Nachricht senden</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-komma-accent focus:border-transparent outline-none" placeholder="Dein Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">E-Mail</label>
                <input type="email" className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-komma-accent focus:border-transparent outline-none" placeholder="deine@email.de" />
              </div>
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Betreff</label>
                 <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-komma-accent focus:border-transparent outline-none bg-white">
                   <option>Allgemeine Anfrage</option>
                   <option>Managed Mobile</option>
                   <option>Managed Workplace</option>
                   <option>Lifecycle & Compliance</option>
                 </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nachricht</label>
                <textarea rows={4} className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-komma-accent focus:border-transparent outline-none" placeholder="Wie können wir helfen?"></textarea>
              </div>
              <Button className="w-full">Absenden</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;