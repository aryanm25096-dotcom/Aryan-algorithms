'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Tag, CheckCircle2, Clock } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    const isCompleted = project.status === 'Completed';
    const isInProgress = project.status === 'In Progress';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50"
                    >
                        <div className="relative h-full md:h-auto max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-zinc-400" />
                            </button>

                            {/* Header gradient / Image */}
                            <div className="relative h-64 bg-zinc-900 flex items-center justify-center overflow-hidden">
                                {project.imageUrl ? (
                                    <>
                                        <div className="absolute inset-0">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                                        </div>
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-zinc-900 to-cyan-500/20" />
                                )}

                                <div className="relative z-10 text-6xl font-bold text-white/10 font-mono tracking-widest scale-150 select-none">
                                    #{project.weekNumber.toString().padStart(2, '0')}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 overflow-y-auto max-h-[calc(90vh-10rem)]">
                                {/* Status and Week badges */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm font-medium text-zinc-300">
                                        <Calendar className="w-3.5 h-3.5" />
                                        Week {project.weekNumber}
                                    </span>
                                    <span className={`
                    inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
                    ${isCompleted
                                            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                                            : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                                        }
                  `}>
                                        {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {project.title}
                                </h2>

                                {/* Description */}
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                {project.techStack.length > 0 && (
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                                            <Tag className="w-4 h-4" />
                                            <span>Technologies Used</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 text-sm font-medium bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-zinc-800">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Source Code
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            View Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
