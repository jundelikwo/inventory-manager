import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';

interface UserType {
  uuid: string;
  email: string;
}

interface UserContextType {
  user?: UserType;
  logout: () => void;
  login: (email: string, password: string) => void;
}

export const initialAuthContext: UserContextType = {
  user: undefined,
  login: () => null,
  logout: () => null,
};

export const AuthContext = createContext<UserContextType>(initialAuthContext);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserType>();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const userValue = await AsyncStorage.getItem('user');

      if (userValue) {
        const parsedUser = JSON.parse(userValue);
        setUser(parsedUser);
      }
    })();
  }, []);

  const login = useCallback(
    (email: string, _password: string) => {
      // We just use the user's email as their uuid
      // In production this would be provided by the server
      const newUser: UserType = {
        email,
        uuid: email.toLowerCase(),
      };

      setUser(newUser);

      AsyncStorage.setItem('user', JSON.stringify(newUser));

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'DashboardNavigation',
            },
          ],
        }),
      );
    },
    [navigation],
  );

  const logout = useCallback(() => {
    setUser(undefined);
    AsyncStorage.multiRemove(['user', 'inventories']);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'AuthNavigation',
          },
        ],
      }),
    );
  }, [navigation]);

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
