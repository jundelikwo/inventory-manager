import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';
import {useAuth} from '../auth';

interface ItemPayloadType {
  name: string;
  totalStock: string;
  price: string;
  description: string;
}

export interface ItemType extends ItemPayloadType {
  uuid: string;
  user: string;
}

interface UserContextType {
  items: ItemType[];
  clearItems: () => void;
  addItem: (item: ItemPayloadType) => Promise<string>;
  updateItem: (item: ItemType) => Promise<string>;
}

const initialContext: UserContextType = {
  items: [],
  clearItems: () => null,
  addItem: () => new Promise(resolve => resolve('Done')),
  updateItem: () => new Promise(resolve => resolve('Done')),
};

export const InventoryContext = createContext<UserContextType>(initialContext);

export const InventoryProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const {user} = useAuth();

  useEffect(() => {
    (async () => {
      const itemValue = await AsyncStorage.getItem('inventories');

      if (itemValue) {
        const parsedItems = JSON.parse(itemValue);
        setItems(parsedItems);
      }
    })();
  }, []);

  const addItem = useCallback(
    (newItem: ItemPayloadType) => {
      return new Promise<string>((resolve, reject) => {
        const formattedItem: ItemType = {
          ...newItem,
          // I'm using the date as the uuid, this won't be appropriate
          // in production but it works fine for our use case
          uuid: new Date().toString(),
          user: user?.uuid || '',
          name: newItem.name.trim(),
        };

        const foundItem = items.find(
          item => item.name.toLowerCase() === formattedItem.name.toLowerCase(),
        );

        if (foundItem) {
          reject('Name already exist');
          return;
        }

        setItems(state => {
          const newState = [...state, formattedItem];

          AsyncStorage.setItem('inventories', JSON.stringify(newState));
          return newState;
        });
        resolve('Item added successfully');
      });
    },
    [items, user?.uuid],
  );

  const updateItem = useCallback(
    (newItem: ItemType) => {
      return new Promise<string>((resolve, reject) => {
        newItem.name = newItem.name.trim();
        let itemIndex = -1;
        let itemWithSameName = -1;

        items.forEach((item, index) => {
          if (item.uuid === newItem.uuid) {
            itemIndex = index;
            return;
          }

          if (item.name.toLowerCase() === newItem.name.toLowerCase()) {
            itemWithSameName = index;
          }
        });

        if (itemIndex === -1) {
          reject('Item does not exist');
          return;
        }

        if (itemWithSameName !== -1) {
          reject('Name already exist');
          return;
        }

        setItems(state => {
          const newState = [...state];
          newState[itemIndex] = newItem;

          AsyncStorage.setItem('inventories', JSON.stringify(newState));
          return newState;
        });
        resolve('Item updated successfully');
      });
    },
    [items],
  );

  const clearItems = useCallback(() => {
    setItems([]);
    AsyncStorage.removeItem('inventories');
  }, []);

  return (
    <InventoryContext.Provider value={{items, addItem, clearItems, updateItem}}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);

export default InventoryProvider;
