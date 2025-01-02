import React from 'react';
import { Shield, Scale, Users, BookOpen, Building2 } from 'lucide-react';

const features = [
  {
    name: 'Private Intelligence',
    description: 'Access secure private intelligence reports and comprehensive case analysis tools.',
    icon: Shield,
  },
  {
    name: 'Case Management',
    description: 'Streamlined case tracking and document management for legal professionals.',
    icon: Scale,
  },
  {
    name: 'Consultation Booking',
    description: 'Easy scheduling system for legal consultations and case discussions.',
    icon: Users,
  },
  {
    name: 'Legal Resources',
    description: 'Extensive library of legal documents, guides, and educational materials.',
    icon: BookOpen,
  },
  {
    name: 'Enterprise Solutions',
    description: 'Tailored solutions for law firms, in-house counsel, and MSMEs.',
    icon: Building2,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in one place
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access powerful tools and resources designed to streamline legal processes and enhance professional efficiency.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}