'use client';

import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Aryan
                        </span>
                        <span className="text-xl font-light text-zinc-400">Algorithms</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#projects" className="text-base font-medium text-zinc-400 hover:text-white transition-colors">
                            Projects
                        </a>
                        <a href="https://github.com/aryan-algorithms" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-zinc-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                    </nav>

                    <a
                        href="mailto:aryan@example.com"
                        className="px-5 py-2.5 text-base font-medium bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
}
