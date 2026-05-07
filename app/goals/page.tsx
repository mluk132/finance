'use client'

import Link from 'next/link'
import { CurrencyDollarIcon, TrophyIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function GoalsPage() {
  const goals = [
    { id: 1, name: 'Emergency Fund', current: 7500, target: 10000, deadline: 'Dec 2026', icon: '🏦', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Vacation Fund', current: 2000, target: 5000, deadline: 'Jun 2026', icon: '✈️', color: 'from-green-500 to-teal-500' },
    { id: 3, name: 'New Car', current: 8500, target: 25000, deadline: 'Dec 2027', icon: '🚗', color: 'from-purple-500 to-pink-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Finance</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrophyIcon className="h-10 w-10 text-yellow-600" />
              <div>
                <h1 className="text-4xl font-bold">Savings Goals</h1>
                <p className="text-gray-600">Track your financial targets</p>
              </div>
            </div>
            <button className="btn btn-primary">
              <PlusIcon className="h-5 w-5 mr-2" />
              New Goal
            </button>
          </div>

          <div className="space-y-6">
            {goals.map(goal => {
              const percentage = (goal.current / goal.target) * 100
              return (
                <div key={goal.id} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-3xl`}>
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{goal.name}</h3>
                          <p className="text-sm text-gray-600">Target: {goal.deadline}</p>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{percentage.toFixed(0)}%</span>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>${goal.current.toLocaleString()} saved</span>
                          <span>${goal.target.toLocaleString()} goal</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full" style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                      <button className="btn btn-secondary btn-sm">Add Funds</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
