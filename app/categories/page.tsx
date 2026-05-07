'use client'

import Link from 'next/link'
import { CurrencyDollarIcon, TagIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function CategoriesPage() {
  const categories = [
    { id: 1, name: 'Housing', budget: 1800, spent: 1800, color: 'from-blue-500 to-cyan-500', icon: '🏠' },
    { id: 2, name: 'Food', budget: 600, spent: 450, color: 'from-green-500 to-teal-500', icon: '🍔' },
    { id: 3, name: 'Transportation', budget: 300, spent: 180, color: 'from-orange-500 to-red-500', icon: '🚗' },
    { id: 4, name: 'Entertainment', budget: 200, spent: 120, color: 'from-purple-500 to-pink-500', icon: '🎬' },
    { id: 5, name: 'Shopping', budget: 400, spent: 280, color: 'from-pink-500 to-rose-500', icon: '🛍️' },
    { id: 6, name: 'Healthcare', budget: 250, spent: 100, color: 'from-indigo-500 to-purple-500', icon: '⚕️' },
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
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TagIcon className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-4xl font-bold">Expense Categories</h1>
                <p className="text-gray-600">Organize your spending</p>
              </div>
            </div>
            <button className="btn btn-primary">
              <PlusIcon className="h-5 w-5 mr-2" />
              New Category
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => {
              const percentage = (category.spent / category.budget) * 100
              return (
                <div key={category.id} className="card p-6 hover-lift cursor-pointer">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>${category.spent} / ${category.budget}</span>
                      <span className={`font-semibold ${percentage > 90 ? 'text-red-600' : 'text-green-600'}`}>
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${percentage > 90 ? 'bg-red-600' : 'bg-blue-600'}`} style={{ width: `${Math.min(percentage, 100)}%` }}></div>
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
