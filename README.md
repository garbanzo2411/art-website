Matea Mihaljević - Artist Portfolio Website
A modern, responsive portfolio website showcasing the artwork and creative vision of Matea Mihaljević. Built with clean HTML, CSS, and JavaScript to create an engaging visual experience that puts the artwork front and center.
Show Image
## 🎨 Features

### Visual Design
- **Full-screen slideshow** with automatic cycling through featured artworks
- **Modern glassmorphism effects** with backdrop blur and transparency
- **Gradient backgrounds** and smooth animations throughout
- **Responsive grid layouts** that adapt to all screen sizes
- **Professional typography** with proper visual hierarchy

### Interactive Elements
- **Manual slideshow controls** with previous/next buttons
- **Clickable indicators** for direct slide navigation  
- **Animated statistics counters** that count up when scrolled into view
- **Smooth hover effects** on artwork previews and buttons
- **Dynamic header** that changes appearance on scroll

### User Experience
- **Mobile-first responsive design** 
- **Fast loading times** with optimized assets
- **Smooth scrolling** and page transitions
- **Accessible navigation** with proper ARIA labels
- **Cross-browser compatibility**

## 📁 Project Structure

```
matea-portfolio/
├── index.html              # Homepage with hero slideshow
├── about.html              # Artist biography and background
├── artworks.html           # Gallery of all artworks
├── contact.html            # Contact form and information
├── css/
│   └── styles.css          # Main stylesheet with modern design
├── js/
│   └── script.js           # Interactive functionality
├── artworks/               # Artwork image files
│   ├── avapainting.jpg
│   ├── chess.jpg
│   ├── cousins.jpg
│   ├── tank.jpg
│   ├── yugoslavia.jpg
│   └── housepainting.jpg
└── README.md
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox, grid, and custom properties
- **Vanilla JavaScript** - Interactive features and animations
- **Font Awesome** - Icon library for social media and UI elements
- **CSS Custom Properties** - Maintainable theming system
- **Intersection Observer API** - Scroll-triggered animations

## 📱 Responsive Design

The website is fully responsive and tested across:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px) 
- **Mobile** (320px - 767px)

### Key Responsive Features
- Flexible grid layouts that stack on smaller screens
- Scalable typography using `clamp()` functions
- Touch-friendly button sizes for mobile
- Optimized images for different screen densities

## ⚡ Performance

- **Optimized images** for fast loading
- **Minimal JavaScript** with no heavy frameworks
- **CSS animations** using hardware acceleration
- **Efficient selectors** and organized stylesheets

## 🎨 Color Palette

```css
:root {
  --primary-color: #007b55;
  --secondary-color: #005f40;
  --background-color: #f0f0f0;
  --text-color: #333;
  --text-light: #7f8c8d;
  --background:  #ffffff;
  --surface: #f8fafc;
  --border: #e2e8f0;
}
```

## 🚀 Usage

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/matea-portfolio.git
   cd matea-portfolio
   ```

2. **Open in browser:**
   ```bash
   # Using Python (if installed)
   python -m http.server 3000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Or simply open index.html in your browser
   ```

Built with ❤️ by Jacob Lazzarini | © 2025 All Rights Reserved
