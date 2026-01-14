# Content Editing Guide - SICAN Website

## 🎯 For Non-Technical Editors

This guide shows you how to update website content WITHOUT coding knowledge.

---

## Quick Reference: Where to Find Things

| What to Edit | File Location |
|--------------|---------------|
| Homepage text | `/app/page.tsx` |
| About Us page | `/app/about/page.tsx` |
| Contact info | `/components/Footer.tsx` and `/app/contact/page.tsx` |
| Climate statistics | `/components/ClimateStats.tsx` |
| News articles | `/components/LatestNews.tsx` |
| Navigation menu | `/components/Header.tsx` |
| Logo | `/public/images/sican-logo.png` |

---

## How to Edit Text Content

### 1. Homepage Hero Section

**File:** `/components/Hero.tsx`

Find this section (around line 20):
```typescript
<h1 className="text-4xl...">
  Solomon Islands Climate Action Network
</h1>
```

**What you can change:**
- Main heading text
- Tagline (Pijin and English)
- Description paragraph
- Button text

**⚠️ DON'T change:** anything inside `className=""` or with `<` `>` symbols

---

### 2. Climate Statistics

**File:** `/components/ClimateStats.tsx`

Find this section (around line 5):
```typescript
const stats = [
  {
    number: "5",
    label: "Islands Lost",
    description: "Since 1947",
  },
```

**To update statistics:**
1. Change the `number:` value
2. Change the `label:` text
3. Change the `description:` text

**Example:**
```typescript
{
  number: "7",  // ← Change this
  label: "Islands Lost",  // ← Change this
  description: "Since 1940",  // ← Change this
},
```

---

### 3. Adding News Articles

**File:** `/components/LatestNews.tsx`

Find the `newsItems` array (around line 5):

```typescript
const newsItems = [
  {
    title: "Your News Title Here",
    excerpt: "Brief description of the news...",
    date: "January 14, 2026",
    category: "News Category",
  },
  // Add more news items here
]
```

**To add new article:**
1. Copy one complete `{ }` block
2. Paste it below
3. Update title, excerpt, date, category
4. Add comma after previous item

---

### 4. Updating Contact Information

**File:** `/components/Footer.tsx`

Find the contact section (around line 80):

```typescript
<a href="mailto:WKisi@oxfampacific.org">
  WKisi@oxfampacific.org
</a>
```

**To change email:**
- Replace `WKisi@oxfampacific.org` with new email
- Change it in BOTH places (href and display text)

---

### 5. Changing Colors

**File:** `/tailwind.config.js`

Find the colors section (around line 10):

```javascript
colors: {
  ocean: {
    DEFAULT: '#004E89',  // ← Change this hex code
  },
  coral: {
    DEFAULT: '#E07A3E',  // ← Change this hex code
  },
}
```

**Color format:** Always use 6-digit hex codes like `#FF5733`

---

## 📝 Text Editing Rules

### ✅ Safe to Edit:
- Text between `>` and `<`
- Text inside `"quotes"`
- Numbers and dates
- Email addresses and links (but keep the format)

### ❌ DON'T Edit:
- Anything with `className`
- Code with `{` `}` brackets (unless instructed)
- File paths starting with `/`
- Words starting with `<` like `<div>`, `<section>`

---

## 🖼️ Adding/Changing Images

### Replacing the Logo

1. Prepare your new logo (PNG format, transparent background recommended)
2. Name it: `sican-logo.png`
3. Replace file in: `/public/images/sican-logo.png`
4. Keep the same filename!

### Adding New Images

1. Place image in `/public/images/` folder
2. Name it something simple (no spaces): `event-2026.jpg`
3. Reference it in code as: `/images/event-2026.jpg`

**Example:**
```typescript
<img src="/images/event-2026.jpg" alt="SICAN Event 2026" />
```

---

## 🔄 Testing Your Changes

### Before Going Live:

1. **Save your changes**
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open browser:** http://localhost:3000
4. **Check your changes**
5. **If good:** Proceed to deploy
6. **If broken:** Undo changes (Ctrl+Z) and try again

---

## Common Editing Tasks

### Task 1: Update Homepage Tagline

1. Open `/components/Hero.tsx`
2. Find line with: `"Rising Togetherness for Climate Change"`
3. Change text
4. Save file
5. Refresh browser

### Task 2: Add Team Member to About Page

1. Open `/app/about/page.tsx`
2. Find the team section
3. Copy existing team member block
4. Paste and edit details
5. Save and check

### Task 3: Change Footer Copyright Year

1. Open `/components/Footer.tsx`
2. Find: `{currentYear}`
3. It updates automatically!
4. No edit needed ✅

---

## ⚠️ Important Reminders

1. **Always backup before editing**
   - Copy the file you're editing
   - Paste it elsewhere as backup

2. **Edit one file at a time**
   - Make change
   - Test
   - Then move to next file

3. **Use a good text editor**
   - Recommended: VS Code (free)
   - NOT: Microsoft Word (will break code)

4. **Save frequently**
   - Ctrl+S (Windows) or Cmd+S (Mac)

5. **Test before deploying**
   - Always run `npm run dev` to test locally

---

## 🆘 I Broke Something! - Emergency Fixes

### The Website Won't Load

**Quick Fix:**
1. Undo your last change (Ctrl+Z)
2. Save file
3. Refresh browser

**If still broken:**
1. Replace edited file with your backup
2. Or download fresh copy from original folder

### Text Looks Weird

**Check for:**
- Missing quote marks `"`
- Missing comma `,`
- Extra brackets `{` or `}`

### Syntax Error Messages

**Common causes:**
- Forgot closing quote `"`
- Forgot comma between items
- Deleted important code accidentally

**Solution:**
- Carefully compare with working example
- Or restore from backup

---

## 📞 Getting Help

### Self-Help:
1. Check this guide first
2. Compare your code with original files
3. Google the error message

### Ask for Help:
- **Email:** WKisi@oxfampacific.org
- **Include:** 
  - What you were trying to do
  - What file you edited
  - Screenshot of error (if any)

---

## 🎓 Want to Learn More?

### Free Resources:
- **HTML Basics:** https://www.w3schools.com/html/
- **React Tutorial:** https://react.dev/learn
- **Next.js Docs:** https://nextjs.org/docs

### YouTube Tutorials:
- Search: "Next.js for beginners"
- Search: "How to edit React website"

---

## ✅ Content Update Checklist

Before publishing changes:

- [ ] Text is spell-checked
- [ ] All links work
- [ ] Images display correctly
- [ ] Mobile view looks good
- [ ] Contact info is current
- [ ] Dates are updated
- [ ] Tested in browser (npm run dev)
- [ ] Backed up original files
- [ ] Ready to deploy!

---

**Remember:** Take it slow, test often, and don't be afraid to ask for help!

You're doing great! 🌊🇸🇧
