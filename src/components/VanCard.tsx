import React from 'react';
import { Van, PhoneModel } from '../types';
import { Phone, Cable, Battery, Package, Radio } from 'lucide-react';

interface VanCardProps {
  van: Van;
  phoneModels: PhoneModel[];
  onUpdateInventory: (vanId: string, field: string, value: any) => void;
}

export default function VanCard({ van, phoneModels, onUpdateInventory }: VanCardProps) {
  const handleChange = (field: string, value: any) => {
    onUpdateInventory(van.id, field, value);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">{van.name}</h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <Phone className="w-5 h-5 text-blue-600" />
          <select
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={van.inventory.phoneModel?.id || ''}
            onChange={(e) => handleChange('phoneModel', phoneModels.find(m => m.id === e.target.value) || null)}
          >
            <option value="">Seleccionar Modelo</option>
            {phoneModels.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-green-600" />
            <input
              type="number"
              min="0"
              className="w-20 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={van.inventory.tube}
              onChange={(e) => handleChange('tube', parseInt(e.target.value))}
              placeholder="Tubos"
            />
            <span className="text-sm text-gray-600">Tubos</span>
          </div>

          <div className="flex items-center gap-2">
            <Cable className="w-5 h-5 text-yellow-600" />
            <input
              type="number"
              min="0"
              className="w-20 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              value={van.inventory.coil}
              onChange={(e) => handleChange('coil', parseInt(e.target.value))}
              placeholder="Rulos"
            />
            <span className="text-sm text-gray-600">Rulos</span>
          </div>

          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-600" />
            <input
              type="number"
              min="0"
              className="w-20 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={van.inventory.base}
              onChange={(e) => handleChange('base', parseInt(e.target.value))}
              placeholder="Bases"
            />
            <span className="text-sm text-gray-600">Bases</span>
          </div>

          <div className="flex items-center gap-2">
            <Battery className="w-5 h-5 text-red-600" />
            <input
              type="number"
              min="0"
              className="w-20 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={van.inventory.powerSupply}
              onChange={(e) => handleChange('powerSupply', parseInt(e.target.value))}
              placeholder="Fuentes"
            />
            <span className="text-sm text-gray-600">Fuentes</span>
          </div>
        </div>
      </div>
    </div>
  );
}