import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "What Planes collects, what it doesn't, and where the data goes.",
    alternates: { canonical: "/privacy" },
};

export default function Privacy() {
    return (
        <main>
            <div className="kicker">What we collect &amp; why</div>
            <h1>Privacy Policy</h1>
            <section className="legal">
                <p>
                    <strong>Effective date:</strong> April 2026
                </p>
                <p>
                    Planes is designed to collect as little as possible. No
                    account, no email, no phone number, no device identifiers,
                    no analytics SDK. This page explains exactly what flows out
                    of the app and where it lands.
                </p>

                <h2>What we collect</h2>
                <ul>
                    <li>
                        <strong>Your connected wallet&apos;s public address.</strong>{" "}
                        Shown on screen and stored alongside your leaderboard
                        rows and shop purchases so your run can be attributed to
                        you.
                    </li>
                    <li>
                        <strong>Solana transaction signatures.</strong> Every
                        shop purchase or leaderboard submission is a real Solana
                        tx; we store its signature so the server can verify the
                        transfer actually happened on-chain.
                    </li>
                    <li>
                        <strong>Your score + stars + time survived.</strong>{" "}
                        Collected at game-over only if you choose to submit to
                        the leaderboard.
                    </li>
                    <li>
                        <strong>Local gameplay state.</strong> Stored on your
                        device only via Android PlayerPrefs (total coins, plane
                        preference, sound on/off, high score). Never leaves
                        your phone.
                    </li>
                </ul>

                <h2>What we do NOT collect</h2>
                <ul>
                    <li>Your name, email, phone, or address.</li>
                    <li>Device advertising IDs, location, or sensor data.</li>
                    <li>
                        Private keys, seed phrases, or anything the Solana
                        wallet doesn&apos;t explicitly sign.
                    </li>
                    <li>
                        Third-party analytics or ad SDK data — we don&apos;t
                        bundle any.
                    </li>
                </ul>

                <h2>Where the data goes</h2>
                <ul>
                    <li>
                        <strong>Supabase</strong> (managed PostgreSQL + edge
                        functions) — stores leaderboard entries and purchase
                        receipts. Row-level security restricts writes to
                        server-verified inserts.
                    </li>
                    <li>
                        <strong>Solana mainnet-beta</strong> — all purchase and
                        leaderboard-fee transactions settle on the public Solana
                        ledger. This data is inherently public and immutable.
                    </li>
                    <li>
                        <strong>Your wallet app</strong> (Seed Vault, Phantom,
                        Solflare, etc.) — signs transactions locally and never
                        shares keys with us.
                    </li>
                </ul>

                <h2>Permissions the app requests</h2>
                <ul>
                    <li>
                        <code>INTERNET</code> — required for Solana RPC and
                        Supabase calls.
                    </li>
                    <li>
                        <code>ACCESS_NETWORK_STATE</code> — reads connectivity
                        to decide when to retry RPC calls.
                    </li>
                </ul>
                <p>
                    The app does not request location, contacts, storage,
                    camera, or microphone. It does not use Google Advertising
                    ID or any similar identifier.
                </p>

                <h2>Children</h2>
                <p>
                    Planes is not directed at children under 13. If you believe
                    a child has submitted data, contact us and we will delete
                    the associated rows.
                </p>

                <h2>Your rights</h2>
                <p>
                    You can request deletion of any leaderboard or purchase row
                    tied to your wallet by emailing{" "}
                    <a href="mailto:digitalpenguininc@gmail.com">
                        digitalpenguininc@gmail.com
                    </a>{" "}
                    from an address that controls that wallet, or by signing a
                    message with that wallet and including the signature in
                    your request. We cannot delete on-chain transactions — they
                    are permanent on the Solana ledger — but we can remove our
                    off-chain copy.
                </p>

                <h2>Changes</h2>
                <p>
                    Material changes to this policy will be reflected by
                    bumping the effective date at the top of the page.
                    We&apos;ll highlight substantive changes in the app&apos;s
                    release notes.
                </p>

                <h2>Contact</h2>
                <p>
                    All enquiries:{" "}
                    <a href="mailto:digitalpenguininc@gmail.com">
                        digitalpenguininc@gmail.com
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}
