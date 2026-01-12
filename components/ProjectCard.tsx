'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, Clock, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    const isUpcoming = project.status === 'Upcoming';
    const isInProgress = project.status === 'In Progress';
    const isCompleted = project.status === 'Completed';

    const statusConfig = {
        Completed: {
            icon: CheckCircle2,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20',
        },
        'In Progress': {
            icon: Clock,
            color: 'text-amber-400',
            bg: 'bg-amber-500/10',
            border: 'border-amber-500/20',
        },
        Upcoming: {
            icon: Lock,
            color: 'text-zinc-500',
            bg: 'bg-zinc-500/10',
            border: 'border-zinc-500/20',
        },
    };

    const config = statusConfig[project.status];
    const StatusIcon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={!isUpcoming ? { y: -4, scale: 1.02 } : {}}
            onClick={!isUpcoming ? onClick : undefined}
            role={!isUpcoming ? "button" : undefined}
            tabIndex={!isUpcoming ? 0 : -1}
            onKeyDown={(e) => {
                if (!isUpcoming && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
            className={`
        relative group rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500/50
        ${isUpcoming
                    ? 'bg-zinc-900/30 border border-zinc-800/50 cursor-not-allowed opacity-60'
                    : 'bg-zinc-900/50 border border-zinc-800 cursor-pointer hover:border-zinc-700'
                }
        transition-all duration-300
      `}
        >
            {/* Gradient border effect for active cards */}
            {!isUpcoming && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            {/* Week badge */}
            <div className="absolute top-4 left-4 z-10">
                <span className={`
          inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium
          ${config.bg} ${config.border} ${config.color} border
        `}>
                    Week {project.weekNumber}
                </span>
            </div>

            {/* Status indicator */}
            <div className="absolute top-4 right-4 z-10">
                <span className={`
          inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
          ${config.bg} ${config.border} ${config.color} border
        `}>
                    <StatusIcon className="w-3 h-3" />
                    {project.status}
                </span>
            </div>

            {/* Card content */}
            <div className="relative p-6 pt-16">
                {/* Image placeholder / gradient */}
                <div className={`
          relative h-48 rounded-xl mb-4 overflow-hidden
          ${isUpcoming
                        ? 'bg-zinc-800/30 flex items-center justify-center'
                        : 'bg-zinc-900 group-hover:shadow-xl transition-all duration-500'
                    }
        `}>
                    {!isUpcoming && project.imageUrl ? (
                        <div className="absolute inset-0">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>
                    ) : isUpcoming ? (
                        <Lock className="w-8 h-8 text-zinc-600" />
                    ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                            <div className="text-4xl font-bold text-zinc-700 font-mono">
                                #{project.weekNumber.toString().padStart(2, '0')}
                            </div>
                        </div>
                    )}

                    {/* Status overlay for In Progress/Completed */}
                    {!isUpcoming && (
                        <div className="absolute top-2 right-2 z-10 flex gap-2">
                            {isInProgress && (
                                <div className="bg-amber-500/20 backdrop-blur-md border border-amber-500/20 p-1.5 rounded-lg">
                                    <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Title */}
                <h3 className={`
          text-lg font-semibold mb-2 transition-colors duration-300
          ${isUpcoming ? 'text-zinc-600' : 'text-white group-hover:text-emerald-400'}
        `}>
                    {project.title}
                </h3>

                {/* Description */}
                <p className={`
          text-sm mb-4 line-clamp-2
          ${isUpcoming ? 'text-zinc-600' : 'text-zinc-400'}
        `}>
                    {project.description}
                </p>

                {/* Tech stack */}
                {!isUpcoming && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium text-zinc-500">
                                +{project.techStack.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                {/* Action links */}
                {!isUpcoming && (
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>Code</span>
                            </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Pulse effect for in-progress */}
            {isInProgress && (
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/20 animate-pulse pointer-events-none" />
            )}
        </motion.div>
    );
}
