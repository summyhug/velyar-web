# Velyar Landing Page

A beautiful, responsive landing page for Velyar - a global community app that connects people across cultures through daily video prompts.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Modern Tech Stack**: React + TypeScript + Vite + Tailwind CSS
- **Smooth Animations**: Custom CSS animations and transitions
- **Brand Consistency**: Uses Velyar's official color palette and Nunito font
- **Performance Optimized**: Fast loading with optimized assets

## 🎨 Design System

### Colors
- **Primary**: `#285A66` (Dark Teal)
- **Accent**: `#BD6031` (Soft Orange)
- **Secondary**: `#B7C8B0` (Light Sage)
- **Background**: `#F9F4F0` (Warm Beige)

### Typography
- **Font**: Nunito (Google Fonts)
- **Weights**: 300, 400, 600, 700, 800

## 📁 Project Structure

```
velyar/
├── public/
│   └── assets/
│       └── velyar_logo_full.svg    # Velyar logo
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Sticky navigation
│   │   ├── Hero.tsx                # Hero section
│   │   ├── HowItWorks.tsx          # Process explanation
│   │   ├── LiveMissions.tsx        # Current prompts
│   │   ├── CommunityValues.tsx     # Mission & values
│   │   ├── Footer.tsx              # App teaser & links
│   │   └── LandingPage.tsx         # Main component
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies
```

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Sections

1. **Sticky Header**: Logo and navigation with scroll effects
2. **Hero Section**: Main value proposition with animated background
3. **How It Works**: Three-step process explanation
4. **Live Missions**: Horizontal scroll of current prompts
5. **Community Values**: Mission statement and core values
6. **Footer**: App download links and social media

## 🎯 Key Features

- **Mobile-First**: Optimized for mobile devices
- **Smooth Scrolling**: Enhanced user experience
- **Custom Animations**: Fade-in and slide-up effects
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized images and minimal bundle size

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: '#285A66',   // Dark Teal
  accent: '#BD6031',    // Soft Orange
  secondary: '#B7C8B0', // Light Sage
  background: '#F9F4F0', // Warm Beige
}
```

### Logo
Replace `/public/assets/velyar_logo_full.svg` with your custom logo.

### Content
Update the content in each component file to match your needs.

## 📄 License

This project is created for Velyar. All rights reserved.

---

Built with ❤️ for global connection.
