# Luciano Moreira - Academic Portfolio

This is a personal academic and professional portfolio built with React and TailwindCSS. It showcases projects, research, achievements, education, work experience, volunteering, languages, hobbies, and sports.

## Features
- Modern responsive design
- Dark mode toggle
- Modular React components
- TailwindCSS for rapid styling
- Data-driven sections (easy to update)
- Calendly integration for scheduling meetings

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/LuckySoftware/academic-portfolio.git
   cd academic-portfolio-main
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development
To start the development server with hot reload:
```sh
npm run start
# or
yarn start
```
The app will be available at `http://localhost:3000` or the port specified in your configuration.

### Production Build
To build the app for production:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist/` directory.

### Deployment
You can deploy the contents of the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc).

## Project Structure
```
academic-portfolio-main/
├── public/
│   └── assets/images/         # Profile and project images
├── src/
│   ├── components/            # All React components
│   ├── index.js               # App entry point
│   └── index.css              # TailwindCSS imports
├── dist/                      # Production build output
├── tailwind.config.js         # TailwindCSS configuration
├── postcss.config.js          # PostCSS configuration
├── webpack.config.js          # Webpack configuration
├── package.json               # Project metadata and scripts
└── README.md                  # Project documentation
```

## Customization
- All portfolio data is centralized in `src/components/App.js` for easy editing.
- Images are stored in `public/assets/images/`.
- To change the Calendly link, edit the script in `index.html`.

## License
This project is licensed under the MIT License.
