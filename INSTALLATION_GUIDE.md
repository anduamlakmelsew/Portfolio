# 🚀 Complete Installation & Setup Guide

## Prerequisites
- Node.js v18+ installed
- npm or yarn
- Gmail account (for contact form)
- Terminal/Command prompt

## Step-by-Step Installation

### 1️⃣ Install Dependencies

#### Frontend
```bash
cd client
npm install
```

This installs:
- react, react-dom (UI framework)
- react-router-dom (routing)
- lucide-react (icons)
- tailwindcss (styling)
- vite (build tool)

#### Backend
```bash
cd server
npm install
```

This installs:
- express (web framework)
- cors (cross-origin requests)
- nodemailer (email sending)
- dotenv (environment variables)
- mongoose (MongoDB - optional)

**IMPORTANT: Install missing security packages:**
```bash
cd server
npm install express-rate-limit express-validator
```

### 2️⃣ Configure Environment Variables

#### Backend Configuration
```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your details:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

**How to get Gmail App Password:**
1. Go to your Google Account: https://myaccount.google.com/
2. Click "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security page
5. Click "2-Step Verification"
6. Scroll down and click "App passwords"
7. Select "Mail" and "Other (Custom name)"
8. Enter "Portfolio Contact Form"
9. Click "Generate"
10. Copy the 16-character password
11. Paste it in `EMAIL_PASS` in your `.env` file

#### Frontend Configuration (Optional)
```bash
cd client
cp .env.example .env
```

Edit `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```

### 3️⃣ Verify Installation

#### Check Backend Dependencies
```bash
cd server
npm list express cors nodemailer dotenv express-rate-limit express-validator
```

You should see all packages listed without errors.

#### Check Frontend Dependencies
```bash
cd client
npm list react react-dom react-router-dom lucide-react tailwindcss
```

You should see all packages listed without errors.

### 4️⃣ Start Development Servers

#### Terminal 1 - Backend
```bash
cd server
npm run dev
```

Expected output:
```
Server running on port 5000
Environment: development
```

#### Terminal 2 - Frontend
```bash
cd client
npm run dev
```

Expected output:
```
VITE v8.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 5️⃣ Test the Application

#### Open Browser
Navigate to: http://localhost:5173

#### Test All Pages
- ✅ Home page loads
- ✅ About page loads
- ✅ Projects page loads (test filtering)
- ✅ Skills page loads
- ✅ Cybersecurity page loads
- ✅ Contact page loads
- ✅ Test invalid URL (should show 404)

#### Test Contact Form
1. Fill in all fields
2. Click "Send Message"
3. Check for success message
4. Check your email inbox

#### Test Rate Limiting
Try submitting the contact form 6 times quickly. The 6th request should be blocked with:
```
"Too many contact requests. Please try again later."
```

### 6️⃣ Customize Your Portfolio

#### Update Personal Information
Edit `client/src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Actual Name",
  title: "Your Title",
  introduction: "Your introduction...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

#### Add Your Projects
```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "etc"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
    featured: true,
  },
  // Add more projects...
];
```

#### Update Skills
```javascript
export const technicalSkills = [
  { 
    category: "Frontend", 
    skills: ["Your", "Skills", "Here"] 
  },
  // Add more categories...
];
```

## 🐛 Troubleshooting

### Issue: "Cannot find module 'express-rate-limit'"
**Solution:**
```bash
cd server
npm install express-rate-limit express-validator
```

### Issue: "Port 5000 already in use"
**Solution:**
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process or change PORT in .env
```

### Issue: "Email not sending"
**Solutions:**
1. Verify Gmail credentials in `.env`
2. Check you're using App Password, not regular password
3. Enable "Less secure app access" (not recommended)
4. Check console for error messages
5. Verify internet connection

### Issue: "Tailwind styles not working"
**Solution:**
```bash
cd client
npm install -D tailwindcss@latest @tailwindcss/vite@latest
npm run dev
```

### Issue: "React Router not working"
**Solution:**
```bash
cd client
npm install react-router-dom@latest
```

### Issue: "Icons not displaying"
**Solution:**
```bash
cd client
npm install lucide-react@latest
```

## 📦 Production Deployment

### Build Frontend
```bash
cd client
npm run build
```

Output will be in `client/dist/`

### Deploy Frontend (Vercel)
```bash
cd client
npm install -g vercel
vercel
```

Set environment variable:
- `VITE_API_URL`: Your backend URL

### Deploy Backend (Railway/Render)
1. Push code to GitHub
2. Connect repository to Railway/Render
3. Set environment variables (all from .env)
4. Deploy

### Update URLs
After deployment:
1. Update `FRONTEND_URL` in backend .env
2. Update `VITE_API_URL` in frontend .env
3. Rebuild and redeploy

## ✅ Final Checklist

- [ ] All dependencies installed
- [ ] Environment variables configured
- [ ] Gmail app password set up
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Email received successfully
- [ ] Rate limiting works
- [ ] Personal info updated
- [ ] Projects added
- [ ] Skills updated
- [ ] Tested on mobile
- [ ] Ready for deployment

## 🎉 Success!

Your portfolio is now fully functional and ready to showcase your work!

## 📞 Need Help?

If you encounter any issues:
1. Check the error message in console
2. Review this guide
3. Check `FIXES_AND_IMPROVEMENTS.md`
4. Verify all dependencies are installed
5. Ensure environment variables are correct

## 🚀 Next Steps

1. Customize content in `portfolioData.js`
2. Add your actual projects
3. Test thoroughly
4. Deploy to production
5. Share your portfolio!
