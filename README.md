# 🎨 Modern Portfolio Website

A stunning, fully responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features beautiful animations, glassmorphism effects, and a centralized data management system.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design**: Gradient backgrounds, glassmorphism effects, and smooth animations
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🌙 **Dark Mode**: Automatic dark mode based on system preferences
- ⚡ **Fast Performance**: Built with Next.js 15 and Turbopack
- 🎭 **Smooth Animations**: Fade-ins, hover effects, and scroll animations
- 📊 **Interactive Skills**: Animated progress bars with skill levels
- 💼 **Timeline Experience**: Visual timeline for work experience
- 🚀 **Modern Projects**: Gradient project cards with hover effects
- 📧 **Contact Form**: Beautiful, functional contact section
- 🎯 **SEO Optimized**: Proper meta tags and structure
- 📦 **Centralized Data**: Single JSON file for all content management

## 🎯 Sections

1. **Hero** - Eye-catching animated gradient background with CTA buttons
2. **About** - Personal introduction with statistics and social links
3. **Experience** - Visual timeline of work history with achievements
4. **Projects** - Showcase of projects with technologies and links
5. **Skills** - Categorized skills with animated progress bars
6. **Contact** - Contact form with information and social links

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd career-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio!

## 📝 Customization

All your portfolio content is managed through a single JSON file located at:

```
src/data/portfolio.json
```

### Update Your Information

Edit `src/data/portfolio.json` to customize:

#### 1. Personal Information
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your Tagline",
    "description": "Your description",
    "email": "your@email.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

#### 2. About Section
```json
{
  "about": {
    "paragraphs": ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
    "stats": [
      { "number": "3+", "label": "Years Experience", "icon": "🎯" }
    ]
  }
}
```

#### 3. Work Experience
```json
{
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "2022 - Present",
      "description": "Job description",
      "achievements": ["Achievement 1", "Achievement 2"],
      "icon": "💼",
      "color": "from-purple-500 to-pink-500"
    }
  ]
}
```

#### 4. Projects
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["React", "Node.js"],
      "link": "https://github.com/...",
      "demo": "https://demo-link.com",
      "icon": "🛒",
      "gradient": "from-purple-600 via-pink-600 to-red-600"
    }
  ]
}
```

#### 5. Skills
```json
{
  "skills": {
    "categories": [
      {
        "category": "Frontend",
        "skills": [
          { "name": "React", "level": 90 }
        ]
      }
    ]
  }
}
```

### Customizing Colors

The portfolio uses a purple-blue gradient theme. To change colors:

1. Edit `src/app/globals.css` for global color variables
2. Update gradient classes in components (search for `from-purple-600`)
3. Common gradients used:
   - Primary: `from-purple-600 to-blue-600`
   - Secondary: `from-pink-600 to-purple-600`
   - Accent: `from-blue-600 to-cyan-600`

## 📦 Project Structure

```
career-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Main page
│   │   └── globals.css       # Global styles & animations
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Experience.tsx    # Experience timeline
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── Skills.tsx        # Skills with progress bars
│   │   └── Contact.tsx       # Contact form
│   └── data/
│       └── portfolio.json    # Centralized data file
├── public/                   # Static assets
├── package.json
└── README.md
```

## 🎨 Key Features Breakdown

### Animations
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Animated gradient backgrounds
- Progress bar animations
- Floating elements
- Smooth transitions

### Design Elements
- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Text**: Colorful gradient text effects
- **Dot Pattern**: Subtle background patterns
- **Gradient Orbs**: Animated background elements
- **Card Hover**: 3D lift effect on hover

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

Vercel will automatically detect Next.js and configure everything.

### Build for Production

```bash
npm run build
npm start
```

## 📧 Contact Form Integration

The contact form currently shows an alert. To make it functional:

### Option 1: EmailJS (Easiest)
```bash
npm install @emailjs/browser
```

Update `src/components/Contact.tsx` with EmailJS configuration.

### Option 2: API Route
Create `src/app/api/contact/route.ts` and use services like:
- SendGrid
- Resend
- Nodemailer

### Option 3: Formspree (No code)
Sign up at [formspree.io](https://formspree.io/) and update form action.

## 🎯 Adding a Resume Download

Place your PDF resume in the `public` folder:
```
public/resume.pdf
```

The download button in the Skills section will automatically work!

## 🌟 Customization Tips

1. **Add Your Photo**: Update the placeholder in `About.tsx`
2. **Add More Sections**: Create new components in `src/components/`
3. **Change Fonts**: Update font imports in `layout.tsx`
4. **Add Blog**: Create a new section or page for blog posts
5. **Add Testimonials**: Create a testimonials section
6. **Analytics**: Add Google Analytics or Vercel Analytics

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Turbopack](https://turbo.build/) - Next-gen bundler

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Happy Coding!** 🚀
