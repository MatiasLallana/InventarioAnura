import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface InventoryItem {
  [key: string]: number;
}

interface VanInventory {
  [phoneModel: string]: InventoryItem;
}

interface InventoryState {
  vans: {
    [vanId: string]: VanInventory;
  };
  phoneModels: string[];
  addPhoneModel: (model: string) => void;
  removePhoneModel: (model: string) => void;
  incrementItem: (vanId: string, phoneModel: string, item: string) => void;
  decrementItem: (vanId: string, phoneModel: string, item: string) => void;
  getVanInventory: (vanId: string) => VanInventory;
  getTotalStock: () => { [phoneModel: string]: InventoryItem };
  saveChanges: () => void;
}

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set, get) => ({
      vans: {
        PFT058: {},
        PAU781: {},
        PAU782: {},
      },
      phoneModels: ['Grandstream GXP1625', 'Yealink T23G', 'Fanvil X3S'],
      
      addPhoneModel: (model) =>
        set((state) => ({
          phoneModels: [...state.phoneModels, model],
        })),

      removePhoneModel: (model) =>
        set((state) => ({
          phoneModels: state.phoneModels.filter((m) => m !== model),
          vans: Object.fromEntries(
            Object.entries(state.vans).map(([vanId, inventory]) => [
              vanId,
              Object.fromEntries(
                Object.entries(inventory).filter(([m]) => m !== model)
              ),
            ])
          ),
        })),

      incrementItem: (vanId, phoneModel, item) =>
        set((state) => ({
          vans: {
            ...state.vans,
            [vanId]: {
              ...state.vans[vanId],
              [phoneModel]: {
                ...state.vans[vanId][phoneModel],
                [item]: (state.vans[vanId][phoneModel]?.[item] || 0) + 1,
              },
            },
          },
        })),

      decrementItem: (vanId, phoneModel, item) =>
        set((state) => ({
          vans: {
            ...state.vans,
            [vanId]: {
              ...state.vans[vanId],
              [phoneModel]: {
                ...state.vans[vanId][phoneModel],
                [item]: Math.max(
                  (state.vans[vanId][phoneModel]?.[item] || 0) - 1,
                  0
                ),
              },
            },
          },
        })),

      getVanInventory: (vanId) => {
        const state = get();
        return state.vans[vanId] || {};
      },

      getTotalStock: () => {
        const state = get();
        const totalStock: { [phoneModel: string]: InventoryItem } = {};

        state.phoneModels.forEach((model) => {
          totalStock[model] = {};
          ['Teléfono', 'Tubo', 'Rulo', 'Base', 'Fuente'].forEach((item) => {
            totalStock[model][item] = Object.values(state.vans).reduce(
              (sum, van) => sum + (van[model]?.[item] || 0),
              0
            );
          });
        });

        return totalStock;
      },

      saveChanges: () => {
        // Los cambios se guardan automáticamente gracias al middleware persist
        console.log('Cambios guardados');
      },
    }),
    {
      name: 'inventory-storage',
    }
  )
);