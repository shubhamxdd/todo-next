"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
// import Input from "./Input";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context/MyContext";

interface Props {
  isSignup?: boolean;
}

// TODO: SSR

const LoginForm = ({ isSignup = false }: Props) => {
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
      }
      // console.log(data.user);
      if (data.user._id) return router.push("/");
    } catch (error) {}
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <section>
          <form onSubmit={isSignup ? onSubmit : loginHandler}>
            {isSignup && (
              <>
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="shubhamxd"
                  className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
              </>
            )}
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
            {
              <>
                <h3 className="mt-3">
                  {isSignup ? "Already have an account?" : "New User?"}
                  <Link
                    href={isSignup ? "/login" : "/signup"}
                    className="text-blue-500 hover:text-blue-700
            "
                  >
                    &nbsp;{isSignup ? "Login" : "Signup"}
                  </Link>
                </h3>
              </>
            }
            <Button
              text={isSignup ? "Signup" : "Login"}
              type="submit"
              className="mt-4 px-4 bg-blue-400 hover:bg-blue-600 py-2 rounded-lg text-white"
            />
          </form>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
