import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Nav/Header";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import TanstackProvider from "@/components/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GrabIt",
  description: "Grab your favorite items at the best price!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <TanstackProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <div className="min-h-screen flex flex-col">
              <main className="container mx-auto ">{children}</main>
              <Toaster />
              <footer className="mt-auto bg-gray-800 text-white text-center py-4">
                © {new Date().getFullYear()} GRABIT. All Rights Reserved.
              </footer>
            </div>
          </body>
        </html>
      </TanstackProvider>
    </ClerkProvider>
  );
}
