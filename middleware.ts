import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

// Do NOT set runtime: "nodejs" anymore
export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Match all routes except static files
    "/(api|trpc)(.*)",
  ],
};
