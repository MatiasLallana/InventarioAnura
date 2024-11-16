import React, { useState } from 'react';
import { useInventoryStore } from '../stores/inventoryStore';
import { Plus, Trash } from 'lucide-react';

const PhoneModelManager: React.FC = () => {
  const { phoneModels, addPhoneModel, removePhoneModel } = useInventoryStore();
  const [newModel, setNewModel] = useState('');

  const handleAddModel = () => {
    if (newModel.trim()) {
      addPhoneModel(newModel.trim());
      setNewModel('');
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={newModel}
          onChange={(e) => setNewModel(e.target.value)}
          placeholder="Nuevo modelo de teléfono"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <button
          onClick={handleAddModel}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phoneModels.map((model) => (
          <div
            key={model}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
          >
            <span>{model}</span>
            <button
              onClick={() => removePhoneModel(model)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneModelManager;