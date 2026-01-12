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

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              My Tech Stack
            </h2>
            <p className="text-zinc-400">
              Technologies I work with and am currently learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Main Skills */}
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4 text-center">
                Languages & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'HTML', color: 'from-orange-500 to-orange-600' },
                  { name: 'CSS', color: 'from-blue-500 to-blue-600' },
                  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
                  { name: 'Python', color: 'from-blue-400 to-green-500' },
                  { name: 'Figma', color: 'from-pink-500 to-purple-500' },
                ].map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-5 py-2.5 bg-gradient-to-r ${skill.color} text-white font-medium rounded-full shadow-lg cursor-default`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4 text-center flex items-center justify-center gap-2">
                <span>Currently Learning</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Node.js', color: 'border-green-500 text-green-400' },
                  { name: 'TypeScript', color: 'border-blue-500 text-blue-400' },
                ].map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-5 py-2.5 bg-transparent border-2 ${skill.color} font-medium rounded-full cursor-default`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
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
