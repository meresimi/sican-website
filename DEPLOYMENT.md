# SICAN Website Deployment Guide

## Quick Deployment Guide for Non-Technical Users

### Option 1: Vercel (EASIEST - Recommended)

**Vercel is FREE for small websites and very easy to use.**

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with your email or GitHub

2. **Upload Your Website**
   - Click "Add New Project"
   - Click "Import Git Repository" OR drag and drop your folder
   - If uploading folder: compress it as ZIP first

3. **Deploy**
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your website is LIVE! 🎉

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add: solomonislands-can.org
   - Follow DNS instructions from your domain registrar

**Vercel Advantages:**
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Super fast globally
- ✅ Auto-updates when you change files
- ✅ No server maintenance needed

---

### Option 2: Netlify (Also Easy & Free)

1. **Create Account**
   - Visit https://netlify.com
   - Sign up

2. **Deploy Website**
   - Drag your `sican-website` folder to Netlify dashboard
   - OR connect GitHub repository
   - Site deploys automatically

3. **Custom Domain**
   - Site Settings → Domain Management
   - Add custom domain
   - Update DNS records

---

### Option 3: Traditional Web Hosting

If you already have web hosting (like cPanel):

1. **Build the Website**
   ```bash
   cd sican-website
   npm install
   npm run build
   ```

2. **Upload Files**
   - Upload these files via FTP:
     - `.next` folder
     - `public` folder
     - `package.json`
     - `next.config.js`

3. **Server Requirements**
   - Node.js 18+ installed
   - Run: `npm install --production`
   - Run: `npm start`

4. **Keep Running**
   - Use PM2 process manager:
   ```bash
   npm install -g pm2
   pm2 start npm --name "sican-website" -- start
   pm2 save
   ```

---

## Domain Setup

### If You Don't Have a Domain Yet

1. **Register Domain**
   - Go to Namecheap, GoDaddy, or Google Domains
   - Search for: solomonislands-can.org
   - Purchase domain ($10-15/year)

2. **Point to Hosting**
   - If using Vercel/Netlify: Follow their DNS instructions
   - Update nameservers or add A/CNAME records

### If You Have a Domain

1. **DNS Settings**
   - Log into your domain registrar
   - Go to DNS settings
   - Add records provided by Vercel/Netlify

---

## Updating the Website After Deployment

### On Vercel/Netlify:

**Method 1: Through Dashboard**
1. Go to your project
2. Upload new files
3. Site rebuilds automatically

**Method 2: Git Integration (Better)**
1. Connect to GitHub repository
2. Push changes to GitHub
3. Auto-deploys to website

### On Traditional Hosting:

1. Make changes locally
2. Run `npm run build`
3. Upload new files via FTP
4. Restart server: `pm2 restart sican-website`

---

## Cost Comparison

| Platform | Cost | Ease | Speed | Support |
|----------|------|------|-------|---------|
| **Vercel** | FREE | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ |
| **Netlify** | FREE | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ |
| **Traditional** | $5-50/mo | ⭐⭐ | ⚡ | Varies |

---

## Maintenance Schedule

### Daily
- Check website loads properly
- Monitor contact form submissions

### Weekly
- Add news/updates
- Check for broken links
- Review analytics

### Monthly
- Backup website files
- Update content
- Check security

### Quarterly
- Review design/content
- Update photos
- Check mobile performance

---

## Getting Help

### Technical Support
- **Vercel:** https://vercel.com/support
- **Netlify:** https://docs.netlify.com/
- **Next.js:** https://nextjs.org/docs

### SICAN Contact
- Email: WKisi@oxfampacific.org

---

## Recommended: Vercel Deployment

**Why we recommend Vercel:**
1. Completely free for SICAN's needs
2. No technical knowledge required
3. Automatically handles everything
4. Super fast worldwide
5. Automatic HTTPS security
6. Easy custom domain setup
7. Excellent for Next.js websites

**Simple Steps:**
1. Go to vercel.com → Sign Up
2. Click "Add New Project"
3. Upload sican-website folder (as ZIP)
4. Click "Deploy"
5. Done! ✅

Your website will be at: `https://sican-website.vercel.app`
Then add your custom domain in settings.

---

## Troubleshooting

**Website won't deploy:**
- Check all files are included
- Make sure package.json exists
- Try deleting node_modules and .next folders

**Domain not working:**
- DNS changes take 24-48 hours
- Check DNS records are correct
- Clear browser cache

**Website slow:**
- Optimize images (reduce file size)
- Use image compression tools
- Enable caching

**Need urgent help:**
Contact: WKisi@oxfampacific.org

---

**Your SICAN website is ready to go live! 🌊🇸🇧**
