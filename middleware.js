import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/items/(.*)",
    "/items",
    "/api",
    "/api/zoom/",
    "api/zoom/(.*)",
  ],
  ignoredRoutes: ["/api/zoom", "/api/zoom/(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
