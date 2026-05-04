export default function Home() {
    return (
        <main>
            <section className="hero">
                <img
                    className="hero-logo"
                    src="/planes_logo.png"
                    alt="Planes logo"
                />
                <div className="kicker">Solana Seeker · dApp Store</div>
                <h1>Dodge. Collect. Top the board.</h1>
                <p className="lead">
                    Classic arcade plane-dodger with full Solana Mobile Stack
                    integration. Fly through heat-seeking missiles, grab stars,
                    and mint your run onto the on-chain leaderboard.
                </p>
                <div className="hero-ctas">
                    <a className="cta" href="/install">
                        Install on Seeker
                    </a>
                    <a
                        className="cta secondary"
                        href="https://explorer.solana.com/address/BnyMQqouteLXiswkyZhkqCd9mMQCcxC8pabdMUypvzLt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on-chain
                    </a>
                </div>
            </section>

            <section>
                <h2>What&apos;s in the game</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Dodge or die</h3>
                        <p>
                            Waves of heat-seeking missiles home in on your jet.
                            Turn on a dime and stay in the sky as long as you can.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Collect stars</h3>
                        <p>
                            Grab every star mid-flight to pump up your score —
                            stars × 10 + seconds survived × 1.5 = total.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>On-chain leaderboard</h3>
                        <p>
                            Spend a tiny SOL fee to settle your run onto Solana
                            mainnet. Every rank is cryptographically provable.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Shop with SOL</h3>
                        <p>
                            Buy coin packs directly through Mobile Wallet Adapter.
                            Seed Vault, Phantom, Solflare — whatever signs.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Verified by on-chain proof</h3>
                        <p>
                            Every submitted score is validated by a Supabase edge
                            function that re-checks the Solana tx before writing.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>No ads, ever</h3>
                        <p>
                            No tracking SDKs, no interstitials, no paywalls. Just
                            the game and the chain.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
