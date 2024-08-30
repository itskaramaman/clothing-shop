"use client";

import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";

const SignUpPage = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <main>
      <Breadcrumb className="p-12 md:p-16 lg:p-20 bg-gray-50">
        <h1 className="text-2xl mb-2">Sign Up</h1>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ecommerce</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="font-semibold" href="/auth/signup">
              Sign Up
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-[350px] mx-auto">
        <Button
          className={`${buttonVariants({ variant: "default" })} w-full my-4`}
          onClick={() => signIn(providers?.google.id)}
        >
          Sign Up With Google
        </Button>
        <Card className="p-5 space-y-4">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Create Account</Button>
        </Card>
      </div>
    </main>
  );
};

export default SignUpPage;
