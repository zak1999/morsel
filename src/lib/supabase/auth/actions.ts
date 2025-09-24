"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginFormType, SignUpFormType } from "@/types";
import { headers } from "next/headers";

export const login = async (data: LoginFormType) => {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return {
      message: "Invalid login credentials",
    };
  } else {
    revalidatePath("/", "layout");
    redirect(origin || "/");
  }
};

export const signup = async (data: SignUpFormType) => {
  const supabase = await createClient();

  const origin = (await headers()).get("origin");
  const { email, password, username } = data;

  const { data: emailUsed } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .single();

  console.log("emailUsed", emailUsed);

  if (emailUsed) {
    return {
      message: "A profile registered with this email already exists.",
      success: false,
    };
  }

  // check the username is not already used:
  const { data: usernameUsed } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .single();

  if (usernameUsed) {
    return {
      message:
        "A profile with this username is already registered, please choose another.",
      success: false,
    };
  }

  const { error, data: data2 } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
      emailRedirectTo: `${origin}/api/auth/callback`,
    },
  });
  console.log("data from auth.singup(): ", data2);

  if (error) {
    return {
      message: "There was an error creating your account.",
      success: false,
    };
  } else {
    return {
      message: "Success",
      success: true,
    };
  }
};

export const signOut = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
  if (error?.status) return error.status;
  else return 200;
};
