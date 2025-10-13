'use client';

import React, { createContext, ReactNode, useState } from 'react';

export type app_role = 'student' | 'teacher' | 'admin' | 'user' | null;

export type RoleContextType = {
    role: app_role;
    setRole: React.Dispatch<React.SetStateAction<app_role>>;
}

export const RoleContext = createContext<RoleContextType | undefined>(undefined); 


export const RoleProvider = ({children} : {children: ReactNode}) => {
  const [role, setRole] = useState<app_role>(null);
  
  return (
    <RoleContext.Provider value={{role, setRole}}>
      {children}
    </RoleContext.Provider>
  )
}


