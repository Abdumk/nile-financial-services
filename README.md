# Nile Financial Services Website

A modern, responsive static website built with React.js, Tailwind CSS, and JavaScript for Nile Financial Services - a professional tax preparation and financial solutions company.

## Features

- ✅ Clean, modern UI with professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Professional color scheme (blue, gold, white)
- ✅ Smooth animations and transitions
- ✅ 4 complete pages (Home, Services, About, FAQ)
- ✅ Interactive navigation with mobile menu
- ✅ Contact information prominently displayed
- ✅ Service cards with icons
- ✅ Testimonials section
- ✅ FAQ accordion
- ✅ Chatbot button
- ✅ SEO-friendly structure

## Pages

1. **Home Page**
   - Hero section with CTA buttons
   - Tax season banner
   - Services overview (4 main services)
   - Why Choose Us section
   - Contact section with location and hours

2. **Services Page**
   - Health & Life Insurance Services
   - Financial & Tax Services
   - Detailed service descriptions
   - Call-to-action sections

3. **About Page**
   - Company introduction
   - Mission statement
   - Service offerings
   - Why choose us
   - Client testimonials

4. **FAQ Page**
   - Interactive accordion with 10 questions
   - Chatbot CTA
   - Additional help section

## Installation

1. Navigate to the project directory:
```bash
cd nile-financial-services
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
nile-financial-services/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── FAQ.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## Color Scheme

- **Primary Blue**: #1e40af (primary), #1e3a8a (dark), #3b82f6 (light)
- **Gold**: #d4af37 (default), #b8941f (dark), #f4d03f (light)
- **White**: #ffffff
- **Gray shades**: For text and backgrounds

## Contact Information

- **Phone**: 571-306-9039
- **Email**: admin@nilefinancialservices.com
- **Hours**: 
  - Mon-Fri: 9:00 AM - 6:00 PM
  - Sat: 10:00 AM - 4:00 PM
  - Sun: Closed

## Customization

To customize the website:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Content**: Update the content in each page component
3. **Styling**: Modify Tailwind classes or add custom CSS in `index.css`
4. **Icons**: Import additional icons from `react-icons`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Nile Financial Services. All rights reserved.
