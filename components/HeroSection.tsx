'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';
import { getCompletedCount, getInProgressCount } from '@/data/projects';

export default function HeroSection() {
    const completed = getCompletedCount();
    const inProgress = getInProgressCount();

    const stats = [
        { icon: Code2, value: completed.toString(), label: 'Projects Built', sublabel: 'One idea per week' },
        { icon: Zap, value: '30', label: 'Weeks of Coding', sublabel: 'Non-stop learning' },
        { icon: Sparkles, value: '∞', label: 'Lessons Learned', sublabel: 'Growing every day' },
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto">
                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-emerald-400">
                            {inProgress > 0 ? `Week ${completed + 1} in progress` : 'Challenge Active'}
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        <span className="text-white">Hi, I&apos;m </span>
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Aryan
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        I&apos;m a student building{' '}
                        <span className="text-white font-semibold">30 projects</span> in{' '}
                        <span className="text-white font-semibold">30 weeks</span>.
                        <br />
                        <span className="text-lg text-zinc-500">
                            Documenting my journey, one algorithm at a time.
                        </span>
                    </motion.p>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="group relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative">
                                <stat.icon className="w-8 h-8 text-emerald-400 mb-4" />
                                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-zinc-300 font-medium">{stat.label}</div>
                                <div className="text-sm text-zinc-500">{stat.sublabel}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
