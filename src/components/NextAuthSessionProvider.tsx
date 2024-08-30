"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface INextAuthSessionProvider {
  children: React.ReactNode;
}

const NextAuthSessionProvider = ({ children }: INextAuthSessionProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
