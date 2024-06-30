import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.js"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalist Blog",
  description: "a minimalist blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer title={metadata.title}/>
        </body>
    </html>
  );
}
