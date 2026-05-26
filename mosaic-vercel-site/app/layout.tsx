import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mosaic Hypnotherapy | Online Solution Focused Hypnotherapy",
  description:
    "Solution focused hypnotherapy with Helen O'Gorman for overcoming burnout, anxiety and overthinking through changing subconcious patterns. Online sessions available worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
