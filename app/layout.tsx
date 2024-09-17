import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import "./prosemirror.css"
// import { Manrope } from "next/font/google";

// const manRope = Manrope({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
        },
        elements: {
          formButtonPrimary: "bg-[#2D66F5]",
        },
      }}
    >
      <html lang="en">
        <body className={`h-auto w-full`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
