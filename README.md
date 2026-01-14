# SICAN Website - Solomon Islands Climate Action Network

**Rising Togetherness for Climate Change**

A professional, culturally-authentic website for the Solomon Islands Climate Action Network, built with Next.js 14, React, and Tailwind CSS.

## 🌊 About This Project

This website showcases SICAN's climate action work across Solomon Islands, featuring:
- Professional design with Solomon Islands cultural elements
- Responsive, mobile-first layout
- Custom color palette inspired by Solomon Islands nature
- Bilingual support (English with Pijin elements)
- SEO optimized
- Fast, modern performance

## 🎨 Design Features

- **Ocean Blue (#004E89)** - Deep Pacific waters
- **Forest Green (#2D5016)** - Lush vegetation
- **Coral Orange (#E07A3E)** - Tropical sunsets and urgency
- **Sandy Beige (#F4E4C1)** - Natural beaches
- **Lagoon Turquoise (#1BA098)** - Shallow waters

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🚀 Quick Start

### 1. Extract the Website Files

Extract the `sican-website` folder to your desired location on your computer.

### 2. Install Dependencies

Open your terminal/command prompt, navigate to the project folder, and run:

```bash
cd sican-website
npm install
```

This will install all required packages (may take a few minutes).

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and visit: **http://localhost:3000**

You should see the SICAN website running!

## 📝 Editing Content

### Updating Homepage Content

1. Open `/app/page.tsx` - this is the main homepage
2. Each section is a separate component in `/components/`
3. Edit the text directly in the component files

### Changing Colors

1. Open `/tailwind.config.js`
2. Find the `colors` section under `extend`
3. Modify color values as needed

### Adding New Pages

1. Create a new folder in `/app/` (e.g., `/app/resources/`)
2. Add a `page.tsx` file in that folder
3. Copy the structure from existing pages (like About or Contact)

### Updating the Logo

Replace `/public/images/sican-logo.png` with your new logo (keep the same filename).

## 📁 Project Structure

```
sican-website/
├── app/                    # Pages and routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── ClimateStats.tsx   # Statistics section
│   └── ...                # Other components
├── public/                # Static files
│   └── images/           # Images and logos
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

## 🔧 Common Tasks

### Adding News Articles

1. Create a news database or use a CMS (we can help with this)
2. For now, edit `/components/LatestNews.tsx` to add news items manually

### Updating Contact Information

1. Open `/components/Footer.tsx`
2. Update email, address, social media links

### Adding More Pages

Follow this pattern:
```
/app/your-page-name/page.tsx
```

### Building for Production

When ready to deploy:

```bash
npm run build
npm run start
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - FREE)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in project folder
4. Follow the prompts

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `.next` folder after running `npm run build`

### Option 3: Traditional Hosting

1. Run `npm run build`
2. Upload the `.next` folder and `package.json` to your server
3. Run `npm install --production`
4. Run `npm start`

## 📱 Mobile Optimization

The website is already mobile-optimized:
- Responsive design works on all screen sizes
- Touch-friendly navigation
- Optimized images
- Fast loading on slow connections

## 🆘 Troubleshooting

### "npm: command not found"

Install Node.js from [nodejs.org](https://nodejs.org/)

### Port 3000 already in use

Run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Images not showing

Make sure images are in `/public/images/` folder

### Styling not working

1. Delete `.next` folder
2. Run `npm run dev` again

## 📞 Need Help?

**Technical Issues:**
- Check [Next.js Documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)

**SICAN Contact:**
- Email: WKisi@oxfampacific.org
- Website: www.solomonislands-can.org

## 🔄 Future Enhancements

Phase 2 features to add:
- [ ] Content Management System (CMS)
- [ ] Bilingual support (full Pijin translation)
- [ ] Newsletter integration
- [ ] Events calendar
- [ ] Resource library with downloads
- [ ] Interactive maps
- [ ] Climate data dashboards

## 📄 License

© 2026 Solomon Islands Climate Action Network (SICAN)
All rights reserved.

## 🙏 Credits

- **Built for:** SICAN - Solomon Islands Climate Action Network
- **Technology:** Next.js 14, React, Tailwind CSS
- **Design:** Custom design reflecting Solomon Islands culture and climate urgency

---

**Rising Togetherness for Climate Change** 🌊🇸🇧

For more information about SICAN's climate work, visit our website or contact us.
# Updated Wed Jan 14 23:03:26 +11 2026
