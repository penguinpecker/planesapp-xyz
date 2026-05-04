import type { Metadata } from "next";
import Nav from "./Nav";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://planesapp.xyz"),
    title: {
        default: "Planes — retro dodge-em-up on Solana",
        template: "%s · Planes",
    },
    description:
        "Classic arcade plane-dodger with full Solana Mobile Stack integration. Dodge missiles, collect stars, climb an on-chain leaderboard.",
    applicationName: "Planes",
    openGraph: {
        title: "Planes",
        description:
            "Dodge missiles, collect stars, climb the on-chain leaderboard on Solana.",
        url: "https://planesapp.xyz",
        siteName: "Planes",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Planes",
        description:
            "Dodge missiles, collect stars, climb the on-chain leaderboard on Solana.",
    },
    icons: {
        icon: "/planes_logo.png",
        shortcut: "/planes_logo.png",
        apple: "/planes_logo.png",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0f1829",
};

function Footer() {
    return (
        <footer>
            <span>&copy; 2026 Digital Chocolate INC · Planes</span>
            <span>
                <a href="mailto:digitalpenguininc@gmail.com">
                    digitalpenguininc@gmail.com
                </a>
            </span>
        </footer>
    );
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
