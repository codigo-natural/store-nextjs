import { Poppins } from "next/font/google";
import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "app/sass/globals.sass";

const popins = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
