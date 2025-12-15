# @ell-ecosystem/shared-types

Shared TypeScript types and interfaces for the École Louis Legrand ecosystem.

## Purpose

This package contains common TypeScript type definitions that are shared across multiple projects in the ELL ecosystem, including:
- Marketing website
- Student portal
- Learning management system
- Backend API

## Usage

### Installation

```bash
npm install @ell-ecosystem/shared-types
```

### Importing Types

```typescript
import { User, Course, Student, ApiResponse } from '@ell-ecosystem/shared-types';
```

## Available Types

### User Types
- `User` - Base user interface
- `UserRole` - Enum for user roles (STUDENT, TEACHER, ADMIN, PARENT)
- `Student` - Extended student interface

### Course Types
- `Course` - Course information interface

### API Response Types
- `ApiResponse<T>` - Generic API response wrapper
- `PaginatedResponse<T>` - Paginated data response

### Utility Types
- `PaginationParams` - Pagination parameters

## Development

### Build

```bash
npm run build
```

### Clean

```bash
npm run clean
```

## License

ISC
