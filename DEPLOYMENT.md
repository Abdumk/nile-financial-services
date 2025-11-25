# Deployment Guide

## Deploy to Netlify (Recommended - Free)

1. Build your project:
```bash
npm run build
```

2. Sign up at [netlify.com](https://www.netlify.com)

3. Drag and drop the `dist` folder to Netlify

**OR** use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Deploy to Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy:
```bash
vercel --prod
```

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/nile-financial-services",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/nile-financial-services/'
})
```

4. Deploy:
```bash
npm run deploy
```

## Deploy to Any Web Host

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web host via FTP or hosting panel

3. Point your domain to the uploaded files

## Environment Variables

If you need to add environment variables (API keys, etc.):

1. Create `.env` file in root:
```
VITE_API_KEY=your_key_here
```

2. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

## Custom Domain

After deployment, you can add a custom domain through your hosting provider's dashboard.

For Netlify/Vercel:
- Go to Domain Settings
- Add your custom domain
- Update DNS records as instructed

## SSL Certificate

Most modern hosting platforms (Netlify, Vercel, GitHub Pages) provide free SSL certificates automatically.

## Performance Tips

- Images should be optimized before adding to `src/assets/`
- Use WebP format for better compression
- Enable gzip compression on your server
- Use a CDN for faster global delivery

## Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Hotjar for user behavior analysis
- Sentry for error tracking
