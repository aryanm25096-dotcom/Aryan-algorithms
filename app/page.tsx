'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProgressBar from '@/components/ProgressBar';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { projects, type Project } from '@/data/projects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.status !== 'Upcoming') {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="pt-24">
        <HeroSection />
      </section>

      {/* Progress Section */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProgressBar />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Projects
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every week brings a new challenge. Click on completed projects to learn more.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
