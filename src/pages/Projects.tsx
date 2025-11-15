import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'React Portfolio with CI/CD',
      description: 'Production-ready portfolio application with automated testing, Docker containerization, and GitHub Actions CI/CD pipeline.',
      technologies: ['React', 'TypeScript', 'Docker', 'GitHub Actions', 'Vite'],
      highlights: [
        'Multi-stage Docker builds for optimized images',
        'Automated testing and linting in CI pipeline',
        'Pushed to Docker Hub registry',
        'Responsive design with Tailwind CSS',
      ],
      github: 'https://github.com',
      demo: '#',
    },
    {
      id: 2,
      title: 'Kubernetes Deployment Pipeline',
      description: 'Complete microservices application deployed on Kubernetes with service discovery, rolling updates, and persistent storage.',
      technologies: ['Kubernetes', 'Docker', 'Node.js', 'PostgreSQL', 'Helm'],
      highlights: [
        'Helm charts for easy deployments',
        'Service mesh with load balancing',
        'Persistent volume claims for stateful apps',
        'Health checks and auto-scaling',
      ],
      github: 'https://github.com',
      demo: '#',
    },
    {
      id: 3,
      title: 'Infrastructure as Code',
      description: 'AWS infrastructure provisioned using Terraform with monitoring, logging, and auto-scaling capabilities.',
      technologies: ['Terraform', 'AWS', 'CloudWatch', 'Lambda', 'S3'],
      highlights: [
        'Declarative infrastructure definitions',
        'Modular terraform modules',
        'Integrated monitoring and alerts',
        'Cost optimization strategies',
      ],
      github: 'https://github.com',
      demo: '#',
    },
    {
      id: 4,
      title: 'Advanced CI/CD Pipeline',
      description: 'End-to-end automation from code push to production deployment with security scanning and performance testing.',
      technologies: ['GitHub Actions', 'Docker', 'SonarQube', 'Jest', 'Kubernetes'],
      highlights: [
        'Security vulnerability scanning',
        'Automated performance testing',
        'Staged deployments (dev → staging → prod)',
        'Automated rollbacks on failures',
      ],
      github: 'https://github.com',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world DevOps projects showcasing containerization, CI/CD, and Kubernetes expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 flex items-end">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
