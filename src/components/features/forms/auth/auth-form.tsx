"use client";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "./signup-form";
import LoginForm from "./login-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  return (
    <Card className="w-full max-w-md mb-0 pb-2">
      <CardHeader className="pb-0">
        <CardTitle>
          {isLoginForm ? "Login to your account" : "Create an account"}
        </CardTitle>
        <CardDescription>
          {isLoginForm
            ? "Enter your username (or email) below to login to your account"
            : "Enter your email address below to create a new account"}
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-0">
        {isLoginForm ? <LoginForm /> : <SignupForm />}
        <p className="text-sm">
          {isLoginForm ? "Don't have an acount?" : "Already have an account"}{" "}
          <Button
            className="p-0 m-0"
            variant={"link"}
            onClick={() => setIsLoginForm(!isLoginForm)}
          >
            {isLoginForm ? "Sign up here" : "? Login here"}
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
