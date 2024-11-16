import React, { useState } from 'react';
import { useInventoryStore } from '../stores/inventoryStore';
import { ChevronDown } from 'lucide-react';

const TotalStock: React.FC = () => {
  const { getTotalStock, phoneModels, getVanInventory } = useInventoryStore();
  const [viewMode, setViewMode] = useState<'total' | 'van'>('total');
  const [selectedVan, setSelectedVan] = useState('PFT058');

  const vans = {
    'PFT058': 'PFT 058',
    'PAU781': 'PAU 781',
    'PAU782': 'PAU 782'
  };

  const inventory = viewMode === 'total' ? getTotalStock() : getVanInventory(selectedVan);

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <div className="relative">
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as 'total' | 'van')}
            className="appearance-none bg-gray-50 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="total">Stock Total</option>
            <option value="van">Por Camioneta</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>

        {viewMode === 'van' && (
          <div className="relative">
            <select
              value={selectedVan}
              onChange={(e) => setSelectedVan(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Object.entries(vans).map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phoneModels.map((model) => (
          <div key={model} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">{model}</h3>
            <div className="space-y-2">
              {['Teléfono', 'Tubo', 'Rulo', 'Base', 'Fuente'].map((item) => (
                <div key={item} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item}</span>
                  <span className="font-medium">{inventory[model]?.[item] || 0}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalStock;