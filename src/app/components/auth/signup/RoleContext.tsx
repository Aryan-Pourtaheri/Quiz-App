'use client';

import React, { createContext, ReactNode, useState } from 'react';

type RoleType = 'student' | 'teacher' | null;

export type RoleContextType = {
    role: RoleType;
    setRole: React.Dispatch<React.SetStateAction<RoleType>>;
}

export const RoleContext = createContext<RoleContextType | undefined>(undefined); 


export const RoleProvider = ({children} : {children: ReactNode}) => {
  const [role, setRole] = useState<RoleType>(null);
  
  return (
    <RoleContext.Provider value={{role, setRole}}>
      {children}
    </RoleContext.Provider>
  )
}


