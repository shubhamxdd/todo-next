"use client";

import React, { createContext, useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";

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

  useEffect(() => {
    fetch("/api/auth/profile")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data.user) {
          setUser(data.user);
        }
      });
  }, []);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
      <Toaster />
    </MyContext.Provider>
  );
};
