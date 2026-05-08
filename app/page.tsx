'use client';

import Link from 'next/link';
import { 
  BuildingOffice2Icon,
  SparklesIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
  MapPinIcon
, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      icon: BuildingOffice2Icon,
      title: 'Project Tracking',
      description: 'Monitor multiple real estate developments with AI-powered insights'
    },
    {
      icon: SparklesIcon,
      title: 'AI Assistant',
      description: 'Your dedicated agent tracks budgets, timelines, and market trends'
    },
    {
      icon: ChartBarIcon,
      title: 'Financial Analytics',
      description: 'Real-time cost analysis and ROI predictions for every project'
    },
    {
      icon: MapPinIcon,
      title: 'Location Intelligence',
      description: 'Market analysis and location scoring powered by AI'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
              PropAI
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-all hover:scale-105">
                Projects
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-blue-600 transition-all hover:scale-105">
                Analytics
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-blue-600 transition-all hover:scale-105">
                Profile
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-all hover:scale-105">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
                Start Free
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <SparklesIcon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">AI Real Estate Development Assistant</span>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Track Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Real Estate Projects
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An intelligent AI agent that monitors your property developments, tracks budgets, predicts market trends, and maximizes ROI.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg">
                  Start Tracking
                </Link>
                <Link href="/register" className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all font-semibold text-lg">
                  See Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                      <HomeModernIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Downtown Tower Project</p>
                      <p className="text-sm text-gray-600">Budget: $2.5M • 65% Complete</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">On Schedule</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Under Budget by 8%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Market Value +12%</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">AI Confidence</span>
                      <span className="text-sm font-semibold text-blue-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$500M+', label: 'Projects Managed' },
              { value: '1,200+', label: 'Developments' },
              { value: '95%', label: 'Success Rate' },
              { value: '24/7', label: 'AI Monitoring' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered tools for real estate development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl w-fit mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join developers managing $500M+ in projects with AI assistance
          </p>
          <Link href="/register" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PropAI</h3>
              <p className="text-gray-400">AI-powered real estate development tracking.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/projects" className="block text-gray-400 hover:text-white transition-colors">Projects</Link>
                <Link href="/analytics" className="block text-gray-400 hover:text-white transition-colors">Analytics</Link>
                <Link href="/reports" className="block text-gray-400 hover:text-white transition-colors">Reports</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Guides</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 PropAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
