"use client";

import Button from "@/components/Button";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context/MyContext";
import toast from "react-hot-toast";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { user, setUser } = useContext(MyContext);

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
      if (!data.user) return toast.error(data.message);
      if (data.user._id) {
        setUser(data.user);
        router.push("/");
        return toast.success(data.message);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <section>
          <form onSubmit={loginHandler}>
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
              text="Login"
              type="submit"
              className="mt-4 px-4 bg-blue-400 hover:bg-blue-600 py-2 rounded-lg text-white"
            />
          </form>
          <Link href="/signup">signup</Link>
        </section>
      </div>
    </>
  );
};

export default Login;