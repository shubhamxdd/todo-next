"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "@/context/MyContext";

const LoginLogout = () => {
  const { user } = useContext(MyContext);
  return user.id ? <Button text="Logout" /> : <Link href="/login">Login</Link>;
};

export default LoginLogout;
