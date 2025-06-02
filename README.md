# Wayzata DECA Website - Complete Source Code

## Setup Instructions
1. Extract this package to your desired location
2. Install Node.js (version 18 or higher)
3. Open terminal in the extracted folder
4. Install dependencies: `npm install`
5. Start development server: `npm run dev`
6. Open browser to http://localhost:5000

## Environment Setup
Create a `.env` file in the root directory with:
```
WEB3FORMS_ACCESS_KEY=fd1929ef-7f8d-4551-ae99-45aa464c1c33
```

## Contact Forms
- Forms automatically send emails to: wayzata.deca@gmail.com
- Uses Web3Forms service for reliable email delivery
- No additional email server setup required

## Social Media Links
- Instagram: https://www.instagram.com/wayzatadeca/
- Facebook: https://www.facebook.com/wayzata.deca.16/

## Deployment Options

### Option 1: Vercel (Recommended)
1. Create account at vercel.com
2. Connect your GitHub repository
3. Add environment variable: `WEB3FORMS_ACCESS_KEY=fd1929ef-7f8d-4551-ae99-45aa464c1c33`
4. Deploy automatically

### Option 2: Netlify
1. Create account at netlify.com
2. Drag and drop the built files
3. Add environment variable in site settings
4. Deploy

### Option 3: Traditional Web Host
1. Run `npm run build`
2. Upload the `dist` folder contents to your web host
3. Ensure environment variables are configured

## Technical Details
- Frontend: React with TypeScript
- Backend: Express.js server
- Styling: Tailwind CSS with shadcn/ui components
- Contact Forms: Web3Forms integration
- Event Management: In-memory storage (can be upgraded to database)

## Support Contact
Ansh Kesharwani: Keshaans000@isd284.com | 651-382-5377

Generated: ${new Date().toISOString()}
Website: wayzatadeca.org