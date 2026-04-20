# Personal Portfolio Website

A modern, production-ready full-stack portfolio website showcasing cybersecurity and software development skills.

## ✨ Features

### Frontend
- **Modern UI/UX**: Dark theme with smooth animations and transitions
- **Responsive Design**: Mobile-first approach, works on all devices
- **React Router**: Client-side routing with lazy loading for optimal performance
- **Tailwind CSS v4**: Latest version with custom components
- **Interactive Components**: 
  - Project filtering by technology
  - Loading states and spinners
  - Form validation with error messages
  - Smooth scrolling navigation
  - 404 Not Found page
- **Reusable Components**: Button, LoadingSpinner, Navbar, Footer

### Backend
- **Express.js**: RESTful API architecture
- **Security Features**:
  - Input sanitization (XSS prevention)
  - Rate limiting (5 requests per 15 minutes)
  - CORS configuration
  - Security headers
  - Request payload size limits
- **Email Integration**: Nodemailer with Gmail
- **Validation**: express-validator for robust input validation
- **Error Handling**: Comprehensive error handling and logging

### Pages
1. **Home**: Hero section, featured projects, skills preview
2. **About**: Personal background, journey, career goals
3. **Projects**: Filterable project showcase with live demos
4. **Skills**: Technical and soft skills organized by category
5. **Cybersecurity**: Vulnerabilities knowledge and security tools
6. **Contact**: Functional contact form with validation
7. **404**: Custom not found page

## 🚀 Tech Stack

### Frontend
- React 19
- React Router DOM 7
- Tailwind CSS 4
- Lucide React (icons)
- Vite 8

### Backend
- Node.js
- Express 4
- Nodemailer
- express-validator
- express-rate-limit
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Gmail account (for contact form)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install Frontend Dependencies
```bash
cd client
npm install
```

### 3. Install Backend Dependencies
```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

#### Backend (.env)
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

**Gmail Setup:**
1. Enable 2-Step Verification in your Google Account
2. Go to: Google Account > Security > 2-Step Verification > App passwords
3. Generate an app password for "Mail"
4. Use this password in `EMAIL_PASS`

#### Frontend (.env) - Optional
```bash
cd client
cp .env.example .env
```

Edit `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```

## 🏃 Running the Application

### Development Mode

#### Terminal 1 - Backend
```bash
cd server
npm run dev
```
Server will run on `http://localhost:5000`

#### Terminal 2 - Frontend
```bash
cd client
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Build

#### Build Frontend
```bash
cd client
npm run build
```

#### Start Backend
```bash
cd server
npm start
```

## 🎨 Customization

### Update Personal Information
Edit `client/src/data/portfolioData.js`:
- Personal info (name, title, email, social links)
- Projects list
- Skills (technical and soft)
- Vulnerabilities knowledge
- Security tools

### Styling
- Tailwind config: `client/tailwind.config.js`
- Custom styles: `client/src/index.css`
- Component styles: Use Tailwind utility classes

## 📁 Project Structure

```
portfolio/
├── client/                    # Frontend React app
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Cybersecurity.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── data/
│   │   │   └── portfolioData.js  # All content data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Backend Express app
│   ├── routes/
│   │   └── contact.js        # Contact form API
│   ├── index.js              # Server entry point
│   ├── .env                  # Environment variables
│   └── package.json
│
└── README.md
```

## 🔒 Security Features

### Frontend
- Input validation before submission
- XSS prevention through sanitization
- Environment variable for API URL
- HTTPS recommended for production

### Backend
- Rate limiting (5 requests per 15 minutes)
- Input sanitization with express-validator
- CORS configuration
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Request payload size limits (10kb)
- Error handling without exposing sensitive info

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000/api/health

# Test contact form (should be rate limited after 5 requests)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

### Test Frontend
1. Navigate to all pages and verify they load
2. Test mobile responsiveness (resize browser)
3. Test contact form with valid/invalid inputs
4. Test project filtering
5. Test 404 page (visit non-existent route)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build: `cd client && npm run build`
2. Deploy the `dist` folder
3. Set environment variable: `VITE_API_URL=https://your-api-url.com`

### Backend (Heroku/Railway/Render)
1. Push server folder to hosting platform
2. Set environment variables (all from .env)
3. Ensure start script: `node index.js`

### Important for Production
- Update `FRONTEND_URL` in backend .env
- Update `VITE_API_URL` in frontend .env
- Use HTTPS for both frontend and backend
- Keep EMAIL_PASS secure (use secrets manager)

## 📝 Issues Fixed

### ✅ Completed Fixes
1. ✅ Fixed incorrect lucide-react icon imports (Github, Linkedin)
2. ✅ Added Tailwind CSS v4 configuration
3. ✅ Created 404 Not Found page
4. ✅ Added LoadingSpinner component
5. ✅ Created reusable Button component
6. ✅ Implemented input sanitization on backend
7. ✅ Added rate limiting (5 requests per 15 minutes)
8. ✅ Enhanced contact form validation
9. ✅ Added project filtering by technology
10. ✅ Implemented smooth scrolling
11. ✅ Added loading states to buttons and forms
12. ✅ Improved error handling
13. ✅ Added security headers
14. ✅ Implemented lazy loading for pages
15. ✅ Enhanced UI with hover effects and transitions
16. ✅ Added environment variable support
17. ✅ Improved navbar with scroll effects
18. ✅ Added accessibility attributes

## 🎯 Performance Optimizations

- Lazy loading of page components
- Code splitting with React Router
- Optimized images (use WebP format recommended)
- Minimal bundle size with Vite
- CSS purging with Tailwind

## 🔧 Commands Reference

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Backend
npm run dev          # Start with auto-reload
npm start            # Start production server
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or suggestions, use the contact form on the website.

---

**Made with ❤️ using React, Node.js, and Tailwind CSS**
