'use client'

import Link from 'next/link'
import { 
  CurrencyDollarIcon,
  ChartPieIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Finance
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/expenses" className="text-gray-700 hover:text-blue-600 transition-colors">Expenses</Link>
              <Link href="/budget" className="text-gray-700 hover:text-blue-600 transition-colors">Budget</Link>
              <Link href="/insights" className="text-gray-700 hover:text-blue-600 transition-colors">Insights</Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Financial Dashboard */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <ShieldCheckIcon className="h-4 w-4" />
                Bank-Level Security
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Money</span> & Build Wealth
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Smart tracking, intelligent budgeting, powerful insights. Take control of your finances and achieve financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/register" className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
                  Get Started Free
                </Link>
                <Link href="/expenses" className="btn btn-secondary text-lg px-8 py-4">
                  See How It Works
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$2B+</div>
                  <div className="text-sm text-gray-600">Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">1M+</div>
                  <div className="text-sm text-gray-600">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">40%</div>
                  <div className="text-sm text-gray-600">Avg Savings ↑</div>
                </div>
              </div>
            </div>
            <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">Net Worth</div>
                    <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$45,230</div>
                  <div className="text-sm text-green-600">↑ 8.5% this month</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-xs text-gray-600 mb-1">Income</div>
                    <div className="text-xl font-bold text-green-600">$5,500</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-xs text-gray-600 mb-1">Expenses</div>
                    <div className="text-xl font-bold text-red-600">$4,300</div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">Savings Rate</div>
                    <div className="text-lg font-bold text-indigo-600">22%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24 container-custom">
            <Link href="/expenses" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <BanknotesIcon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Expense Tracker</h3>
              <p className="text-gray-600 leading-relaxed">
                Log transactions with categories, amounts, and dates. Track spending patterns and identify savings opportunities.
              </p>
            </Link>

            <Link href="/budget" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <ChartPieIcon className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Budget Planner</h3>
              <p className="text-gray-600 leading-relaxed">
                Create monthly budgets with category allocations. Get alerts for overspending and track budget vs actual.
              </p>
            </Link>

            <Link href="/insights" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <LightBulbIcon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Financial Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive charts showing trends, net worth calculator, and personalized recommendations for financial growth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-blue-600 mb-2">$2B+</div>
              <div className="text-gray-600 text-lg">Money Managed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600 text-lg">Active Users</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600 text-lg">Avg. Savings Increase</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Building Wealth Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions who have taken control of their finances with smart tracking and insights.
          </p>
          <button className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Create Free Account
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
                <span className="text-white font-bold">Finance</span>
              </div>
              <p className="text-sm">Master your money and build wealth.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/expenses" className="hover:text-white transition-colors">Expenses</Link></li>
                <li><Link href="/budget" className="hover:text-white transition-colors">Budget</Link></li>
                <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2026 Finance. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
