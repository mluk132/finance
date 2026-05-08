'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  SparklesIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  HomeModernIcon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { api } from '@/lib/api'

export default function CreatePage() {
  const router = useRouter()
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')
  const [budget, setBudget] = useState('')
  const [description, setDescription] = useState('')
  const [projectType, setProjectType] = useState('residential')
  const [startDate, setStartDate] = useState('')
  const [units, setUnits] = useState('')
  const [squareFootage, setSquareFootage] = useState('')
  const [floors, setFloors] = useState('')
  const [parkingSpaces, setParkingSpaces] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!projectName || !location) {
      setError('Project name and location are required')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const result = await api.createProject({
        name: projectName,
        location,
        budget: budget ? parseFloat(budget) : undefined,
        projectType,
        startDate: startDate || undefined,
        description: description || undefined,
        units: units ? parseInt(units) : undefined,
        squareFootage: squareFootage ? parseInt(squareFootage) : undefined,
        floors: floors ? parseInt(floors) : undefined,
        parkingSpaces: parkingSpaces ? parseInt(parkingSpaces) : undefined,
      })
      
      setSuccess(true)
      setTimeout(() => {
        router.push(`/projects/${result.project.id}`)
      }, 1500)
    } catch (err: any) {
      setError(err.message || 'Failed to create project')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BuildingOffice2Icon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PropAI
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/create" className="text-blue-600 font-semibold">
                New Project
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-blue-600 transition-colors">
                Analytics
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Create New Development Project</h1>
            <p className="text-gray-600 text-lg">Track your real estate development from start to finish</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Name */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g., Downtown Tower Residences"
                  className="w-full text-2xl font-bold border-none focus:ring-0 focus:outline-none placeholder:text-gray-300"
                />
              </div>

              {/* Location */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-blue-600" />
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter property address or location"
                  className="w-full input"
                />
              </div>

              {/* Budget & Timeline */}
              <div className="card p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <CurrencyDollarIcon className="h-5 w-5 text-blue-600" />
                      Total Budget
                    </label>
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="$2,500,000"
                      className="w-full input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-blue-600" />
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full input"
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2">Project Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your development project, key features, target market, etc..."
                  className="w-full h-48 border-none focus:ring-0 focus:outline-none resize-none text-lg leading-relaxed"
                />
              </div>

              {/* Project Details */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Units</label>
                    <input 
                      type="number" 
                      placeholder="24" 
                      className="w-full input"
                      value={units}
                      onChange={(e) => setUnits(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Square Footage</label>
                    <input 
                      type="text" 
                      placeholder="45000" 
                      className="w-full input"
                      value={squareFootage}
                      onChange={(e) => setSquareFootage(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Floors</label>
                    <input 
                      type="number" 
                      placeholder="8" 
                      className="w-full input"
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Parking Spaces</label>
                    <input 
                      type="number" 
                      placeholder="30" 
                      className="w-full input"
                      value={parkingSpaces}
                      onChange={(e) => setParkingSpaces(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Create Project */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Create Project</h3>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    ✅ Project created! Redirecting...
                  </div>
                )}
                <div className="space-y-3">
                  <button 
                    onClick={handleSubmit}
                    disabled={loading || success}
                    className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Creating...' : 'Create Project'}
                  </button>
                  <button className="w-full btn btn-secondary">
                    Save Draft
                  </button>
                </div>
              </div>

              {/* Project Type */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <HomeModernIcon className="h-5 w-5 text-blue-600" />
                  Project Type
                </h3>
                <div className="space-y-2">
                  {['Residential', 'Commercial', 'Mixed-Use', 'Industrial', 'Retail'].map((type) => (
                    <label key={type} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input 
                        type="radio" 
                        name="projectType" 
                        value={type.toLowerCase()}
                        checked={projectType === type.toLowerCase()}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="text-blue-600"
                      />
                      <span className="text-sm font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-blue-600" />
                  AI Insights
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Market analysis will be generated</li>
                  <li>• ROI predictions based on location</li>
                  <li>• Budget recommendations</li>
                  <li>• Timeline optimization</li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5 text-blue-600" />
                  Your Portfolio
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Active Projects</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Investment</span>
                    <span className="font-bold text-blue-600">$45M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg. ROI</span>
                    <span className="font-bold text-green-600">+18%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
