import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Van } from './types';
import { initialVans, phoneModels } from './data/initialData';
import VanCard from './components/VanCard';
import TotalStock from './components/TotalStock';

function App() {
  const [vans, setVans] = useState<Van[]>(initialVans);

  const handleUpdateInventory = (vanId: string, field: string, value: any) => {
    setVans(prevVans =>
      prevVans.map(van =>
        van.id === vanId
          ? {
              ...van,
              inventory: {
                ...van.inventory,
                [field]: value
              }
            }
          : van
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Anura Telefonía IP
              </h1>
            </div>
            <p className="text-sm text-gray-500">Sistema de Control de Stock</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <TotalStock vans={vans} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vans.map((van) => (
            <VanCard
              key={van.id}
              van={van}
              phoneModels={phoneModels}
              onUpdateInventory={handleUpdateInventory}
            />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Anura Telefonía IP. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;