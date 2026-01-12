'use client';

import { motion } from 'framer-motion';
import { getCompletedCount, getProgressPercentage, projects } from '@/data/projects';

export default function ProgressBar() {
    const completed = getCompletedCount();
    const total = projects.length;
    const percentage = getProgressPercentage();

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-zinc-400">
                    Progress
                </span>
                <span className="text-sm font-mono text-emerald-400">
                    {completed}/{total} weeks completed
                </span>
            </div>

            <div className="relative h-3 bg-zinc-800/50 rounded-full overflow-hidden border border-zinc-700/50">
                <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                />

                {/* Glow effect */}
                <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-cyan-400/50 rounded-full blur-sm"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                />
            </div>

            <div className="flex items-center justify-center mt-3">
                <span className="text-2xl font-bold text-white">
                    {percentage}%
                </span>
                <span className="text-sm text-zinc-500 ml-2">
                    of the challenge complete
                </span>
            </div>
        </div>
    );
}
