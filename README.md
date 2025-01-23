# Photo Gallery

Photo Gallery is a web application for sharing and exploring photos usint uploadThing with robust authentication and user management.

## Tech Stack

### Frontend

- Next.js 14
- React
- Tailwind CSS
- Radix UI
- shadcn/ui components

### Backend

- TypeScript
- Drizzle ORM
- Vercel Postgres
- Upstash Redis

### Authentication & Services

- Clerk Auth
- UploadThing (file uploads)
- Sentry (error tracking)
- PostHog (analytics)

### Features

- Secure user authentication
- Photo uploading
- Rate limiting
- Dark/light mode
- Error monitoring

Prerequisites

Node.js
PostgreSQL

## TODO

- [x] Make it deployable (/w Vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Set up a db (w/ Vercel Postgres)
- [x] Attach db to ui
- [x] Add authentication (w/ Clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] use next image component
- [x] Error management (w/ Sentry)
- [] Routing/image pate (parallel route)
- [] Delete button (w/ Server Actions)
- [] Analytics (w/ Posthog)
- [] Ratelimiting (w/ Upstash)
