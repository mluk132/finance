'use client'

import Link from 'next/link'
import { CurrencyDollarIcon, UserIcon, BellIcon, ShieldCheckIcon, CreditCardIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PropAI</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Cog6ToothIcon className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/settings/profile" className="card p-6 hover-lift cursor-pointer">
              <UserIcon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Profile Settings</h3>
              <p className="text-gray-600">Update your financial profile</p>
            </Link>

            <Link href="/settings/notifications" className="card p-6 hover-lift cursor-pointer">
              <BellIcon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Notifications</h3>
              <p className="text-gray-600">Manage bill reminders and alerts</p>
            </Link>

            <Link href="/settings/security" className="card p-6 hover-lift cursor-pointer">
              <ShieldCheckIcon className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-gray-600">Protect your financial data</p>
            </Link>

            <Link href="/settings/accounts" className="card p-6 hover-lift cursor-pointer">
              <CreditCardIcon className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Linked Accounts</h3>
              <p className="text-gray-600">Manage connected bank accounts</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
