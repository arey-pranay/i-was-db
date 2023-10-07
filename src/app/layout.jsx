import Header from "@/components/Header";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
