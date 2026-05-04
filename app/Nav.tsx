"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/install", label: "Install" },
    { href: "/license", label: "License" },
    { href: "/copyright", label: "Copyright" },
    { href: "/privacy", label: "Privacy" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <nav className={`nav ${open ? "open" : ""}`}>
            <Link href="/" className="brand" onClick={() => setOpen(false)}>
                <img src="/planes_logo.png" alt="" />
                <div>
                    Planes<span>.</span>
                </div>
            </Link>
            <div className="spacer" />

            <button
                className="burger"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="nav-links"
                onClick={() => setOpen((v) => !v)}
            >
                <span />
                <span />
                <span />
            </button>

            <div
                id="nav-links"
                className="nav-links"
                onClick={() => setOpen(false)}
            >
                {links.map((l) => (
                    <Link key={l.href} href={l.href}>
                        {l.label}
                    </Link>
                ))}
            </div>

            {open && (
                <button
                    className="nav-scrim"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
}
