import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { manRope } from "@/ui/fonts";

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
        <body className={`${manRope.className} h-auto w-full`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
