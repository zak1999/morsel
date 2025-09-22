import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware.sb";

const middleware = async (req: NextRequest) => {
  return updateSession(req);
};
export const config = {
  matcher: [
    "/private/:path*",
    // "/api/:path*", // protect all API routes],
  ],
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * */
  // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
};

export default middleware;
