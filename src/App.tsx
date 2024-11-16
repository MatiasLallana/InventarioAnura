import React from 'react';
import { Truck, Phone, Plus, Save } from 'lucide-react';
import VanInventory from './components/VanInventory';
import TotalStock from './components/TotalStock';
import { useInventoryStore } from './stores/inventoryStore';
import PhoneModelManager from './components/PhoneModelManager';

function App() {
  const { saveChanges } = useInventoryStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Anura Telefonía IP Logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-900">Anura Telefonía IP</h1>
          </div>
          <button
            onClick={saveChanges}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Guardar Cambios
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Phone Models Manager */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Gestión de Modelos de Teléfonos
            </h2>
            <PhoneModelManager />
          </div>
        </section>

        {/* Van Inventories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <VanInventory vanId="PFT058" title="PFT 058" />
          <VanInventory vanId="PAU781" title="PAU 781" />
          <VanInventory vanId="PAU782" title="PAU 782" />
        </div>

        {/* Total Stock Overview */}
        <section>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Truck className="h-5 w-5 mr-2" />
              Stock Total
            </h2>
            <TotalStock />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;