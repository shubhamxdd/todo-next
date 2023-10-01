"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
// import Input from "./Input";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context/MyContext";
import toast from "react-hot-toast";

interface Props {
  isSignup?: boolean;
}

// TODO: SSR

const Signup = ({ isSignup = false }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { user, setUser } = useContext(MyContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("signup");
  };

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      // console.log(data);

      if (data.success) {
        setUser(data.user);
        return console.log("from success");
      }
      if (!data.success) {
        return toast.error(data.message);
      }
      console.log(data.user);
      if (data.user._id) return router.push("/");
      return toast.success(data.message);
    } catch (error) {}
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <section>
          <form onSubmit={isSignup ? onSubmit : loginHandler}>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="username"
              name="username"
              id="username"
              placeholder="shubhamxd"
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="user@mail.com"
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <br />
            <Button
              text="Signup"
              type="submit"
              className="mt-4 px-4 bg-blue-400 hover:bg-blue-600 py-2 rounded-lg text-white"
            />
          </form>
          <Link
            href="/login"
            className="text-blue-500 hover:text-blue-700
            "
          >
            &nbsp;{"Login"}
          </Link>
        </section>
      </div>
    </>
  );
};

export default Signup;
