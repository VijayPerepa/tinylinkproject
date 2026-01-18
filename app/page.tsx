import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SignUpButton } from "@clerk/nextjs";
import { Link2, BarChart3, Shield, Zap } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center bg-background">
      {/* Hero Section */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Shorten Links,
              <br />
              <span className="text-primary">Amplify Your Reach</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Transform long, unwieldy URLs into short, memorable links. 
              Track performance, manage your links, and boost engagement with TinyLink.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <SignUpButton mode="modal">
                <Button size="lg" className="rounded-full px-8 text-base">
                  Get Started Free
                </Button>
              </SignUpButton>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-muted/50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to manage your links
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features to help you create, track, and optimize your short links
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1: Easy Link Shortening */}
            <Card className="border-muted">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Easy Link Shortening</CardTitle>
                <CardDescription className="mt-2">
                  Create short, memorable links in seconds with our simple and intuitive interface
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2: Analytics & Tracking */}
            <Card className="border-muted">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Analytics & Tracking</CardTitle>
                <CardDescription className="mt-2">
                  Track clicks, monitor performance, and gain insights into your link engagement
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3: Secure & Reliable */}
            <Card className="border-muted">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
                <CardDescription className="mt-2">
                  Your links are protected with enterprise-grade security and 99.9% uptime guarantee
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 4: Lightning Fast */}
            <Card className="border-muted">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription className="mt-2">
                  Instant redirects with global CDN ensuring your links work fast anywhere
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Join thousands of users who trust TinyLink to manage their URLs.
                Create your first short link in seconds.
              </p>
              <SignUpButton mode="modal">
                <Button size="lg" className="mt-8 rounded-full px-8 text-base">
                  Create Your Free Account
                </Button>
              </SignUpButton>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border px-4 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2026 TinyLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
