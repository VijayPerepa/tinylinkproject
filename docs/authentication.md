# Authentication Rules

## Core Principle

**Clerk is the ONLY authentication method for this application. NO other auth method should be used.**

## Protected Routes

### Dashboard Route
- `/dashboard` is a **protected route**
- Users MUST be logged in to access this page
- Unauthenticated users attempting to access `/dashboard` should be redirected to homepage (`/`) where they can sign in via modal

```typescript
// app/dashboard/layout.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }
  
  return <>{children}</>;
}
```

## Route Redirects

### Homepage Behavior
- If a user is **already logged in** and tries to access the homepage (`/`), they should be **redirected to `/dashboard`**

```typescript
// app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  
  // Show landing page for non-authenticated users
  return <LandingPage />;
}
```

## Authentication UI

### Modal-Only Sign In/Sign Up
- Sign in and sign up via Clerk should **ALWAYS launch as a modal**
- Never use dedicated full-page routes for authentication

```typescript
// ✅ CORRECT - Modal mode
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>

// ❌ INCORRECT - Redirect mode
<SignInButton mode="redirect">
  <button>Sign In</button>
</SignInButton>
```

## Implementation Checklist

- [ ] All authentication uses Clerk only
- [ ] `/dashboard` requires authentication
- [ ] Logged-in users accessing `/` redirect to `/dashboard`
- [ ] Sign in/up components use `mode="modal"`
- [ ] No custom auth logic implemented
- [ ] Middleware or layout protects dashboard routes

## Middleware Example

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/l/(.*)", // Public short link redirects
]);

const isDashboardRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  
  // Protect dashboard routes
  if (isDashboardRoute(request) && !userId) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }
  
  // Redirect logged-in users from homepage to dashboard
  if (request.nextUrl.pathname === "/" && userId) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

## Key Points

1. **Clerk Only** - No custom JWT, sessions, or other auth systems
2. **Protected Dashboard** - Always verify authentication for `/dashboard`
3. **Smart Homepage** - Redirect authenticated users to dashboard
4. **Modal Authentication** - Use `mode="modal"` for all Clerk auth components
