// app/api/profiles/[username]/route.ts
import { codeMap } from "@/lib/supabase/code-map";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type ProfileRequestType = {
  username: string;
};

export async function GET(
  _req: Request,
  { params }: { params: ProfileRequestType }
) {
  const { username } = params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  if (!error) {
    return NextResponse.json(data);
  }
  return NextResponse.json({ ...error }, { status: codeMap[error.code] });
}
