# Portfolio Project Requirements

## Core Technologies
- Next.js 14
- React 18
- TailwindCSS
- Framer Motion
- React Type Animation
- Resend (for email functionality)

## Dependencies Installation
```bash
npm install @heroicons/react framer-motion next react react-dom react-type-animation resend react-hot-toast
```

## Development Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
```

## Environment Variables
Create a `.env.local` file with:
```env
RESEND_API_KEY=re_9iVcejzE_qYjG14xNgxhtqRYjWGytSVtp
```

## Project Setup Instructions
1. Clone the repository
```bash
git clone <repository-url>
cd nextjs-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
- Create `.env.local` in the root directory
- Add the Resend API key

4. Run development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Deployment Instructions (Vercel)
1. Push your code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Deploy with Vercel
- Sign up/Login to Vercel (vercel.com)
- Import your GitHub repository
- Configure environment variables:
  - Add RESEND_API_KEY
- Deploy

3. Post-deployment
- Test contact form functionality
- Verify all images and assets are loading
- Check responsive design on different devices

## System Requirements
- Node.js 18.x or later
- npm 9.x or later
- Git

## Additional Notes
- Images should be placed in the `/public/images` directory
- SVG icons are stored in `/public`
- API routes are in `/src/app/api`
- Components are in `/src/app/components`
