# Hypermedia Oasis

Rich content platform with dynamic feeds, content creation, and analytics.

## Features

### Page 1: Content Feed
- Dynamic feed of hypermedia content
- Rich previews with embedded media
- Interactive elements and widgets
- Infinite scroll with lazy loading
- Filter by content type, tags, and popularity
- Real-time updates

### Page 2: Content Creator
- Rich text editor with WYSIWYG
- Hypermedia embedding tools
- Drag-and-drop media uploads
- Link previews
- Live preview mode
- Auto-save and version history

### Page 3: Analytics Dashboard
- Content performance metrics
- Views, engagement, shares
- Audience demographics
- Time-series charts
- Export reports
- Real-time metrics

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Vercel Postgres
- **Charts**: Recharts
- **Editor**: React Quill
- **Markdown**: React Markdown
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

## Environment Variables

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

JWT_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Database Schema

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE content (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(500) NOT NULL,
    body TEXT NOT NULL,
    content_type VARCHAR(50) DEFAULT 'article',
    tags TEXT[],
    media_urls TEXT[],
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE analytics (
    id SERIAL PRIMARY KEY,
    content_id INTEGER REFERENCES content(id),
    event_type VARCHAR(50) NOT NULL,
    user_id INTEGER REFERENCES users(id),
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_content_user ON content(user_id);
CREATE INDEX idx_content_published ON content(published, created_at DESC);
CREATE INDEX idx_analytics_content ON analytics(content_id, created_at DESC);
```

## API Routes

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/content` - Get content feed
- `POST /api/content` - Create content
- `GET /api/content/[id]` - Get single content
- `PUT /api/content/[id]` - Update content
- `DELETE /api/content/[id]` - Delete content
- `GET /api/analytics/[id]` - Get content analytics
- `POST /api/analytics/event` - Track analytics event

## Deployment

```bash
# Deploy to Vercel
vercel deploy --prod

# Set environment variables in Vercel dashboard
# Add Vercel Postgres database
```

## License

MIT
