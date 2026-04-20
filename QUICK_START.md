
# ⚡ Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies (2 min)
```bash
# Frontend
cd client && npm install

# Backend
cd ../server && npm install

# Install security packages
npm install express-rate-limit express-validator multer
```

### Step 2: Configure Email (1 min)
```bash
cd server
```

Edit `.env` file:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

**Get Gmail App Password:**
1. Google Account → Security → 2-Step Verification → App passwords
2. Generate password for "Mail"
3. Copy 16-character password to `.env`

### Step 3: Start Servers (1 min)
```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

### Step 4: Test (1 min)
- Open: http://localhost:5173
- Navigate through all pages
- Test contact form
- Upload profile photo at /profile-settings
- Done! ✅

---

## 📝 Customize Your Portfolio

Edit `client/src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

---

## 📸 Upload Profile Photo

1. Go to: http://localhost:5173/profile-settings
2. Click "Click to select image"
3. Choose your photo
4. Select storage type:
   - **Local Storage**: Fast, browser-only
   - **Server Storage**: Persistent, cross-device
5. Click Save
6. See your photo on Home and About pages!

---

## 🐛 Common Issues

### "Cannot find module 'express-rate-limit'"
```bash
cd server
npm install express-rate-limit express-validator multer
```

### "Email not sending"
- Check Gmail App Password in `.env`
- Use App Password, not regular password
- Check internet connection

### "Port already in use"
- Change PORT in `server/.env`
- Or kill process using the port

### "Profile photo not uploading"
- Ensure backend is running
- Check file size < 5MB
- Verify file is an image

---

## 📚 Full Documentation

- **README.md** - Complete project docs
- **INSTALLATION_GUIDE.md** - Detailed setup
- **PROFILE_PHOTO_FEATURE.md** - Photo upload guide
- **FIXES_AND_IMPROVEMENTS.md** - All fixes
- **PROJECT_SUMMARY.md** - Overview

---

## ✅ Quick Checklist

- [ ] Dependencies installed
- [ ] Email configured
- [ ] Servers running
- [ ] All pages load
- [ ] Contact form works
- [ ] Profile photo uploaded
- [ ] Personal info updated
- [ ] Projects added
- [ ] Ready to deploy!

---

**That's it! Your portfolio is ready! 🎉**
