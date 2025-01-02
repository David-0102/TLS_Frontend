import React from 'react';
import { Users, Scale, BookOpen, Building2 } from 'lucide-react';

const categories = [
  {
    title: 'Advocates',
    description: 'Access case management tools, private intelligence, and booking systems.',
    icon: Scale,
    color: 'bg-blue-500',
  },
  {
    title: 'Common Mwananchi',
    description: 'Find legal advice, educational resources, and connect with lawyers.',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    title: 'Law Students',
    description: 'Access study materials, internships, and networking opportunities.',
    icon: BookOpen,
    color: 'bg-purple-500',
  },
  {
    title: 'Enterprises',
    description: 'Comprehensive solutions for law firms and in-house legal teams.',
    icon: Building2,
    color: 'bg-orange-500',
  },
];

export default function UserCategories() {
  return (
    <div id="users" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">User Categories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for Every Legal Need
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're a legal professional or seeking legal assistance, we have solutions designed for you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="p-6">
                <div className={`rounded-lg ${category.color} p-3 w-12 h-12 flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{category.title}</h3>
                <p className="mt-2 text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}