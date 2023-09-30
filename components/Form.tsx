"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { FormEvent } from "react";

interface Props {
  isSignup?: boolean;
}

const LoginForm = ({ isSignup = false }: Props) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <section>
          <form onSubmit={onSubmit}>
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
