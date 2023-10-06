import Header from "@/components/Header";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
