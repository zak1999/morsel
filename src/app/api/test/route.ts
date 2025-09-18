export async function GET(
  request: Request,
  { params }: { params: Promise<{ team: string }> }
) {
  console.log(params);
  return new Response("Hello, Next.js!");
}
