'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarIcon, 
  BellIcon, 
  CheckCircleIcon,
  ClockIcon,
  PlusIcon,
  CreditCardIcon,
  BanknotesIcon,
  HomeIcon,
  PhoneIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export default function BillsPage() {
  const [filter, setFilter] = useState('all');

  const bills = [
    {
      id: 1,
      name: 'Rent',
      amount: 1500,
      dueDate: '2026-05-05',
      status: 'upcoming',
      category: 'Housing',
      icon: HomeIcon,
      color: 'blue',
      recurring: 'monthly'
    },
    {
      id: 2,
      name: 'Electric Bill',
      amount: 120,
      dueDate: '2026-05-10',
      status: 'upcoming',
      category: 'Utilities',
      icon: BoltIcon,
      color: 'yellow',
      recurring: 'monthly'
    },
    {
      id: 3,
      name: 'Internet',
      amount: 80,
      dueDate: '2026-05-15',
      status: 'upcoming',
      category: 'Utilities',
      icon: PhoneIcon,
      color: 'purple',
      recurring: 'monthly'
    },
    {
      id: 4,
      name: 'Credit Card',
      amount: 450,
      dueDate: '2026-05-20',
      status: 'upcoming',
      category: 'Credit',
      icon: CreditCardIcon,
      color: 'red',
      recurring: 'monthly'
    },
    {
      id: 5,
      name: 'Car Insurance',
      amount: 200,
      dueDate: '2026-04-28',
      status: 'paid',
      category: 'Insurance',
      icon: BanknotesIcon,
      color: 'green',
      recurring: 'monthly'
    }
  ];

  const filteredBills = filter === 'all' 
    ? bills 
    : bills.filter(bill => bill.status === filter);

  const totalUpcoming = bills
    .filter(b => b.status === 'upcoming')
    .reduce((sum, b) => sum + b.amount, 0);

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600',
      green: 'bg-green-100 text-green-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Finance
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/profile" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/expenses" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Expenses
              </Link>
              <Link href="/bills" className="text-emerald-600 font-medium">
                Bills
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Bill Reminders</h1>
          <p className="text-gray-600">Never miss a payment with automated reminders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <CalendarIcon className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-500">This Month</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">${totalUpcoming.toFixed(2)}</p>
            <p className="text-sm text-gray-600 mt-1">Total upcoming bills</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <BellIcon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Reminders</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{bills.filter(b => b.status === 'upcoming').length}</p>
            <p className="text-sm text-gray-600 mt-1">Active reminders</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Paid</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{bills.filter(b => b.status === 'paid').length}</p>
            <p className="text-sm text-gray-600 mt-1">Bills paid this month</p>
          </div>
        </div>

        {/* Filters and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                filter === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Bills
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                filter === 'upcoming'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('paid')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                filter === 'paid'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Paid
            </button>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all">
            <PlusIcon className="w-5 h-5" />
            Add Bill
          </button>
        </div>

        {/* Bills List */}
        <div className="space-y-4">
          {filteredBills.map((bill) => {
            const Icon = bill.icon;
            const daysUntilDue = Math.ceil((new Date(bill.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
            
            return (
              <div
                key={bill.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${getColorClasses(bill.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{bill.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-500">{bill.category}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-500 capitalize">{bill.recurring}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">${bill.amount}</p>
                    <div className="flex items-center gap-2 mt-1 justify-end">
                      {bill.status === 'upcoming' ? (
                        <>
                          <ClockIcon className="w-4 h-4 text-orange-500" />
                          <span className="text-sm text-orange-600 font-medium">
                            Due in {daysUntilDue} days
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">Paid</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {bill.status === 'upcoming' && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium">
                      Mark as Paid
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                      Edit
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredBills.length === 0 && (
          <div className="text-center py-16">
            <BellIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bills found</h3>
            <p className="text-gray-600">Add your first bill to get started with reminders</p>
          </div>
        )}
      </main>
    </div>
  );
}
