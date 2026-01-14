# 🚀 QUICK START GUIDE - SICAN Website

## Welcome! Your website is ready to launch! 🌊

### ⏱️ Get Your Website Running in 10 Minutes

---

## Step 1: Install Node.js (If Not Already Installed)

**Check if you have it:**
Open Terminal/Command Prompt and type:
```bash
node --version
```

**If you see a version number (like v18.0.0):** ✅ Skip to Step 2

**If you get an error:** Download Node.js:
- Visit: https://nodejs.org/
- Download the **LTS version** (recommended)
- Install it (click Next, Next, Next...)
- Restart your computer

---

## Step 2: Open the Project

### On Windows:
1. Hold Shift + Right-click on `sican-website` folder
2. Click "Open PowerShell window here" or "Open Command Prompt here"

### On Mac:
1. Open Terminal
2. Type `cd ` (with a space after)
3. Drag the `sican-website` folder into Terminal
4. Press Enter

---

## Step 3: Install Everything

Copy and paste this command, then press Enter:

```bash
npm install
```

**What happens:**
- Downloads all required files
- Takes 2-5 minutes
- You'll see lots of text scrolling
- When done, you'll see the prompt again

**If you see errors:** Don't worry yet, try Step 4 anyway!

---

## Step 4: Start the Website!

Type this command:

```bash
npm run dev
```

**You should see:**
```
✓ Ready in 1.2s
○ Local:    http://localhost:3000
```

---

## Step 5: View Your Website! 🎉

Open your web browser and go to:

**http://localhost:3000**

**You should see:** The beautiful SICAN website!

---

## 🎊 Congratulations! Your Website is Running!

### What Now?

**Option A: Just Looking Around**
- Browse the website
- Click through pages
- Check mobile view (resize browser)
- Press Ctrl+C in terminal when done

**Option B: Ready to Deploy**
- Go to DEPLOYMENT.md
- Follow Vercel deployment (easiest)
- Your site will be live in 10 minutes!

**Option C: Want to Edit Content**
- Open EDITING-GUIDE.md
- Learn how to change text, images, etc.
- Make it your own!

---

## 🔧 Troubleshooting

### "npm: command not found"

**Solution:** Install Node.js (see Step 1 above)

---

### "Port 3000 is already in use"

**Solution:** Use a different port:
```bash
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

---

### Website looks broken / no styles

**Solution:**
1. Stop the server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

---

### "Cannot find module" error

**Solution:**
```bash
rm -rf node_modules
npm install
```

---

### Everything is broken and I don't know why!

**Solution:**
1. Extract a fresh copy of sican-website from the zip
2. Start over from Step 2
3. Contact: WKisi@oxfampacific.org for help

---

## 📱 Testing on Your Phone

While the website is running:

1. **Find your computer's IP address:**
   - Windows: `ipconfig` (look for IPv4)
   - Mac: System Preferences → Network

2. **On your phone's browser, visit:**
   ```
   http://YOUR-IP-ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

3. **Make sure:** Phone and computer are on same WiFi!

---

## 🌐 Ready to Go Live?

### Quick Deploy to Vercel (FREE & EASY):

1. **Go to:** https://vercel.com
2. **Sign up** with email
3. **Click:** "Add New Project"
4. **Drag and drop** the `sican-website` folder
5. **Click:** "Deploy"
6. **Wait 2 minutes**
7. **Done!** ✅ Your site is live!

**Your live URL will be:** `https://sican-website.vercel.app`

Then add your custom domain (solomonislands-can.org) in settings!

---

## 📋 Helpful Commands Reference

| Command | What It Does |
|---------|--------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| Ctrl+C | Stop the server |

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `README.md` | Full documentation |
| `DEPLOYMENT.md` | How to go live |
| `EDITING-GUIDE.md` | How to edit content |
| `package.json` | Project settings |
| `/app/page.tsx` | Homepage |
| `/components/` | Website sections |
| `/public/images/` | Your images |

---

## ✅ Success Checklist

After completing quick start:

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install` worked)
- [ ] Development server running
- [ ] Website visible at localhost:3000
- [ ] All pages load correctly
- [ ] Mobile view works
- [ ] Ready to deploy OR edit content

---

## 🎯 Next Steps

Choose your path:

### Path 1: Deploy Now 🚀
→ Go to `DEPLOYMENT.md`
→ Follow Vercel instructions
→ Your site goes live!

### Path 2: Edit Content First ✏️
→ Go to `EDITING-GUIDE.md`
→ Update text, images, info
→ Make it perfect
→ Then deploy!

### Path 3: Learn More 📚
→ Read `README.md`
→ Explore the files
→ Watch Next.js tutorials
→ Become a pro!

---

## 🆘 Need Help?

### Quick Fixes:
- Restart the server (Ctrl+C, then `npm run dev`)
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser

### Still Stuck?
- Check TROUBLESHOOTING section in README.md
- Email: WKisi@oxfampacific.org
- Include: What you tried & error messages

---

## 🎉 You Did It!

Your SICAN website is now running on your computer!

**What you achieved:**
✅ Installed a professional Next.js website
✅ Got it running locally
✅ Ready to deploy to the world

**This is huge!** You're now ready to share SICAN's climate action work with the world! 🌊🇸🇧

---

## 💡 Pro Tips

1. **Keep Terminal Open:** While editing, keep the dev server running
2. **Auto-Refresh:** Changes appear automatically in browser
3. **Save Often:** Ctrl+S / Cmd+S
4. **Test Mobile:** Use browser's mobile view (F12 → Toggle Device)
5. **Backup:** Before big changes, copy files

---

**Ready? Let's make this website LIVE!**

Next: Open `DEPLOYMENT.md` and follow the Vercel deployment guide!

---

**Rising Togetherness for Climate Change** 🌊

Solomon Islands Climate Action Network
www.solomonislands-can.org
