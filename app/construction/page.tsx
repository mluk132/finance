'use client'

import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  TruckIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export default function ConstructionPage() {
  const constructionPhases = [
    {
      name: 'Foundation',
      progress: 100,
      status: 'completed',
      startDate: 'Mar 1',
      endDate: 'Mar 15',
      contractor: 'ABC Foundation Co.',
      cost: '$250,000',
      notes: 'Completed ahead of schedule'
    },
    {
      name: 'Framing',
      progress: 75,
      status: 'in-progress',
      startDate: 'Mar 16',
      endDate: 'Apr 30',
      contractor: 'XYZ Framing Inc.',
      cost: '$450,000',
      notes: 'On track, weather permitting'
    },
    {
      name: 'Electrical',
      progress: 30,
      status: 'in-progress',
      startDate: 'Apr 1',
      endDate: 'May 15',
      contractor: 'Power Systems LLC',
      cost: '$180,000',
      notes: 'Started early, progressing well'
    },
    {
      name: 'Plumbing',
      progress: 0,
      status: 'pending',
      startDate: 'Apr 15',
      endDate: 'May 30',
      contractor: 'Pro Plumbing Co.',
      cost: '$160,000',
      notes: 'Scheduled to start Apr 15'
    },
    {
      name: 'HVAC',
      progress: 0,
      status: 'pending',
      startDate: 'May 1',
      endDate: 'Jun 15',
      contractor: 'Climate Control Inc.',
      cost: '$220,000',
      notes: 'Equipment ordered'
    },
    {
      name: 'Interior Finishing',
      progress: 0,
      status: 'pending',
      startDate: 'Jun 1',
      endDate: 'Aug 31',
      contractor: 'Elite Finishers',
      cost: '$380,000',
      notes: 'Materials being sourced'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700'
      case 'in-progress': return 'bg-blue-100 text-blue-700'
      case 'at-risk': return 'bg-yellow-100 text-yellow-700'
      case 'delayed': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
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
              <Link href="/development" className="text-gray-700 hover:text-blue-600 transition-colors">
                Development
              </Link>
              <Link href="/construction" className="text-blue-600 font-medium">
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
        <div className="container-custom max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Construction Management</h1>
            <p className="text-gray-600 text-lg">Monitor all construction phases and contractors</p>
          </div>

          {/* AI Agent Alert */}
          <div className="card p-6 mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-600 rounded-xl">
                <ExclamationTriangleIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">AI Agent Alert</h3>
                <p className="text-gray-700 mb-3">
                  Weather forecast shows heavy rain next week. Framing work may be delayed by 3-4 days. 
                  I recommend scheduling indoor electrical work during this period to maintain timeline.
                </p>
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
                  Adjust Schedule
                </button>
              </div>
            </div>
          </div>

          {/* Construction Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Overall Progress</span>
                <WrenchScrewdriverIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Active Contractors</span>
                <UserGroupIcon className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-500">of 6 total</div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Budget Spent</span>
                <TruckIcon className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">$880K</div>
              <div className="text-sm text-gray-500">of $1.64M</div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Days Remaining</span>
                <ClipboardDocumentCheckIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">156</div>
              <div className="text-sm text-gray-500">Est. completion</div>
            </div>
          </div>

          {/* Construction Phases */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">Construction Phases</h2>
            <div className="space-y-4">
              {constructionPhases.map((phase, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{phase.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                          {phase.status === 'completed' ? 'Completed' :
                           phase.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Contractor:</span> {phase.contractor}
                        </div>
                        <div>
                          <span className="font-medium">Timeline:</span> {phase.startDate} - {phase.endDate}
                        </div>
                        <div>
                          <span className="font-medium">Budget:</span> {phase.cost}
                        </div>
                        <div>
                          <span className="font-medium">Progress:</span> {phase.progress}%
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{phase.notes}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          phase.status === 'completed' ? 'bg-green-500' :
                          phase.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                    {phase.status === 'in-progress' && (
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Update
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6 mt-8">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Foundation inspection passed</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Framing materials delivered</p>
                  <p className="text-sm text-gray-600">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Weather alert: Rain forecast next week</p>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
