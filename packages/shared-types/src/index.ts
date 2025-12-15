/**
 * Shared TypeScript types for the École Louis Legrand ecosystem
 */

// User Types
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserRole {
    STUDENT = 'student',
    TEACHER = 'teacher',
    ADMIN = 'admin',
    PARENT = 'parent'
}

// Student Types
export interface Student extends User {
    role: UserRole.STUDENT;
    studentId: string;
    grade: number;
    enrollmentDate: Date;
    courses: string[];
}

// Course Types
export interface Course {
    id: string;
    code: string;
    name: string;
    description: string;
    grade: number;
    credits: number;
    prerequisites?: string[];
}

// Common Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// Pagination Types
export interface PaginationParams {
    page: number;
    limit: number;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
