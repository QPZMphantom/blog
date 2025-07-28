# Zeying's Blog - React Version

## Overview
This is a React-based personal blog website that displays your education journey, hobbies, projects, and blog posts.

## Project Structure
```
my_blog/
├── public/
│   ├── images/          # Your images (avatar, blog images)
│   ├── index.html       # HTML template
│   └── resume_Zeyingli-2.pdf
├── src/
│   ├── components/      # React components
│   │   ├── BlogModal.js # Modal for displaying blog posts
│   │   ├── EducationPost.js
│   │   ├── HobbiesPost.js
│   │   └── SpringQuarterPost.js
│   ├── data/
│   │   └── blogPosts.js # Blog post data and content
│   ├── App.js          # Main app component
│   ├── App.css         # Styles
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## Running the App

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```
The app will open at http://localhost:3000

3. Build for production:
```bash
npm run build
```

## Features

- **Smooth Modal System**: Click on any blog card or section to open content in a beautiful modal
- **Responsive Design**: Works great on mobile and desktop
- **Vivid Styling**: 
  - Education page with timeline design and gradient effects
  - Hobbies page with colorful cards and icons
  - Smooth animations and hover effects
- **Easy to Update**: Add new blog posts by updating `src/data/blogPosts.js`

## Adding New Content

To add a new blog post:
1. Create a new component in `src/components/`
2. Import it in `src/data/blogPosts.js`
3. Add an entry with a unique slug

## Deployment

To deploy to GitHub Pages:
1. Add to package.json: `"homepage": "https://yourusername.github.io/my_blog"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`