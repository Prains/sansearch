import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "SanSearch",
  description: "Сайт по поиску юридических документов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-text" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
