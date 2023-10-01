"use client";

import { MyContext } from "@/context/MyContext";
import { useContext } from "react";

const ProfilePage = () => {
  const { user } = useContext(MyContext);
  //   console.log(user);

  const { name, email } = user;

  return (
    <>
      <div>
        <h1>Username: {name} </h1>
        <h1>Email: {email} </h1>
      </div>
    </>
  );
};

export default ProfilePage;
