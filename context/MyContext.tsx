"use client";

import React, { createContext, useState } from "react";

// remove any type
interface UserContext {
  user: any;
  setUser: (user: any) => void;
}

export const MyContext = createContext<UserContext>({
  user: {},
  // remove any type
  setUser: (user: any) => {},
});

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState({});

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
