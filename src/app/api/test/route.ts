import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ team: string }> }
) {
  const supabase = await createClient();
  const {
    data: instruments,
    count,
    status,
  } = await supabase.from("instruments").select();

  return new Response(JSON.stringify({ instruments, count, status }));
}
