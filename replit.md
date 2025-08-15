# My Study Swaps - AI-Powered Educational Platform

## Overview
My Study Swaps is an AI-powered educational platform for students aged 5-18, providing personalized learning, progress tracking, and interactive content. It supports role-based access for students, parents, and teachers, aiming to deliver a modern, responsive, and adaptive learning experience. The platform's vision is to offer a comprehensive solution for personalized education, leveraging AI to create adaptive learning paths and provide tailored content. It aims to offer a comprehensive solution for personalized education, justifying a high monthly subscription cost through high-quality, AI-generated educational content.

## User Preferences
Preferred communication style: Simple, everyday language.
Language requirement: UK English only - no US English spellings anywhere in the platform (e.g., use "recognise" not "recognize", "specialised" not "specialized", "customisation" not "customization", "optimised" not "optimized", "organised" not "organized", "behaviour" not "behavior").

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with TypeScript (ESM modules)
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with PostgreSQL storage

### Key Features & Design Decisions
- **Authentication**: Replit Auth with OpenID Connect for role-based access (student, parent, teacher), with planned migration to Supabase Auth.
- **Database Schema**: Comprehensive user profiles, progress tracking, learning sessions, AI recommendations, achievement system, and class management.
- **AI Integration**: OpenAI GPT-4o for adaptive learning, personalized recommendations, and age-appropriate content generation, including comprehensive revision guides (2000+ words) with practical, formula-focused mathematics content and flashcard generation with spaced repetition. Recraft AI for high-quality vector illustrations.
- **UI/UX Design**:
    - Consistent component library using Radix UI primitives with a responsive, mobile-first approach.
    - Purple gradient theme with glass morphism effects.
    - Atom Learning inspired color schemes adapted for different Key Stages (KS1/KS2: bright & playful; KS3/KS4: contemporary cool; Parent/Teacher: professional neutral).
    - Gamified elements: cartoon avatars (age-appropriate display), points, badges, and milestone tracking.
    - Educational visuals: Contextual SVG illustrations.
    - Simplified dashboards for younger students (KS1/KS2) focusing on learning journey maps and daily progress; older students (KS3/KS4) receive AI recommendations and quick actions.
- **Assessment System**:
    - Generates multiple-choice and essay questions (80% MCQ, 20% essay for KS3/KS4 non-maths).
    - AI-powered teacher-style feedback for essays with detailed model answers.
    - Individual question timing and comprehensive results display.
    - PDF exam paper generation with professional formatting and mark schemes.
    - UK National Curriculum alignment for question generation.
    - Assessment progress auto-save system.
    - Adaptive difficulty system for KS1/KS2.
- **Class Management System**: Teachers manage existing assigned classes and student rosters.
- **Learning Calendar**: Interactive calendar showing daily activities with filtering and detailed activity views, supporting multi-year academic history.
- **Subscription Management**: Tiered subscription plans with comprehensive enforcement of access restrictions based on subscription tier (Free Trial vs. Free Tier).
- **Upload Encouragement**: AI recommendations encourage KS3/KS4 students to upload school work for better personalization.

## External Dependencies

- **Database**: Neon serverless PostgreSQL
- **Authentication**: Supabase Auth (planned migration from Replit Auth)
- **File Storage**: Cloudflare R2 (planned migration from local file system)
- **Hosting**: Vercel (planned migration from Replit hosting)
- **AI Services**: OpenAI API (GPT-4o, DALL-E 3), Recraft AI
- **Payments**: Stripe
- **UI Components**: Radix UI
- **Email Marketing**: Mailchimp
- **CMS**: Strapi
- **Monitoring**: Sentry

## Recent Technical Improvements (August 2025)

### Performance Optimizations
- Implemented comprehensive caching system (30-second cache for user data, assessments, files, stats)
- Parallel database query execution for user statistics
- Dashboard load times reduced from 600-800ms to under 200ms for cached requests
- Fixed console warning issues from duplicate timing labels
- Added proper cache invalidation on data changes

### Mathematics Revision Guide Enhancement
- Updated AI prompts to focus on practical, formula-focused content
- Eliminated historical context and theoretical background
- Enforced 5-section structure: Key Formulas, Step-by-Step Methods, 8-10 Worked Examples, Quick Reference, Practice Problems
- Removed Common Misconceptions section per user feedback
- Minimized topic introduction to 1-2 paragraphs maximum
- Major focus on detailed worked examples with step-by-step calculations

### Flashcard System Bug Fix (August 13, 2025)
- **Issue Resolved**: "undefined - undefined" appearing in flashcard print headers
- **Root Cause**: Improper title construction in FlashcardModal when subject/topic were undefined
- **Solution**: Added robust fallback logic for revision guide titles with proper null/undefined handling
- **Impact**: Print view now displays clean titles or removes text entirely when invalid data present
- **User Confirmation**: Tested and confirmed working across multiple subjects (English, Biology, Mathematics)

### Science Revision Guide Enhancement (August 13, 2025)
- **Updated AI Prompt Structure**: Implemented comprehensive 9-section framework for Chemistry, Biology, and Physics
- **Focus Areas**: Practical experiments, step-by-step processes, worked examples, and real-world applications
- **Key Improvements**: Enhanced scientific formatting, proper chemical formulas, detailed calculations with units
- **Structure**: Key concepts, equations, processes, worked examples, experiments, applications, misconceptions, quick reference, practice questions
- **Subject-Specific**: Tailored guidance for Chemistry (equations/reactions), Biology (processes/systems), Physics (calculations/applications)