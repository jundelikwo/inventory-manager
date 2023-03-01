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

interface ItemType extends ItemPayloadType {
  uuid: string;
  user: string;
}

interface UserContextType {
  items: ItemType[];
  clearItems: () => void;
  addItem: (item: ItemPayloadType) => Promise<string>;
}

const initialContext: UserContextType = {
  items: [],
  clearItems: () => null,
  addItem: () => new Promise(resolve => resolve('Done')),
};

export const InventoryContext = createContext<UserContextType>(initialContext);

export const InventoryProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const {user} = useAuth();
  console.log('items', items);

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
          uuid: newItem.name.trim().toLowerCase(),
          user: user?.uuid || '',
          name: newItem.name.trim(),
        };

        const foundItem = items.find(
          item => item.name.toLowerCase() === formattedItem.uuid,
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

  const clearItems = useCallback(() => {
    setItems([]);
    AsyncStorage.removeItem('inventories');
  }, []);

  return (
    <InventoryContext.Provider value={{items, addItem, clearItems}}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);

export default InventoryProvider;
