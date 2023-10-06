"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Forgetpass = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const router = useRouter();

  const resetPasswordHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login");

    try {
      const res = await fetch("/api/auth/forgetpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await res.json();
      if (!data.user) return toast.error(data.message);
      if (data.user._id) {
        router.push("/login");
        router.refresh();
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
          <form onSubmit={resetPasswordHandler}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="user@mail.com"
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              type="password"
              name="password"
              id="password"
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <br />
            <p className="mt-2">
              <Link href=".." className="text-blue-500 dark:text-blue-400">
                Go Back
              </Link>
            </p>

            <Button
              text="Reset password"
              type="submit"
              className="mt-4 px-4 bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-blue-600 py-2 rounded-lg text-white"
            />
          </form>
        </section>
      </div>
    </>
  );
};

export default Forgetpass;
