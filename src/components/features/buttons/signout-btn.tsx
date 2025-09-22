"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/supabase/auth/actions";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSignOut = async () => {
    setLoading(true);
    const status = await signOut();
    if (status === 200) {
      router.push("/login");
    }
  };
  return (
    <div>
      <Button variant={"secondary"} onClick={handleSignOut} disabled={loading}>
        {loading ? "..." : "Sign out"}
      </Button>
    </div>
  );
};

export default SignoutButton;
