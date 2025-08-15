# Vercel Deployment Guide for My Study Swaps

## Prerequisites
- Git repository (GitHub/GitLab/Bitbucket)
- Vercel account
- Environment secrets ready

## Step 1: Import Repository to Vercel
1. Go to Vercel dashboard
2. Click "Import" → "Import an existing Git Repository"
3. Connect your Git provider and select your repository
4. Choose root directory if prompted

## Step 2: Configure Project Settings
**Framework Preset:** Other  
**Root Directory:** ./  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Install Command:** `npm install`  

## Step 3: Environment Variables
Add these in Vercel dashboard → Project Settings → Environment Variables:

### Database & Authentication
- `DATABASE_URL` - Your Neon PostgreSQL connection string
- `SESSION_SECRET` - Random secure string for sessions
- `REPL_ID` - Your Replit application ID
- `ISSUER_URL` - https://replit.com/oidc (or your custom domain)
- `REPLIT_DOMAINS` - your-app.vercel.app

### External Services
- `OPENAI_API_KEY` - Your OpenAI API key
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `VITE_STRIPE_PUBLIC_KEY` - Your Stripe publishable key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key

### Optional Services
- `NEON_API_KEY` - For database management
- `MAILCHIMP_API_KEY` - For email marketing
- `SENTRY_DSN` - For error tracking

## Step 4: Domain Configuration
1. In Vercel → Project Settings → Domains
2. Add your custom domain (optional)
3. Update `REPLIT_DOMAINS` environment variable to include your domain

## Step 5: Database Setup
1. Ensure your Neon database is accessible from Vercel
2. Run database migrations if needed:
   ```bash
   npm run db:push
   ```

## Step 6: Deploy
1. Click "Deploy" in Vercel
2. Monitor build logs for any issues
3. Test the deployed application

## Important Notes
- The `vercel.json` file is already configured for your project structure
- API routes will be available at `/api/*`
- Static files will be served from `/dist`
- Authentication requires proper domain configuration
- Database connections use serverless-compatible drivers

## Troubleshooting
- **Build fails:** Check environment variables are set
- **API routes 404:** Verify `vercel.json` routing configuration
- **Database errors:** Confirm `DATABASE_URL` format and accessibility
- **Auth issues:** Check `REPLIT_DOMAINS` includes your Vercel domain