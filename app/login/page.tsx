"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import LoginView from "@/components/LoginView";

const Login = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <LoginView />
    </div>
  );
};

export default Login;
