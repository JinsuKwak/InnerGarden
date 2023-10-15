import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/navigation/Header";
import { CssBaseline } from "@mui/material";
import ToastProvider from "@/components/ToastProvider";
import Footer from "@/components/Footer";
import Head from "next/head";
import favicon from "../../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inner Garden - Calgary Day Home Agency",
  description:
    "Inner Garden Education: Established in 2009, Inner Garden Education is a trusted provider of childcare services in Calgary's Hidden Valley. With 15 years of experience, we're committed to joyful learning and meaningful growth for children. Our government-certified bilingual kindergarten ensures top-tier education in a nurturing environment. We go beyond academics, cultivating healthy, happy children emotionally, physically, and socially. Join us for a delightful educational journey, where every child's precious years are celebrated and transformed into a foundation for a bright future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <CssBaseline />
        <Header />
        <ToastProvider />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
