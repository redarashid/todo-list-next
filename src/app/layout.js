import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { TodoProvider } from "./context/todoContext";
import { CategoryProvider } from "./context/categoryCotext";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import Header from "./components/header";

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
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TodoProvider>
          <CategoryProvider>
            {/* Main Layout */}
            <div className=" flex flex-1 overflow-hidden select-none">
              {/* Sidebar */}
              <Sidebar />
              <div className=" flex-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                {/* Header */}
                <Header />
                <main className="h-screen overflow-hidden relative">
                  <span
                    className="text-black opacity-30 pointer-events-none fixed z-0 
                   top-1/2 left-1/2 font-bold text-4xl -translate-x-1/2 translate-y-1/2"
                  >
                    Innovating the Future, Today
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
