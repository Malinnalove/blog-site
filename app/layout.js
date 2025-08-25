import Providers from "./providers";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata = { title: "A Quiet Corner", description: "Home · Writing · About" };

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  const isAdmin = !!session;

  return (
    <html lang="en" className={isAdmin ? "is-admin" : ""}>
      <head>
        {/* 字体与全局样式（来自你的 index.html） */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
        {/* 你的行为脚本（在页面可交互后加载） */}
        <Script src="/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
