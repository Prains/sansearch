import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Providers";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "SanSearch",
  description: "Сайт по поиску юридических документов",
};

export default function RootLayout({ children, auth }) {
  return (
    <html lang="ru">
      <body className="font-text" suppressHydrationWarning={true}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4TFQC8LTVE"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4TFQC8LTVE');`}
        </Script>
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
