"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "@/context/MyContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginLogout = () => {
  const { user, setUser } = useContext(MyContext);
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      console.log("logging out");
      setUser({});
      toast.success(data.message);
      router.push("/login");
      router.refresh();

      if (!data.user._id) return toast.error(data.message);
    } catch (error) {
      // return toast.error(data.message);
    }
  };
  return user._id ? (
    <button onClick={() => logoutHandler()}>Logout</button>
  ) : (
    <Link href="/login">Login</Link>
  );
};

export default LoginLogout;
