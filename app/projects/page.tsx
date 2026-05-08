'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  PlusIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import { api, Project } from '@/lib/api'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      const result = await api.getProjects()
      setProjects(result.projects)
    } catch (err: any) {
      setError(err.message || 'Failed to load projects')
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
              <Link href="/projects" className="text-blue-600 font-semibold">
                Projects
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-blue-600 transition-colors">
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
        <div className="container-custom">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Projects</h1>
              <p className="text-gray-600 text-lg">Manage your real estate development projects</p>
            </div>
            <Link href="/create" className="btn btn-primary flex items-center gap-2">
              <PlusIcon className="h-5 w-5" />
              New Project
            </Link>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && projects.length === 0 && (
            <div className="text-center py-12">
              <BuildingOffice2Icon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects yet</h3>
              <p className="text-gray-600 mb-6">Create your first development project to get started</p>
              <Link href="/create" className="btn btn-primary inline-flex items-center gap-2">
                <PlusIcon className="h-5 w-5" />
                Create First Project
              </Link>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && projects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  className="card p-6 hover-lift cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <BuildingOffice2Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'active' ? 'bg-green-100 text-green-700' :
                      project.status === 'planning' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4" />
                      {project.location}
                    </div>
                    {project.budget && (
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        ${project.budget.toLocaleString()}
                      </div>
                    )}
                    {project.start_date && (
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(project.start_date).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      Created {new Date(project.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
