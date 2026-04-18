import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "License",
    description: "End-user licence agreement for Planes.",
    alternates: { canonical: "/license" },
};

export default function License() {
    return (
        <main>
            <div className="kicker">End-user license agreement</div>
            <h1>License</h1>
            <section className="legal">
                <p>
                    <strong>Last updated:</strong> April 2026
                </p>

                <h2>1. Grant of licence</h2>
                <p>
                    Digital Chocolate INC (&quot;we&quot;, &quot;us&quot;) grants
                    you a personal, revocable, non-exclusive, non-transferable,
                    limited licence to install and run the Planes application
                    (the &quot;App&quot;) on Android devices you own or control,
                    solely for your personal, non-commercial use.
                </p>

                <h2>2. Restrictions</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>
                        reverse engineer, decompile, disassemble, or derive
                        source code from the App, except to the extent that
                        applicable law expressly permits;
                    </li>
                    <li>
                        modify, create derivative works of, or redistribute the
                        App or its assets;
                    </li>
                    <li>
                        automate or script gameplay, or submit scores that were
                        not produced by genuine real-time play;
                    </li>
                    <li>
                        use the App to infringe on any third-party rights or
                        break applicable law;
                    </li>
                    <li>remove or obscure any proprietary notices.</li>
                </ul>

                <h2>3. On-chain interactions</h2>
                <p>
                    The App initiates Solana transactions at your request. You
                    are solely responsible for the wallet you connect, the fees
                    paid, and any coins, NFTs, or tokens that result. All
                    on-chain activity is public and irreversible.
                </p>

                <h2>4. Open-source components</h2>
                <p>
                    The App is distributed under this proprietary licence as a
                    whole. Certain bundled components are available under their
                    own open-source licences (for example the Solana Unity SDK
                    under Apache 2.0). Those licences continue to apply to those
                    components.
                </p>

                <h2>5. Warranty disclaimer</h2>
                <p>
                    The App is provided &quot;as is&quot; and &quot;as
                    available&quot; without warranty of any kind, express or
                    implied, including but not limited to warranties of
                    merchantability, fitness for a particular purpose, or
                    non-infringement.
                </p>

                <h2>6. Limitation of liability</h2>
                <p>
                    To the maximum extent permitted by law, Digital Chocolate
                    INC will not be liable for any indirect, incidental,
                    special, consequential or punitive damages, or any loss of
                    profits, revenues, data or digital assets, arising from
                    your use of the App.
                </p>

                <h2>7. Termination</h2>
                <p>
                    This licence terminates automatically if you breach it. On
                    termination you must uninstall the App. The sections that
                    by their nature should survive termination will survive.
                </p>

                <h2>8. Contact</h2>
                <p>
                    Questions about this licence:{" "}
                    <a href="mailto:digitalpenguininc@gmail.com">
                        digitalpenguininc@gmail.com
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}
