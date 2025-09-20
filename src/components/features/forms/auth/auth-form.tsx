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
import SignupForm from "../signup-form";
import LoginForm from "../login-form";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          {isLoginForm ? "Login to your account" : "Create an account"}
        </CardTitle>
        <CardDescription>
          {isLoginForm
            ? "Enter your username (or email) below to login to your account"
            : "Enter your email address below to create a new account"}
        </CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <br />
        <SignupForm />
      </CardContent>
    </Card>
  );
};

export default AuthForm;
