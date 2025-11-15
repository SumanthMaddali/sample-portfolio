import { Package, Cloud, Boxes, Code2, GitBranch, BarChart3 } from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  proficiency: number;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Containerization',
      icon: <Boxes className="w-6 h-6" />,
      skills: ['Docker', 'Container Security', 'Docker Compose', 'Multi-stage Builds'],
      proficiency: 85,
    },
    {
      category: 'Orchestration',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Kubernetes', 'Helm', 'StatefulSets', 'Services & Ingress', 'OpenShift'],
      proficiency: 80,
    },
    {
      category: 'CI/CD',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['GitHub Actions', 'Pipeline Design', 'Automated Testing', 'Deployment Automation'],
      proficiency: 85,
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS'],
      proficiency: 75,
    },
    {
      category: 'Infrastructure as Code',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Terraform', 'CloudFormation', 'Configuration Management', 'IaC Best Practices'],
      proficiency: 78,
    },
    {
      category: 'Monitoring & Logging',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'Log Aggregation'],
      proficiency: 72,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DevOps and cloud technologies I've mastered through hands-on projects and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-3 mb-6">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-semibold">Proficiency</span>
                  <span className="text-blue-600 font-bold">{category.proficiency}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                    style={{ width: `${category.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <section className="mt-20 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Roadmap</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Package className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Foundation</h3>
                <p className="text-gray-600 mt-2">Mastered Docker fundamentals, container best practices, and multi-stage builds</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <GitBranch className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Automation</h3>
                <p className="text-gray-600 mt-2">Implemented CI/CD pipelines with GitHub Actions, automated testing, and deployments</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Cloud className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Orchestration</h3>
                <p className="text-gray-600 mt-2">Currently learning Kubernetes, service mesh concepts, and OpenShift deployment</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Advanced Topics</h3>
                <p className="text-gray-600 mt-2">Exploring monitoring, logging, infrastructure as code, and cloud architecture</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
