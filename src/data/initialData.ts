import { PhoneModel, Van } from '../types';

export const phoneModels: PhoneModel[] = [
  { id: '1', name: 'Yealink T33G', description: 'Teléfono IP Empresarial Básico' },
  { id: '2', name: 'Fanvil X3S', description: 'Teléfono IP Gama Media' },
  { id: '3', name: 'Grandstream GXP1625', description: 'Teléfono IP HD' },
];

export const initialVans: Van[] = [
  {
    id: '1',
    name: 'Unidad 1',
    inventory: {
      phoneModel: null,
      tube: 0,
      coil: 0,
      base: 0,
      powerSupply: 0,
    },
  },
  {
    id: '2',
    name: 'Unidad 2',
    inventory: {
      phoneModel: null,
      tube: 0,
      coil: 0,
      base: 0,
      powerSupply: 0,
    },
  },
  {
    id: '3',
    name: 'Unidad 3',
    inventory: {
      phoneModel: null,
      tube: 0,
      coil: 0,
      base: 0,
      powerSupply: 0,
    },
  },
];