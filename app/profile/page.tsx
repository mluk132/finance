'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  CurrencyDollarIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [user] = useState({
    name: 'John Saver',
    email: 'john@example.com',
    joinedDate: 'January 2026',
    goal: 'Build Emergency Fund',
    avatar: '💰'
  })

  const [stats] = useState({
    netWorth: 45000,
    monthlyIncome: 5500,
    monthlySavings: 1200,
    savingsRate: 22
  })

  const [recentTransactions] = useState([
    { id: 1, name: 'Salary Deposit', amount: 5500, type: 'income', date: 'Today' },
    { id: 2, name: 'Rent Payment', amount: -1800, type: 'expense', date: 'Yesterday' },
    { id: 3, name: 'Groceries', amount: -250, type: 'expense', date: '2 days ago' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PropAI
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/expenses" className="text-gray-700 hover:text-blue-600 transition-colors">Expenses</Link>
              <Link href="/budget" className="text-gray-700 hover:text-blue-600 transition-colors">Budget</Link>
              <Link href="/profile" className="text-blue-600 font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          {/* Profile Header */}
          <div className="card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-6xl">
                  {user.avatar}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="text-gray-600 mb-1">{user.email}</p>
                    <p className="text-sm text-gray-500">Joined {user.joinedDate}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Goal: {user.goal}
                    </div>
                  </div>
                  <Link href="/settings" className="btn btn-secondary">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Settings
                  </Link>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="/expenses" className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-600">
                    <BanknotesIcon className="h-5 w-5 mr-2" />
                    Add Transaction
                  </Link>
                  <button className="btn btn-secondary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Net Worth</span>
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">${stats.netWorth.toLocaleString()}</div>
              <div className="text-sm text-green-500 mt-1">↑ 8.5%</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Monthly Income</span>
                <BanknotesIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">${stats.monthlyIncome.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mt-1">This month</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Monthly Savings</span>
                <CurrencyDollarIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">${stats.monthlySavings.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mt-1">This month</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Savings Rate</span>
                <ChartPieIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">{stats.savingsRate}%</div>
              <div className="text-sm text-green-500 mt-1">↑ 2%</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Recent Transactions */}
            <div className="md:col-span-2">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Recent Transactions</h2>
                  <Link href="/expenses" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentTransactions.map(transaction => (
                    <div key={transaction.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{transaction.name}</h3>
                        <span className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className={`px-2 py-1 rounded text-xs ${
                          transaction.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {transaction.type}
                        </span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spending Chart */}
              <div className="card p-6 mt-6">
                <h2 className="text-2xl font-bold mb-4">Spending by Category</h2>
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ChartPieIcon className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600">Spending breakdown chart</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/expenses" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <BanknotesIcon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Add Expense</span>
                    </div>
                  </Link>
                  <Link href="/budget" className="block p-3 bg-indigo-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <ChartPieIcon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">View Budget</span>
                    </div>
                  </Link>
                  <Link href="/reports" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Reports</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4">Financial Goals</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Emergency Fund</span>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">$7,500 / $10,000</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Vacation Fund</span>
                      <span className="text-sm text-gray-600">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">$2,000 / $5,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
