"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "الرئيسية", href: "#hero" },
        { name: "نبذة عنا", href: "#about" },
        { name: "خدماتنا", href: "#services" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-secondary-100/50 dark:border-secondary-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center group">
                            <img
                                src="/images/logo.png"
                                alt="شور فني"
                                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-secondary-600 hover:text-primary-500 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://surefanni-business.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-primary-500/30 hover:scale-105 active:scale-95"
                        >
                            دخول الشركات
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary-600 hover:text-secondary-900 dark:text-secondary-300 dark:hover:text-white focus:outline-none p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-secondary-200/50 dark:border-secondary-800/50 absolute w-full left-0 bg-white/95 dark:bg-secondary-900/95">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 text-center shadow-2xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 rounded-md text-base font-medium text-secondary-700 hover:text-primary-500 hover:bg-primary-50 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-secondary-800 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700 flex flex-col gap-3 px-4">
                            <a
                                href="https://surefanni-business.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-500 text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-primary-500/30 active:scale-95 transition-transform"
                            >
                                دخول الشركات
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
