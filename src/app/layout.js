import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Sans({ subsets: ["latin"] , weight:"300"});

export const metadata = {
  title: "Loom",
  description: "Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
