# Quick Start Guide

## Getting Started in 3 Steps

### Step 1: Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: `http://localhost:5173`

That's it! Your website is now running locally.

## Building for Production

When ready to deploy:
```bash
npm run build
```

The production files will be in the `dist` folder.

## Need Help?

If you encounter the PowerShell script execution error, run this command in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try the installation again.

## What's Included

✅ Home page with hero section and services
✅ Services page with detailed offerings
✅ About page with company info and testimonials
✅ FAQ page with interactive accordion
✅ Responsive navigation and footer
✅ Mobile-friendly design
✅ Professional animations
✅ Contact information throughout

## Customization

All page content is in: `src/pages/`
- Home.jsx
- Services.jsx
- About.jsx
- FAQ.jsx

Layout (header/footer) is in: `src/layouts/Layout.jsx`

Colors can be changed in: `tailwind.config.js`
