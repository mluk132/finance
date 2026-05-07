'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  SparklesIcon,
  ChartBarIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d')

  const stats = [
    { label: 'Total Views', value: '45,231', change: '+12.5%', trend: 'up', icon: EyeIcon },
    { label: 'Engagement Rate', value: '8.4%', change: '+2.1%', trend: 'up', icon: HeartIcon },
    { label: 'Total Shares', value: '1,234', change: '-3.2%', trend: 'down', icon: ShareIcon },
    { label: 'Followers', value: '12,456', change: '+5.7%', trend: 'up', icon: UserGroupIcon },
  ]

  const topContent = [
    { title: 'The Future of Interactive Storytelling', views: 12500, engagement: 9.2, trend: 'up' },
    { title: 'Building Engaging Content Experiences', views: 8900, engagement: 7.8, trend: 'up' },
    { title: 'The Art of Visual Communication', views: 15200, engagement: 10.1, trend: 'up' },
    { title: 'Mastering Content Analytics', views: 6700, engagement: 6.5, trend: 'down' },
  ]

  const audienceData = [
    { country: 'United States', percentage: 35, visitors: 15831 },
    { country: 'United Kingdom', percentage: 18, visitors: 8142 },
    { country: 'Canada', percentage: 12, visitors: 5428 },
    { country: 'Australia', percentage: 10, visitors: 4523 },
    { country: 'Germany', percentage: 8, visitors: 3618 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <SparklesIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hypermedia Oasis
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/feed" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Feed
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Create
              </Link>
              <Link href="/analytics" className="text-indigo-600 font-semibold">
                Analytics
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600 text-lg">Track your content performance and audience insights</p>
            </div>
            <div className="flex gap-2">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowTrendingUpIcon className="h-4 w-4" />
                    ) : (
                      <ArrowTrendingDownIcon className="h-4 w-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Views Chart */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Views Over Time</h3>
                  <button className="btn btn-ghost text-sm">Export</button>
                </div>
                <div className="h-80 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <div className="text-center">
                    <ChartBarIcon className="h-16 w-16 text-indigo-300 mx-auto mb-4" />
                    <p className="text-gray-600">Chart visualization would go here</p>
                    <p className="text-sm text-gray-500 mt-2">Using Recharts or Chart.js</p>
                  </div>
                </div>
              </div>

              {/* Top Content */}
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-6">Top Performing Content</h3>
                <div className="space-y-4">
                  {topContent.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-sm text-gray-600">
                          {item.views.toLocaleString()} views • {item.engagement}% engagement
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.trend === 'up' ? (
                          <ArrowTrendingUpIcon className="h-4 w-4" />
                        ) : (
                          <ArrowTrendingDownIcon className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Audience Demographics */}
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-6">
                  <GlobeAltIcon className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold">Audience by Country</h3>
                </div>
                <div className="space-y-4">
                  {audienceData.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{item.country}</span>
                        <span className="text-sm text-gray-600">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {item.visitors.toLocaleString()} visitors
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card p-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <h3 className="text-xl font-bold mb-6">This Week</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">23</div>
                    <div className="text-indigo-100 text-sm">New Posts</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1.2K</div>
                    <div className="text-indigo-100 text-sm">New Followers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">89%</div>
                    <div className="text-indigo-100 text-sm">Avg. Engagement</div>
                  </div>
                </div>
              </div>

              {/* Export */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Export Reports</h3>
                <div className="space-y-3">
                  <button className="w-full btn btn-secondary text-sm">
                    Download PDF
                  </button>
                  <button className="w-full btn btn-secondary text-sm">
                    Download CSV
                  </button>
                  <button className="w-full btn btn-secondary text-sm">
                    Email Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
