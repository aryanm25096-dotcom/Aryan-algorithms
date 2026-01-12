'use client';

import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Aryan
                        </span>
                        <span className="text-lg font-light text-zinc-500">Algorithms</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/aryan-algorithms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:aryan@example.com"
                            className="p-2 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                        <span>Built with</span>
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>in 2026</span>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center">
                    <p className="text-sm text-zinc-600">
                        © 2026 Aryan Algorithms. 30 Weeks of Code Challenge.
                    </p>
                </div>
            </div>
        </footer>
    );
}
