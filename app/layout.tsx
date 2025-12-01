import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Film Studio - Créez votre long métrage avec l'IA",
  description: "La meilleure plateforme pour créer un long métrage entièrement réalisé grâce à l'intelligence artificielle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
