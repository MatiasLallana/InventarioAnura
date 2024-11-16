export interface PhoneModel {
  id: string;
  name: string;
  description: string;
}

export interface InventoryItem {
  phoneModel: PhoneModel | null;
  tube: number;
  coil: number;
  base: number;
  powerSupply: number;
}

export interface Van {
  id: string;
  name: string;
  inventory: InventoryItem;
}