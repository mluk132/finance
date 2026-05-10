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
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { api } from '@/lib/api'

interface FieldErrors {
  projectName?: string
  location?: string
  budget?: string
  units?: string
  squareFootage?: string
  floors?: string
  parkingSpaces?: string
}

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
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case 'projectName':
        if (!value.trim()) return 'Project name is required'
        if (value.trim().length < 3) return 'Must be at least 3 characters'
        if (value.trim().length > 255) return 'Must be less than 255 characters'
        return undefined
      case 'location':
        if (!value.trim()) return 'Location is required'
        if (value.trim().length < 3) return 'Please enter a valid location'
        return undefined
      case 'budget':
        if (value && isNaN(parseFloat(value.replace(/[$,]/g, '')))) return 'Must be a valid number'
        if (value && parseFloat(value.replace(/[$,]/g, '')) < 0) return 'Must be positive'
        return undefined
      case 'units':
        if (value && (!Number.isInteger(Number(value)) || Number(value) < 0)) return 'Must be a positive whole number'
        return undefined
      case 'squareFootage':
        if (value && (!Number.isInteger(Number(value)) || Number(value) < 0)) return 'Must be a positive whole number'
        return undefined
      case 'floors':
        if (value && (!Number.isInteger(Number(value)) || Number(value) < 0)) return 'Must be a positive whole number'
        return undefined
      case 'parkingSpaces':
        if (value && (!Number.isInteger(Number(value)) || Number(value) < 0)) return 'Must be a positive whole number'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (field: string, value: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const err = validateField(field, value)
    setFieldErrors(prev => ({ ...prev, [field]: err }))
  }

  const validateAll = (): boolean => {
    const errors: FieldErrors = {
      projectName: validateField('projectName', projectName),
      location: validateField('location', location),
      budget: validateField('budget', budget),
      units: validateField('units', units),
      squareFootage: validateField('squareFootage', squareFootage),
      floors: validateField('floors', floors),
      parkingSpaces: validateField('parkingSpaces', parkingSpaces),
    }
    setFieldErrors(errors)
    setTouched({
      projectName: true,
      location: true,
      budget: true,
      units: true,
      squareFootage: true,
      floors: true,
      parkingSpaces: true,
    })
    return !Object.values(errors).some(e => e !== undefined)
  }

  const handleSubmit = async () => {
    setError('')
    
    if (!validateAll()) {
      setError('Please fix the errors below before submitting')
      return
    }

    setLoading(true)
    
    try {
      const cleanBudget = budget ? parseFloat(budget.replace(/[$,]/g, '')) : undefined
      
      console.log('Submitting project:', {
        name: projectName.trim(),
        location: location.trim(),
        budget: cleanBudget,
        projectType,
      })

      const result = await api.createProject({
        name: projectName.trim(),
        location: location.trim(),
        budget: cleanBudget,
        projectType,
        startDate: startDate || undefined,
        description: description.trim() || undefined,
        units: units ? parseInt(units) : undefined,
        squareFootage: squareFootage ? parseInt(squareFootage) : undefined,
        floors: floors ? parseInt(floors) : undefined,
        parkingSpaces: parkingSpaces ? parseInt(parkingSpaces) : undefined,
      })
      
      console.log('Project created:', result)
      setSuccess(true)
      
      setTimeout(() => {
        router.push('/projects')
      }, 1500)
    } catch (err: any) {
      console.error('Error creating project:', err)
      setError(err.message || 'Failed to create project. Please try again.')
      setLoading(false)
    }
  }

  const getInputClass = (field: string) => {
    const hasError = touched[field] && fieldErrors[field as keyof FieldErrors]
    return `w-full px-4 py-3 border rounded-lg transition-colors ${
      hasError 
        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
    } focus:outline-none`
  }

  const FieldError = ({ field }: { field: string }) => {
    const err = fieldErrors[field as keyof FieldErrors]
    if (!touched[field] || !err) return null
    return (
      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
        <ExclamationCircleIcon className="h-4 w-4" />
        <span>{err}</span>
      </div>
    )
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
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/create" className="text-blue-600 font-semibold">
                New Project
              </Link>
              <Link href="/development" className="text-gray-700 hover:text-blue-600 transition-colors">
                Development
              </Link>
              <Link href="/construction" className="text-gray-700 hover:text-blue-600 transition-colors">
                Construction
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Create New Development Project</h1>
            <p className="text-gray-600 text-lg">Track your real estate development from start to finish</p>
          </div>

          {/* Top-level Status Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <ExclamationCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">Unable to create project</p>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
              <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900">Project created successfully!</p>
                <p className="text-green-700 text-sm mt-1">Redirecting to your projects...</p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Name - REQUIRED */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e.target.value)
                    if (touched.projectName) {
                      setFieldErrors(prev => ({ ...prev, projectName: validateField('projectName', e.target.value) }))
                    }
                  }}
                  onBlur={() => handleBlur('projectName', projectName)}
                  placeholder="e.g., Downtown Tower Residences"
                  className={getInputClass('projectName')}
                />
                <FieldError field="projectName" />
              </div>

              {/* Location - REQUIRED */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-blue-600" />
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value)
                    if (touched.location) {
                      setFieldErrors(prev => ({ ...prev, location: validateField('location', e.target.value) }))
                    }
                  }}
                  onBlur={() => handleBlur('location', location)}
                  placeholder="e.g., 123 Main St, Miami Beach, FL"
                  className={getInputClass('location')}
                />
                <FieldError field="location" />
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
                      onChange={(e) => {
                        setBudget(e.target.value)
                        if (touched.budget) {
                          setFieldErrors(prev => ({ ...prev, budget: validateField('budget', e.target.value) }))
                        }
                      }}
                      onBlur={() => handleBlur('budget', budget)}
                      placeholder="2500000"
                      className={getInputClass('budget')}
                    />
                    <FieldError field="budget" />
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
                      className={getInputClass('startDate')}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2">Project Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your development project, key features, target market, etc..."
                  className="w-full h-36 px-4 py-3 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg focus:outline-none resize-none"
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
                      min="0"
                      placeholder="24" 
                      className={getInputClass('units')}
                      value={units}
                      onChange={(e) => {
                        setUnits(e.target.value)
                        if (touched.units) {
                          setFieldErrors(prev => ({ ...prev, units: validateField('units', e.target.value) }))
                        }
                      }}
                      onBlur={() => handleBlur('units', units)}
                    />
                    <FieldError field="units" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Square Footage</label>
                    <input 
                      type="number" 
                      min="0"
                      placeholder="45000" 
                      className={getInputClass('squareFootage')}
                      value={squareFootage}
                      onChange={(e) => {
                        setSquareFootage(e.target.value)
                        if (touched.squareFootage) {
                          setFieldErrors(prev => ({ ...prev, squareFootage: validateField('squareFootage', e.target.value) }))
                        }
                      }}
                      onBlur={() => handleBlur('squareFootage', squareFootage)}
                    />
                    <FieldError field="squareFootage" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Floors</label>
                    <input 
                      type="number" 
                      min="0"
                      placeholder="8" 
                      className={getInputClass('floors')}
                      value={floors}
                      onChange={(e) => {
                        setFloors(e.target.value)
                        if (touched.floors) {
                          setFieldErrors(prev => ({ ...prev, floors: validateField('floors', e.target.value) }))
                        }
                      }}
                      onBlur={() => handleBlur('floors', floors)}
                    />
                    <FieldError field="floors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Parking Spaces</label>
                    <input 
                      type="number" 
                      min="0"
                      placeholder="30" 
                      className={getInputClass('parkingSpaces')}
                      value={parkingSpaces}
                      onChange={(e) => {
                        setParkingSpaces(e.target.value)
                        if (touched.parkingSpaces) {
                          setFieldErrors(prev => ({ ...prev, parkingSpaces: validateField('parkingSpaces', e.target.value) }))
                        }
                      }}
                      onBlur={() => handleBlur('parkingSpaces', parkingSpaces)}
                    />
                    <FieldError field="parkingSpaces" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Create Project</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Fill in the required fields marked with <span className="text-red-500">*</span>
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={handleSubmit}
                    disabled={loading || success}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    {loading ? 'Creating...' : success ? 'Created!' : 'Create Project'}
                  </button>
                  <Link 
                    href="/projects"
                    className="block w-full px-6 py-3 text-center border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancel
                  </Link>
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
              <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-blue-600" />
                  AI Agent
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Your AI agent will automatically start monitoring this project for:
                </p>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  <li>• Budget tracking & alerts</li>
                  <li>• Timeline predictions</li>
                  <li>• Market analysis</li>
                  <li>• Risk detection</li>
                  <li>• ROI optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
