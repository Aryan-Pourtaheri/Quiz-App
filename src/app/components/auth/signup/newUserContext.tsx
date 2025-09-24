'use client';
import { useState, createContext, ReactNode } from 'react';
import { NewUserType, UserContextType, } from '@/app/lib/Types';


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
