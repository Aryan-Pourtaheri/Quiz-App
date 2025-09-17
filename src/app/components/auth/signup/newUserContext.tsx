'use client';
import { useState, createContext, ReactNode } from 'react';

export interface NewUserType {
  name: string;
  surname: string;
  DateOfBirth: string;
  email: string;
  password: string;
}

interface UserContextType {
  newUser: NewUserType;
  setNewUser: React.Dispatch<React.SetStateAction<NewUserType>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [newUser, setNewUser] = useState<NewUserType>({
    name: "",
    surname: "",
    DateOfBirth: "",
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
