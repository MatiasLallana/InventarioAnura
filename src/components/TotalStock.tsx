import React from 'react';
import { Van } from '../types';
import { Phone, Radio, Cable, Package, Battery } from 'lucide-react';

interface TotalStockProps {
  vans: Van[];
}

export default function TotalStock({ vans }: TotalStockProps) {
  const totalStock = vans.reduce(
    (acc, van) => ({
      tube: acc.tube + van.inventory.tube,
      coil: acc.coil + van.inventory.coil,
      base: acc.base + van.inventory.base,
      powerSupply: acc.powerSupply + van.inventory.powerSupply,
    }),
    { tube: 0, coil: 0, base: 0, powerSupply: 0 }
  );

  const StockItem = ({ icon: Icon, label, value, color }: any) => (
    <div className={`flex items-center gap-3 ${color} p-4 rounded-lg`}>
      <Icon className="w-6 h-6" />
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Stock Total</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StockItem
          icon={Radio}
          label="Tubos"
          value={totalStock.tube}
          color="bg-green-50"
        />
        <StockItem
          icon={Cable}
          label="Rulos"
          value={totalStock.coil}
          color="bg-yellow-50"
        />
        <StockItem
          icon={Package}
          label="Bases"
          value={totalStock.base}
          color="bg-purple-50"
        />
        <StockItem
          icon={Battery}
          label="Fuentes"
          value={totalStock.powerSupply}
          color="bg-red-50"
        />
      </div>
    </div>
  );
}