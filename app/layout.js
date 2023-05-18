import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "SanSearch",
  description: "Сайт по поиску юридических документов",
};

export default function RootLayout({ children, auth }) {
  return (
    <html lang="ru">
      <body className="font-text" suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          {auth}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
