"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginFormType, SignUpFormType } from "@/types";
import { headers } from "next/headers";

export const login = async (data: LoginFormType) => {
  const supabase = await createClient();

  console.log(supabase);
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return {
      message: "Invalid login credentials",
    };
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
};

export const signup = async (data: SignUpFormType) => {
  const supabase = await createClient();

  const origin = (await headers()).get("origin");
  const { email, password, username } = data;

  const { error, data: data2 } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
      },
      emailRedirectTo: `${origin}/api/auth/callback`,
    },
  });
  console.log(data2);

  console.log("error: ", error);

  // check the username is not already used:
  const { data: userExists } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .single();

  if (userExists) {
    return {
      message:
        "A user with this username is already registered, please choose another.",
      success: false,
    };
  }

  if (error) {
    return {
      message: "There was an error creating your account.",
      success: false,
    };
  } else {
    // revalidatePath("/");
    // redirect("/");
    return {
      message: "There was an error creating your account.",
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
