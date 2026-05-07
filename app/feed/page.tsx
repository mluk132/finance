'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  SparklesIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid'

interface ContentItem {
  id: number
  title: string
  excerpt: string
  author: string
  authorAvatar: string
  coverImage: string
  tags: string[]
  views: number
  likes: number
  comments: number
  createdAt: string
  liked: boolean
  bookmarked: boolean
}

export default function FeedPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [content, setContent] = useState<ContentItem[]>([
    {
      id: 1,
      title: 'The Future of Interactive Storytelling',
      excerpt: 'Exploring how hypermedia is revolutionizing the way we tell stories online. From embedded videos to interactive widgets, the possibilities are endless...',
      author: 'Sarah Chen',
      authorAvatar: 'https://i.pravatar.cc/150?img=1',
      coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
      tags: ['storytelling', 'hypermedia', 'innovation'],
      views: 12500,
      likes: 342,
      comments: 28,
      createdAt: '2 hours ago',
      liked: false,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Building Engaging Content Experiences',
      excerpt: 'Learn the secrets to creating content that captivates your audience. We dive deep into the psychology of engagement and practical techniques...',
      author: 'Marcus Johnson',
      authorAvatar: 'https://i.pravatar.cc/150?img=12',
      coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
      tags: ['content', 'engagement', 'tips'],
      views: 8900,
      likes: 256,
      comments: 19,
      createdAt: '5 hours ago',
      liked: true,
      bookmarked: false
    },
    {
      id: 3,
      title: 'The Art of Visual Communication',
      excerpt: 'Visual elements can make or break your content. Discover how to use images, videos, and graphics to enhance your message and connect with readers...',
      author: 'Emma Rodriguez',
      authorAvatar: 'https://i.pravatar.cc/150?img=5',
      coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      tags: ['design', 'visual', 'communication'],
      views: 15200,
      likes: 489,
      comments: 34,
      createdAt: '1 day ago',
      liked: false,
      bookmarked: true
    },
    {
      id: 4,
      title: 'Mastering Content Analytics',
      excerpt: 'Data-driven content creation is the key to success. Learn how to interpret analytics, understand your audience, and optimize your strategy...',
      author: 'David Kim',
      authorAvatar: 'https://i.pravatar.cc/150?img=8',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['analytics', 'data', 'strategy'],
      views: 6700,
      likes: 178,
      comments: 15,
      createdAt: '2 days ago',
      liked: false,
      bookmarked: false
    }
  ])

  const toggleLike = (id: number) => {
    setContent(content.map(item => 
      item.id === id ? { ...item, liked: !item.liked, likes: item.liked ? item.likes - 1 : item.likes + 1 } : item
    ))
  }

  const toggleBookmark = (id: number) => {
    setContent(content.map(item => 
      item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
    ))
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
              <Link href="/feed" className="text-indigo-600 font-semibold">
                Feed
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-indigo-600 transition-colors">
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
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Discover Content</h1>
            <p className="text-gray-600 text-lg">Explore the latest hypermedia stories and articles</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary flex items-center gap-2">
                <FunnelIcon className="h-5 w-5" />
                Filters
              </button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-8 flex gap-2 flex-wrap">
            {['all', 'trending', 'recent', 'popular', 'following'].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {content.map((item) => (
              <div key={item.id} className="card overflow-hidden hover-lift animate-fade-in">
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.coverImage} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                    >
                      {item.bookmarked ? (
                        <BookmarkSolidIcon className="h-5 w-5 text-indigo-600" />
                      ) : (
                        <BookmarkIcon className="h-5 w-5 text-gray-700" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={item.authorAvatar} 
                      alt={item.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-sm">{item.author}</div>
                      <div className="text-gray-500 text-xs">{item.createdAt}</div>
                    </div>
                  </div>

                  {/* Title and Excerpt */}
                  <h3 className="text-xl font-bold mb-2 hover:text-indigo-600 cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{item.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLike(item.id)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {item.liked ? (
                          <HeartSolidIcon className="h-5 w-5 text-red-500" />
                        ) : (
                          <HeartIcon className="h-5 w-5 text-gray-600" />
                        )}
                        <span className="text-sm font-medium">{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <ChatBubbleLeftIcon className="h-5 w-5 text-gray-600" />
                        <span className="text-sm font-medium">{item.comments}</span>
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <ShareIcon className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="btn btn-secondary px-8 py-3">
              Load More Content
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
