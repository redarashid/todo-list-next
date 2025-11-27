import localFont from "next/font/local";
import { Open_Sans } from "next/font/google"; // Import Open Sans from Google Fonts
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/sidebar";
import { TodoProvider } from "@/context/todoContext";
import { CategoryProvider } from "@/context/categoryContext";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Open Sans from Google Fonts
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "Todo App - Manage Your Tasks Efficiently",
  description:
    "A simple and elegant Todo App to manage your daily tasks effectively. Built with Next.js and Tailwind CSS.",
  keywords: "todo app, task management, next.js, tailwind css, productivity",
  author: "Shrikant Yadav",
  robots: "index, follow",
  charset: "UTF-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.className} antialiased flex flex-col h-screen overflow-hidden`} // Add Open Sans here
      >
        <TodoProvider>
          <CategoryProvider>
            {/* Main Layout */}
            <div className="flex flex-1 overflow-hidden select-none">
              {/* Sidebar */}
              <Sidebar />

              <div className="flex-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                {/* Header */}
                <Header />
                {/* Main Content */}
                <main className="min-h-screen overflow-hidden">
                  <span className="text-black opacity-30 pointer-events-none fixed z-0 top-1/2 left-1/2 font-bold text-4xl -translate-x-1/2 translate-y-1/2">
                    Crafted with Passion & Precision
                  </span>
                  {children}
                </main>
                {/* Footer */}
                <Footer />
              </div>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
          </CategoryProvider>
        </TodoProvider>
      </body>
    </html>
  );
}
