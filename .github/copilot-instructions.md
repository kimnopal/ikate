# Copilot Instructions for Laravel + React (Inertia.js) Starter Kit

## Architecture Overview

This is a Laravel 12 + React SPA using Inertia.js for seamless client-server communication. Key components:

- **Backend**: Laravel with Inertia.js adapter for SSR-enabled responses
- **Frontend**: React with TypeScript, TailwindCSS v4, and Radix UI components
- **State Management**: Inertia.js handles page-level state and navigation
- **Build System**: Vite with Laravel plugin for asset bundling and HMR
- **Testing**: Pest PHP for backend, ESLint/Prettier for frontend code quality

## Essential Development Patterns

### Page Component Structure

```tsx
// All pages follow this pattern in resources/js/pages/
export default function PageName() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Page Title" />
            {/* Page content */}
        </AppLayout>
    );
}
```

### Route Definition Pattern

Laravel routes in `routes/web.php` render Inertia pages:

```php
Route::get('/dashboard', [Dashboard::controller, 'index'])->name('dashboard');
```

### Component Import Convention

Use `@/` alias for absolute imports from `resources/js/`:

- `@/components/` - Reusable UI components
- `@/layouts/` - Layout wrappers (AppLayout -> AppLayoutTemplate)
- `@/types/` - TypeScript definitions
- `@/hooks/` - Custom React hooks
- `@/lib/` - Utility functions

### UI Component System

- **Base components**: Located in `resources/js/components/ui/` (Radix UI + custom styling)
- **App components**: Located in `resources/js/components/` (business logic components)
- **Icons**: Use `lucide-react` for consistency (see `NavItem` interface)

## Critical Development Workflows

### Development Server

```bash
# Terminal 1: Laravel backend
php artisan serve

# Terminal 2: Frontend assets with HMR
npm run dev
```

### Testing

```bash
# Backend tests (Pest)
php artisan test
# or: ./vendor/bin/pest

# Frontend linting & formatting
npm run lint
npm run format:check
```

### Build Process

```bash
# Production build
npm run build

# SSR-enabled build
npm run build:ssr
```

## Project-Specific Conventions

### TypeScript Integration

- Shared data types in `resources/js/types/index.d.ts` (Auth, BreadcrumbItem, NavItem)
- Ziggy route helpers available via `ziggy` prop in pages
- Strict TypeScript checking with `npm run types`

### Styling Approach

- TailwindCSS v4 with Vite plugin integration
- Design system variables for sidebar themes and borders
- Component variants using `class-variance-authority`
- Dark/light mode support via `use-appearance` hook

### Authentication Flow

- Auth routes in `routes/auth.php`
- Middleware protection: `['auth', 'verified']` for protected routes
- User model available in Inertia shared data as `auth.user`

### Testing Strategy

- Feature tests in `tests/Feature/` using authentication helpers
- Pest syntax: `test('description', function() { ... })`
- Database refresh enabled for feature tests via `RefreshDatabase`

## Integration Points

### Inertia.js Data Flow

- Server responses include `auth`, `ziggy`, and `sidebarOpen` in shared data
- Client-side navigation via `<Link>` components with `prefetch` prop
- Form submissions handled by Inertia form helpers

### Asset Pipeline

- Vite processes `resources/css/app.css` and `resources/js/app.tsx`
- SSR entry point: `resources/js/ssr.tsx`
- Laravel Vite plugin handles manifest generation and HMR

When working with this codebase:

1. Always use the `@/` import alias for internal modules
2. Follow the page component pattern with AppLayout wrapper
3. Use TypeScript interfaces from `@/types` for prop definitions
4. Leverage existing UI components before creating new ones
5. Test authentication flows using the established patterns in `tests/Feature/`
