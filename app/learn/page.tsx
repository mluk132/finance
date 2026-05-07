'use client'

import Link from 'next/link'
import { CurrencyDollarIcon, AcademicCapIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function LearnPage() {
  const courses = [
    { id: 1, title: 'Budgeting Basics', duration: '30 min', level: 'Beginner', lessons: 5, icon: '📊' },
    { id: 2, title: 'Investing 101', duration: '1h', level: 'Beginner', lessons: 8, icon: '📈' },
    { id: 3, title: 'Tax Planning', duration: '45 min', level: 'Intermediate', lessons: 6, icon: '📋' },
    { id: 4, title: 'Retirement Planning', duration: '1h 30min', level: 'Advanced', lessons: 10, icon: '🏖️' },
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <AcademicCapIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Financial Education</h1>
            <p className="text-xl text-gray-600">Learn to manage your money like a pro</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map(course => (
              <div key={course.id} className="card p-6 hover-lift cursor-pointer">
                <div className="text-6xl mb-4">{course.icon}</div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-3">
                  {course.level}
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpenIcon className="h-4 w-4" />
                    {course.lessons} lessons
                  </span>
                </div>
                <button className="btn btn-primary w-full">Start Learning</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
