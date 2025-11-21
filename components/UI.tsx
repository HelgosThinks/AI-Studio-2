import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface SectionProps {
  className?: string;
  children?: ReactNode;
  bg?: 'white' | 'light' | 'dark';
}

export const Section = ({ className = '', children, bg = 'white' }: SectionProps) => {
  const bgClass = bg === 'light' ? 'bg-komma-light' : bg === 'dark' ? 'bg-komma-primary text-white' : 'bg-white';
  return (
    <section className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface ButtonProps {
  children?: ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, to, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-komma-accent";
  
  const variants = {
    primary: "border-transparent text-white bg-komma-highlight hover:bg-orange-600 shadow-lg hover:shadow-xl",
    secondary: "border-transparent text-white bg-komma-accent hover:bg-sky-700 shadow-md",
    outline: "border-komma-primary text-komma-primary bg-transparent hover:bg-slate-50",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }
  return <button onClick={onClick} className={classes}>{children}</button>;
};

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  linkText?: string;
}

export const FeatureCard = ({ title, description, icon, link, linkText = "Mehr erfahren" }: CardProps) => (
  <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    {icon && <div className="mb-6 text-komma-accent">{icon}</div>}
    <h3 className="text-xl font-bold text-komma-primary mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{description}</p>
    {link && (
      <Link to={link} className="inline-flex items-center text-komma-accent font-semibold hover:text-sky-700 mt-auto">
        {linkText} <ChevronRight size={16} className="ml-1" />
      </Link>
    )}
  </div>
);

export const AccordionItem = ({ title, children }: { title: string, children?: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-komma-primary focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} className="text-komma-accent" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-slate-600 leading-relaxed pr-8 pb-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ children, className = '' }: { children?: ReactNode, className?: string }) => {
  return (
    <div className={`bg-white rounded-lg border border-slate-200 shadow-sm px-6 py-2 ${className}`}>
      {children}
    </div>
  );
};