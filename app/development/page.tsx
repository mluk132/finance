'use client'

import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  MapPinIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export default function DevelopmentPage() {
  const phases = [
    {
      id: 1,
      name: 'Land Acquisition',
      icon: MapPinIcon,
      status: 'completed',
      progress: 100,
      description: 'Property purchased and title transferred',
      date: 'Jan 15, 2026'
    },
    {
      id: 2,
      name: 'Permits & Approvals',
      icon: DocumentCheckIcon,
      status: 'in-progress',
      progress: 65,
      description: 'Zoning approved, building permit pending',
      date: 'In Progress'
    },
    {
      id: 3,
      name: 'Site Preparation',
      icon: ClipboardDocumentListIcon,
      status: 'pending',
      progress: 0,
      description: 'Demolition, grading, utilities',
      date: 'Not Started'
    },
    {
      id: 4,
      name: 'Construction',
      icon: BuildingOffice2Icon,
      status: 'pending',
      progress: 0,
      description: 'Foundation, framing, finishing',
      date: 'Not Started'
    },
    {
      id: 5,
      name: 'Marketing & Sales',
      icon: BanknotesIcon,
      status: 'pending',
      progress: 0,
      description: 'Pre-sales, marketing, closings',
      date: 'Not Started'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-300'
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-300'
      default: return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BuildingOffice2Icon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PropAI
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/development" className="text-blue-600 font-medium">
                Development
              </Link>
              <Link href="/construction" className="text-gray-700 hover:text-blue-600 transition-colors">
                Construction
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-blue-600 transition-colors">
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Development Pipeline</h1>
            <p className="text-gray-600 text-lg">Track your project from land to completion</p>
          </div>

          {/* AI Agent Insights */}
          <div className="card p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-xl">
                <BuildingOffice2Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">AI Agent Update</h3>
                <p className="text-gray-700 mb-3">
                  Your project is progressing well. Permits are 65% complete and on track for approval by March 1st. 
                  I've identified a potential 2-week delay in site preparation due to weather - consider scheduling flexibility.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    On Budget
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    Minor Timeline Risk
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Market Favorable
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Development Phases */}
          <div className="space-y-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <div key={phase.id} className="card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        phase.status === 'completed' ? 'bg-green-100' :
                        phase.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          phase.status === 'completed' ? 'text-green-600' :
                          phase.status === 'in-progress' ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{phase.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(phase.status)}`}>
                          {phase.status === 'completed' ? 'Completed' :
                           phase.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{phase.description}</p>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CalendarIcon className="h-4 w-4" />
                          {phase.date}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  phase.status === 'completed' ? 'bg-green-500' :
                                  phase.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                                style={{ width: `${phase.progress}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-600">{phase.progress}%</span>
                          </div>
                        </div>
                      </div>

                      {phase.status === 'in-progress' && (
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            View Details
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                            Update Progress
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Project Timeline */}
          <div className="card p-6 mt-8">
            <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-600">Start Date</div>
                <div className="flex-1 text-gray-900">January 15, 2026</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-600">Est. Completion</div>
                <div className="flex-1 text-gray-900">December 2026</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-600">Duration</div>
                <div className="flex-1 text-gray-900">11 months</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-600">Current Phase</div>
                <div className="flex-1">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Permits & Approvals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
