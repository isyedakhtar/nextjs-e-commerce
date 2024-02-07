import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shipping Address",
  description: "Generated by create next app",
};
export default function PaymentMethodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header />
      </header>
      <section
        className="
      justify-center
      mt-11
      flex
      md:flex-row
      flex-wrap
      flex-col
      w-full
      m-auto
      gap-5
      p-1
      min-h-screen
      mb-11
      "
      >
        {children}
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
