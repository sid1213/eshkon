"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface PropType {
  children: ReactNode;
}
const Auth: React.FC<PropType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Auth;
