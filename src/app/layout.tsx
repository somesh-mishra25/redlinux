
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedLinux TechnoSolutions | Cloud, DevOps & Web Development",
  description: "Cloud, DevOps, Kubernetes and Web Engineering services by RedLinux TechnoSolutions.",
  icons: { icon: "/images/logo/favicon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
