import type { Metadata } from "next";
import "./main.css"
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing Test With Stripe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
