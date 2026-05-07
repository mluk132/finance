'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  SparklesIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
  EyeIcon,
  CloudArrowUpIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function CreatePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [preview, setPreview] = useState(false)

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput])
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <SparklesIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hypermedia Oasis
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/feed" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Feed
              </Link>
              <Link href="/create" className="text-indigo-600 font-semibold">
                Create
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Analytics
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Create Content</h1>
            <p className="text-gray-600 text-lg">Craft your story with rich hypermedia elements</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Editor */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your title..."
                  className="w-full text-3xl font-bold border-none focus:ring-0 focus:outline-none placeholder:text-gray-300"
                />
              </div>

              {/* Content Editor */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-semibold">Content</label>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPreview(!preview)}
                      className="btn btn-ghost text-sm flex items-center gap-2"
                    >
                      <EyeIcon className="h-4 w-4" />
                      {preview ? 'Edit' : 'Preview'}
                    </button>
                  </div>
                </div>

                {!preview ? (
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your story..."
                    className="w-full h-96 border-none focus:ring-0 focus:outline-none resize-none text-lg leading-relaxed"
                  />
                ) : (
                  <div className="prose prose-lg max-w-none h-96 overflow-y-auto">
                    <div className="whitespace-pre-wrap">{content || 'Nothing to preview yet...'}</div>
                  </div>
                )}

                {/* Toolbar */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add Image">
                    <PhotoIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add Video">
                    <VideoCameraIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add Audio">
                    <MusicalNoteIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Embed Code">
                    <CodeBracketIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Upload File">
                    <CloudArrowUpIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="card p-6">
                <label className="block text-sm font-semibold mb-2">Tags</label>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      #{tag}
                      <button 
                        onClick={() => removeTag(tag)}
                        className="hover:text-indigo-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    placeholder="Add a tag..."
                    className="flex-1 input"
                  />
                  <button onClick={addTag} className="btn btn-secondary">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Publish</h3>
                <div className="space-y-3">
                  <button className="w-full btn btn-primary">
                    Publish Now
                  </button>
                  <button className="w-full btn btn-secondary">
                    Save Draft
                  </button>
                  <button className="w-full btn btn-ghost">
                    Schedule
                  </button>
                </div>
              </div>

              {/* Settings */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Visibility</label>
                    <select className="w-full input">
                      <option>Public</option>
                      <option>Private</option>
                      <option>Unlisted</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select className="w-full input">
                      <option>Article</option>
                      <option>Tutorial</option>
                      <option>Story</option>
                      <option>Review</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Allow comments</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Featured content</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Media Library */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Media Library</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Drop files here or click to upload</p>
                </div>
              </div>

              {/* Tips */}
              <div className="card p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-indigo-600" />
                  Pro Tips
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Use compelling titles to grab attention</li>
                  <li>• Add relevant tags for discoverability</li>
                  <li>• Include rich media to enhance engagement</li>
                  <li>• Preview before publishing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
