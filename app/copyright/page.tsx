import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Copyright",
    description: "Copyright, trademarks, and DMCA takedown for Planes.",
    alternates: { canonical: "/copyright" },
};

export default function Copyright() {
    return (
        <main>
            <div className="kicker">Ownership &amp; DMCA</div>
            <h1>Copyright</h1>
            <section className="legal">
                <p>
                    <strong>© 2026 Digital Chocolate INC. All rights reserved.</strong>
                </p>
                <p>
                    The Planes mobile game, including its source code, compiled
                    binaries, game design, artwork, sound, written copy, user
                    interface layouts, logos, and the &quot;Planes&quot; name,
                    is the original creative work of Digital Chocolate INC and
                    is protected by copyright, trademark, and other
                    intellectual-property laws.
                </p>

                <h2>Permitted uses</h2>
                <ul>
                    <li>
                        Playing the App under the terms of the{" "}
                        <a href="/license">licence</a>.
                    </li>
                    <li>
                        Writing reviews, articles, or gameplay commentary that
                        include fair-use screenshots or short video clips with
                        attribution to &quot;Planes by Digital Chocolate
                        INC&quot;.
                    </li>
                    <li>
                        Sharing on-chain transaction signatures and wallet-level
                        gameplay statistics, which are inherently public.
                    </li>
                </ul>

                <h2>Not permitted</h2>
                <ul>
                    <li>
                        Rebranding, relabelling, or redistributing the App as
                        your own product.
                    </li>
                    <li>
                        Extracting sprites, sound, or other assets for reuse in
                        other projects.
                    </li>
                    <li>
                        Commercial use of the &quot;Planes&quot; name, logo, or
                        marks without written permission.
                    </li>
                </ul>

                <h2>Third-party assets</h2>
                <p>
                    The App includes third-party components distributed under
                    their own licences, including the Solana Unity SDK,
                    Google&apos;s External Dependency Manager for Unity, and
                    Unity Technologies&apos; Standard Assets. Use of those
                    components is governed by their respective licences; this
                    copyright notice covers only our original work.
                </p>

                <h2>DMCA / takedown notices</h2>
                <p>
                    Believe something in or about the App infringes your
                    copyright? Email a complete notice under the U.S. Digital
                    Millennium Copyright Act (or equivalent in your
                    jurisdiction) to{" "}
                    <a href="mailto:digitalpenguininc@gmail.com">
                        digitalpenguininc@gmail.com
                    </a>
                    . Please include:
                </p>
                <ul>
                    <li>
                        identification of the copyrighted work you claim has
                        been infringed,
                    </li>
                    <li>
                        identification of the material you want removed, with a
                        link if applicable,
                    </li>
                    <li>your contact information,</li>
                    <li>
                        a statement that you have a good-faith belief the use is
                        not authorised,
                    </li>
                    <li>
                        a statement, under penalty of perjury, that the notice
                        is accurate and you are authorised to act on behalf of
                        the copyright owner,
                    </li>
                    <li>your physical or electronic signature.</li>
                </ul>

                <h2>Attribution</h2>
                <p>
                    Background music &quot;airplane-engine.mp3&quot; sourced
                    from Freesound Community under CC0.
                </p>
            </section>
        </main>
    );
}
