import type { Metadata } from "next";

const PACKAGE = "com.techavtranew.planes";
const DEEP_LINK = `solanadappstore://details?id=${PACKAGE}`;

export const metadata: Metadata = {
    title: "Install on Seeker",
    description:
        "Open the Planes listing in the Solana dApp Store on your Seeker device.",
    openGraph: {
        title: "Install Planes on Seeker",
        description:
            "Open the Planes listing in the Solana dApp Store on your Seeker device.",
        url: "https://planesapp.xyz/install",
    },
};

export default function Install() {
    return (
        <main>
            <section className="hero">
                <img
                    className="hero-logo"
                    src="/planes_logo.png"
                    alt="Planes logo"
                />
                <div className="kicker">Solana dApp Store</div>
                <h1>Install Planes</h1>
                <p className="lead">
                    Tap the button below on your <strong>Solana Seeker</strong>{" "}
                    to open the dApp Store listing for Planes.
                </p>
                <div className="hero-ctas">
                    <a className="cta" href={DEEP_LINK}>
                        Open dApp Store listing
                    </a>
                    <a className="cta secondary" href="/">
                        Back to home
                    </a>
                </div>
            </section>

            <section className="legal">
                <h2>Don&apos;t have a Seeker?</h2>
                <p>
                    Planes is published exclusively on the{" "}
                    <a
                        href="https://docs.solanamobile.com/dapp-publishing/intro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Solana dApp Store
                    </a>
                    , which ships preinstalled on Solana Mobile devices (Seeker
                    and Saga). The link above uses a custom URI scheme
                    (<code>solanadappstore://</code>) that only resolves on
                    those devices.
                </p>
                <p>
                    If you&apos;re on a Seeker and the button didn&apos;t do
                    anything, copy this URL into the browser address bar:
                </p>
                <p>
                    <code>{DEEP_LINK}</code>
                </p>
            </section>
        </main>
    );
}
