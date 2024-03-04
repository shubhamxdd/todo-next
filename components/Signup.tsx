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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { user, setUser } = useContext(MyContext);

  const signupHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });
      const data = await res.json();
      // console.log(data);
      if (!data.user) return toast.error(data.message);
      if (data.user._id) {
        setUser(data.user);
        router.push("/");
        router.refresh();
        toast.success(data.message);
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
          <form onSubmit={signupHandler}>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="username"
              name="username"
              id="username"
              placeholder="shubhamxd"
              className="border rounded-lg py-2 px-4 outline-none mb-4 text-black"
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
              className="border rounded-lg py-2 px-4 outline-none mb-4 text-black"
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
              className="border rounded-lg py-2 px-4 outline-none text-black"
            />
            <p className="mt-2">
              Already have an account?
              <Link href="/login" className="text-blue-500 dark:text-blue-400">
                &nbsp;{"Login"}
              </Link>
            </p>
            <Button
              text="Signup"
              type="submit"
              className="mt-4 px-4 bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-blue-600 py-2 rounded-lg text-white"
            />
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;
