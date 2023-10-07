import Header from "@/components/Header";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
