# Agent Instructions for TinyLink Project

This file serves as the main index for AI coding agents working on the TinyLink project. All detailed instructions are organized into separate files in the `/docs` directory.

## ⚠️ CRITICAL: Read Instructions BEFORE Coding

**BEFORE generating, modifying, or creating ANY code, you MUST:**

1. **ALWAYS read the relevant instruction file(s) from the `/docs` directory first**
2. **Never skip this step** - even for small changes or quick fixes
3. **Verify you understand the rules** specified in the instruction files
4. **Follow all guidelines** precisely as documented

**Failure to read the instruction files before coding may result in:**
- Authentication bugs and security issues
- UI inconsistencies and broken components
- Architecture violations
- Wasted effort from having to redo work

## Project Overview

TinyLink is a URL shortener application built with Next.js 16, React 19, TypeScript, Clerk authentication, and Drizzle ORM with Neon PostgreSQL.

## Instruction Files

For detailed guidelines on specific topics, refer to the modular documentation in the `/docs` directory:

**📋 MANDATORY READING BEFORE ANY CODE GENERATION:**

- **[Authentication Rules](docs/authentication.md)** - **READ FIRST** for any auth-related work, protected routes, or user data
- **[UI Components Rules](docs/uicomponents.md)** - **READ FIRST** for any UI components, styling, or client components

**Remember: Use the `read_file` tool to acquire the relevant instruction file BEFORE writing any code!**


## Quick Reference

**Tech Stack:**
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui components (New York style)
- Clerk authentication
- Drizzle ORM
- Neon PostgreSQL
- Lucide React icons

**Import Alias:** `@/` maps to project root

**Node Target:** ES2017

**Key Commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## General Principles

1. **Type Safety First**: Always use TypeScript with strict mode enabled
2. **Server Components by Default**: Use React Server Components unless client interactivity is needed
3. **Progressive Enhancement**: Build features that work without JavaScript when possible
4. **Accessibility**: Follow WCAG 2.1 AA standards
5. **Performance**: Optimize for Core Web Vitals
6. **Security**: Never expose sensitive data or API keys client-side

## Getting Help

When unsure about implementation details:
1. Check the relevant instruction file in `/docs`
2. Review existing code for similar patterns
3. Consult Next.js 16, React 19, and library documentation
4. Follow the principle of least surprise - use conventional patterns
