export type ProjectStatus = 'Completed' | 'In Progress' | 'Upcoming';

export interface Project {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
  status: ProjectStatus;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Task Manager Pro',
    description: 'A modern to-do application with drag-and-drop functionality, priority levels, and local storage persistence. Built to master the fundamentals of state management and user interactions.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'DnD Kit'],
    githubLink: 'https://github.com/aryan-algorithms/task-manager-pro',
    demoLink: 'https://task-manager-pro.vercel.app',
    status: 'Completed',
    imageUrl: '/projects/week-1.png',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Weather Dashboard',
    description: 'A sleek weather application featuring real-time data from OpenWeather API, 5-day forecasts, and geolocation support. Focused on API integration and responsive design.',
    techStack: ['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    githubLink: 'https://github.com/aryan-algorithms/weather-dashboard',
    demoLink: 'https://weather-dash.vercel.app',
    status: 'Completed',
    imageUrl: '/projects/week-2.png',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Markdown Note Editor',
    description: 'A powerful markdown editor with live preview, syntax highlighting, and cloud sync capabilities. Exploring rich text editing and real-time rendering.',
    techStack: ['React', 'TypeScript', 'MDX', 'Firebase'],
    githubLink: 'https://github.com/aryan-algorithms/markdown-editor',
    demoLink: 'https://md-editor.vercel.app',
    status: 'In Progress',
    imageUrl: '/projects/week-3.png',
  },
  // Upcoming projects (Week 4-30)
  ...Array.from({ length: 27 }, (_, i) => ({
    id: `week-${i + 4}`,
    weekNumber: i + 4,
    title: `Week ${i + 4} Project`,
    description: 'Coming soon... Stay tuned for another exciting project!',
    techStack: [],
    githubLink: '',
    demoLink: '',
    status: 'Upcoming' as ProjectStatus,
    imageUrl: '',
  })),
];

// Helper functions
export const getCompletedCount = () => 
  projects.filter(p => p.status === 'Completed').length;

export const getInProgressCount = () => 
  projects.filter(p => p.status === 'In Progress').length;

export const getProgressPercentage = () => 
  Math.round((getCompletedCount() / projects.length) * 100);

export const getProjectById = (id: string) => 
  projects.find(p => p.id === id);

export const getProjectByWeek = (weekNumber: number) => 
  projects.find(p => p.weekNumber === weekNumber);
