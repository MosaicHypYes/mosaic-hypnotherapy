
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mosaic Hypnotherapy | Solution Focused Hypnotherapy",
  description:
    "Solution focused hypnotherapy for burnout, anxiety, overthinking and subconscious patterns. Online sessions available worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
