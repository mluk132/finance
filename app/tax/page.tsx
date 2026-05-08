'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  DocumentTextIcon,
  CalculatorIcon,
  CalendarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowDownTrayIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function TaxPage() {
  const [taxYear, setTaxYear] = useState('2026');
  const [filingStatus, setFilingStatus] = useState('single');

  const taxDocuments = [
    {
      name: 'W-2 Form',
      status: 'uploaded',
      date: '2026-01-15',
      icon: DocumentTextIcon
    },
    {
      name: '1099-INT',
      status: 'pending',
      date: null,
      icon: DocumentTextIcon
    },
    {
      name: 'Mortgage Interest',
      status: 'uploaded',
      date: '2026-01-20',
      icon: DocumentTextIcon
    },
    {
      name: 'Charitable Donations',
      status: 'pending',
      date: null,
      icon: DocumentTextIcon
    }
  ];

  const taxDeadlines = [
    {
      date: 'April 15, 2026',
      title: 'Tax Filing Deadline',
      description: 'Last day to file your 2025 tax return',
      status: 'upcoming',
      daysLeft: 43
    },
    {
      date: 'April 15, 2026',
      title: 'IRA Contribution Deadline',
      description: 'Last day to contribute to 2025 IRA',
      status: 'upcoming',
      daysLeft: 43
    },
    {
      date: 'October 15, 2026',
      title: 'Extension Deadline',
      description: 'If you filed for extension',
      status: 'future',
      daysLeft: 226
    }
  ];

  const taxTips = [
    {
      title: 'Maximize Deductions',
      description: 'Track all eligible expenses including home office, charitable donations, and medical expenses',
      icon: CheckCircleIcon,
      color: 'green'
    },
    {
      title: 'Contribute to Retirement',
      description: 'IRA and 401(k) contributions can reduce your taxable income',
      icon: ArrowDownTrayIcon,
      color: 'blue'
    },
    {
      title: 'Keep Good Records',
      description: 'Maintain receipts and documentation for all deductions',
      icon: DocumentTextIcon,
      color: 'purple'
    },
    {
      title: 'File On Time',
      description: 'Avoid penalties by filing before the deadline or requesting an extension',
      icon: ClockIcon,
      color: 'orange'
    }
  ];

  const estimatedTax = {
    income: 75000,
    deductions: 12950,
    taxableIncome: 62050,
    estimatedTax: 9328,
    effectiveRate: 12.4
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
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
              PropAI
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/profile" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/reports" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Reports
              </Link>
              <Link href="/tax" className="text-emerald-600 font-medium">
                Tax Planning
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tax Planning</h1>
          <p className="text-gray-600">Organize your taxes and maximize your refund</p>
        </div>

        {/* Tax Year Selector */}
        <div className="flex gap-4 mb-8">
          <select
            value={taxYear}
            onChange={(e) => setTaxYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="2026">Tax Year 2026</option>
            <option value="2025">Tax Year 2025</option>
            <option value="2024">Tax Year 2024</option>
          </select>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="married-separate">Married Filing Separately</option>
            <option value="head">Head of Household</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tax Estimate */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CalculatorIcon className="w-6 h-6" />
                Estimated Tax {taxYear}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-emerald-100 text-sm mb-1">Gross Income</p>
                  <p className="text-2xl font-bold">${estimatedTax.income.toLocaleString()}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-emerald-100 text-sm mb-1">Deductions</p>
                  <p className="text-2xl font-bold">${estimatedTax.deductions.toLocaleString()}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-emerald-100 text-sm mb-1">Taxable Income</p>
                  <p className="text-2xl font-bold">${estimatedTax.taxableIncome.toLocaleString()}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-emerald-100 text-sm mb-1">Estimated Tax</p>
                  <p className="text-2xl font-bold">${estimatedTax.estimatedTax.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-emerald-100 text-sm mb-1">Effective Tax Rate</p>
                <p className="text-3xl font-bold">{estimatedTax.effectiveRate}%</p>
              </div>
            </div>

            {/* Tax Documents */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <DocumentTextIcon className="w-6 h-6 text-emerald-600" />
                  Tax Documents
                </h2>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
                  Upload Document
                </button>
              </div>

              <div className="space-y-4">
                {taxDocuments.map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-lg">
                          <Icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                          {doc.date && (
                            <p className="text-sm text-gray-500">Uploaded {doc.date}</p>
                          )}
                        </div>
                      </div>
                      {doc.status === 'uploaded' ? (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircleIcon className="w-5 h-5" />
                          <span className="text-sm font-medium">Uploaded</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-orange-600">
                          <ExclamationTriangleIcon className="w-5 h-5" />
                          <span className="text-sm font-medium">Pending</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tax Tips */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Saving Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {taxTips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${getColorClasses(tip.color)}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                          <p className="text-sm text-gray-600">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Deadlines */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-emerald-600" />
                Important Deadlines
              </h3>
              <div className="space-y-4">
                {taxDeadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${
                      deadline.status === 'upcoming'
                        ? 'border-orange-200 bg-orange-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{deadline.title}</h4>
                      {deadline.status === 'upcoming' && (
                        <span className="px-2 py-1 bg-orange-200 text-orange-700 text-xs font-medium rounded-lg">
                          {deadline.daysLeft} days
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{deadline.description}</p>
                    <p className="text-sm font-medium text-emerald-600">{deadline.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium">
                  Start Tax Return
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                  Download Forms
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                  Request Extension
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
              <p className="text-blue-50 text-sm mb-4">
                Our tax experts are here to help you maximize your refund and stay compliant.
              </p>
              <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-xl font-medium hover:shadow-lg transition-all">
                Contact Tax Expert
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
