import React, { 
  createContext, 
  useContext, 
  useState, 
  ReactNode 
} from 'react';

import { UserDTO } from '../dtos/UserDTO';

import { api } from '../services/api';

interface AuthContextData {
  user: string;
  signIn(credentials: object): Promise<void>;
  signOut(): Promise<void>;
}

interface PropsProvider {
  children: ReactNode;
}

interface CredentialProps {
  userName: string;
  passwordApp: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: PropsProvider) {
  const [user, setUser] = useState('');

  async function signIn(credentials: CredentialProps) {
    try {      
      const response = await api.post('login', credentials);

      const data = response.data as UserDTO;

      setUser(data.username);
    } catch (error: any) { 
      throw new Error(error);
    }
  }

  async function signOut() {
    setUser('');
  }

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};