import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                DevOps & Cloud Engineering
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Scalable, Cloud-Native Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Full-stack developer transitioning to DevOps. Experienced with containerization, CI/CD pipelines, and Kubernetes orchestration. Showcasing real-world projects and hands-on learning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
              >
                View My Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <a
                href="#"
                className="p-3 bg-white rounded-lg text-gray-700 hover:text-blue-600 hover:shadow-lg transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-lg text-gray-700 hover:text-blue-600 hover:shadow-lg transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-lg text-gray-700 hover:text-blue-600 hover:shadow-lg transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">DevOps Journey</h3>
                <p className="opacity-90">Docker • Kubernetes • CI/CD • Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">5+</div>
              <p className="text-gray-600 mt-2">DevOps Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <p className="text-gray-600 mt-2">Technologies Mastered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <p className="text-gray-600 mt-2">Open Source Committed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
