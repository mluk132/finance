'use client'

import Link from 'next/link'
import { CurrencyDollarIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

export default function TransactionsPage() {
  const transactions = [
    { id: 1, name: 'Salary Deposit', amount: 5500, type: 'income', category: 'Income', date: 'May 1, 2026' },
    { id: 2, name: 'Rent Payment', amount: -1800, type: 'expense', category: 'Housing', date: 'May 1, 2026' },
    { id: 3, name: 'Groceries', amount: -250, type: 'expense', category: 'Food', date: 'May 2, 2026' },
    { id: 4, name: 'Freelance Project', amount: 1200, type: 'income', category: 'Income', date: 'May 2, 2026' },
    { id: 5, name: 'Gas', amount: -60, type: 'expense', category: 'Transportation', date: 'May 3, 2026' },
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
        <div className="container-custom max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Transaction History</h1>
            <div className="flex gap-3">
              <button className="btn btn-secondary">
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filter
              </button>
              <button className="btn btn-primary">Export</button>
            </div>
          </div>

          <div className="card p-6 mb-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200"
              />
            </div>
          </div>

          <div className="card p-6">
            <div className="space-y-3">
              {transactions.map(transaction => (
                <div key={transaction.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{transaction.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className={`px-2 py-1 rounded text-xs ${
                          transaction.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {transaction.category}
                        </span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                    <span className={`text-xl font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
