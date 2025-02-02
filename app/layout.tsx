import type { Metadata } from "next";
import { raleway, roboto } from "./fonts";
import "./globals.css";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "@/components/registry";
import SaleBanner from "@/components/SaleBanner";

export const metadata: Metadata = {
  title: "Honeysuckles | Personalized Floral Designs",
  description:
    "Here at Honeysuckles, we create custom flower arrangements across weddings, special events, and everyday use. Known for our exquisite designs and personalized service, we create memorable floral experiences tailored to each client's vision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${roboto.variable}`}>
      <body>
        <StyledComponentsRegistry>
          {/* Sale Banner */}
          <SaleBanner />
          <HeadNav sale/>
          <main className="sale">{children}</main>
          <footer>
            <Footer />
          </footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
