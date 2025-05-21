import type { Metadata } from "next";
import { Sawarabi_Gothic } from 'next/font/google';
import { auth } from "@/libs/database/auth";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";

const font = Sawarabi_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareFiles",
  description: "Share Files",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const login = await auth();
  console.log(login);

  return (
    <html lang="jp-ja">
      <body className={`antialiased ${font.className}`} >
        <div className="p-3">
          <Header login={!!login} />
        </div>
        <div className="min-h-screen">
          { children }
        </div>
        
      </body>
    </html>
  );
}
