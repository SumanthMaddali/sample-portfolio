import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss opportunities, projects, or anything DevOps-related
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="inline-block p-4 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              your.email@example.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="inline-block p-4 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <Github className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              github.com/yourprofile
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="inline-block p-4 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Send me a message</h2>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Message received! I'll get back to you soon.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition outline-none resize-none"
                placeholder="Tell me about your DevOps needs or collaboration opportunities..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Response Time</h3>
          <p className="text-gray-700 leading-relaxed">
            I typically respond to inquiries within 24 hours. Whether you're interested in discussing DevOps best practices,
            exploring collaboration opportunities, or just want to chat about cloud technologies - I'm always excited to connect!
          </p>
        </div>
      </div>
    </div>
  );
}
