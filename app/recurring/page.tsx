'use client'

import Link from 'next/link'
import { CurrencyDollarIcon, ArrowPathIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function RecurringPage() {
  const recurring = [
    { id: 1, name: 'Netflix', amount: 15.99, frequency: 'Monthly', nextDate: 'May 15', category: 'Entertainment', icon: '📺' },
    { id: 2, name: 'Gym Membership', amount: 49.99, frequency: 'Monthly', nextDate: 'May 1', category: 'Health', icon: '💪' },
    { id: 3, name: 'Spotify', amount: 9.99, frequency: 'Monthly', nextDate: 'May 10', category: 'Entertainment', icon: '🎵' },
    { id: 4, name: 'Internet', amount: 79.99, frequency: 'Monthly', nextDate: 'May 5', category: 'Utilities', icon: '🌐' },
  ]

  const total = recurring.reduce((sum, item) => sum + item.amount, 0)

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
          <div className="flex items-center gap-3 mb-8">
            <ArrowPathIcon className="h-10 w-10 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold">Recurring Payments</h1>
              <p className="text-gray-600">Track your subscriptions and bills</p>
            </div>
          </div>

          <div className="card p-6 mb-8">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Total Monthly Recurring</div>
              <div className="text-4xl font-bold text-blue-600">${total.toFixed(2)}</div>
            </div>
          </div>

          <div className="space-y-4">
            {recurring.map(item => (
              <div key={item.id} className="card p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{item.category}</span>
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        Next: {item.nextDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">${item.amount}</div>
                  <div className="text-sm text-gray-500">{item.frequency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
