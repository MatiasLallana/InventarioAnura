import React, { useState } from 'react';
import { useInventoryStore } from '../stores/inventoryStore';
import { Truck, Plus, Minus, ChevronDown } from 'lucide-react';

interface VanInventoryProps {
  vanId: string;
  title: string;
}

const VanInventory: React.FC<VanInventoryProps> = ({ vanId, title }) => {
  const { 
    getVanInventory, 
    incrementItem, 
    decrementItem,
    phoneModels
  } = useInventoryStore();
  const [selectedModel, setSelectedModel] = useState(phoneModels[0] || '');

  const inventory = getVanInventory(vanId);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold flex items-center">
          <Truck className="h-5 w-5 mr-2" />
          {title}
        </h2>
        <div className="relative">
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="appearance-none bg-gray-50 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {phoneModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
      
      <div className="space-y-4">
        {selectedModel && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Teléfono', 'Tubo', 'Rulo', 'Base', 'Fuente'].map((item) => (
              <div key={item} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-600">{item}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrementItem(vanId, selectedModel, item)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <Minus className="h-4 w-4 text-red-500" />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {inventory[selectedModel]?.[item] || 0}
                  </span>
                  <button
                    onClick={() => incrementItem(vanId, selectedModel, item)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <Plus className="h-4 w-4 text-green-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VanInventory;