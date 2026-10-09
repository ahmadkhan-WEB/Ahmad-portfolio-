Ahmad Khan — Premium Portfolio

A modern, responsive personal portfolio website for Ahmad Khan, a Software Engineering student and frontend developer. Built with HTML, CSS and vanilla JavaScript, featuring a dark glassmorphism design, animated backgrounds and smooth scroll effects.

Features
Hero section with a typewriter role animation and a rotating tech-badge orbit (HTML, CSS, JS, React)
Animated background with floating gradient orbs and a particle canvas
Glassmorphism UI with a blue-to-cyan gradient theme
Sticky navbar with blur-on-scroll effect and a mobile hamburger menu
About section with a photo frame, checklist and animated stat counters
Skills section with animated progress bars and a technology cloud
Projects section with hover-zoom cards, tags, Live Demo and GitHub buttons
Experience timeline, Education card and Languages section
Contact section with a form (HTML-validated, front-end demo; see note below) and contact details
Scroll-reveal animations and an active-link highlight in the navbar based on scroll position
Accessibility: prefers-reduced-motion support disables particles and animations
Fully responsive for desktop, tablet and mobile
Sections

Home · About · Skills · Projects · Experience · Education · Languages · Contact

Project Structure
.
├── index.html
├── assets/
│   └── ahmad-khan.png        # About section photo
├── css/
│   ├── variables.css         # Colors, fonts, spacing tokens
│   ├── base.css              # Reset, buttons, glass cards, background orbs
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── experience.css
│   ├── education.css
│   ├── languages.css
│   ├── contact.css
│   ├── footer.css
│   └── animations.css        # Scroll reveal + reduced-motion rules
├── js/
│   ├── particles.js          # Background particle canvas
│   ├── navbar.js             # Mobile menu, sticky blur, active link
│   ├── typewriter.js         # Hero typing effect
│   ├── counters.js           # Animated stat counters
│   ├── skills.js             # Skill bar animation
│   ├── scroll.js             # Scroll reveal
│   ├── contact.js            # Contact form handling
│   └── main.js               # Footer year
└── README.md

Important: index.html loads its styles from css/, its scripts from js/, and the profile image from assets/ahmad-khan.png. Make sure these folders and files are included in the repository, otherwise the site will not render correctly.

Getting Started
Clone the repository
bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
Run it
Open index.html directly in your browser, or
Use a local server:
bash
     npx serve .
     # or
     python -m http.server 8000
Open http://localhost:8000.

No build step or dependencies are required.

Customization
What to change	Where
Colors, fonts, container width, navbar height	css/variables.css
Name, bio, skills, projects, experience, education	index.html
Profile photo	assets/ahmad-khan.png
Project links (Live Demo / GitHub)	the href="#" links in the Projects section
Social links and email	Hero .socials and Contact section
Typewriter roles	roles array in js/typewriter.js
Particle count / color	js/particles.js
Skill percentages	data-value on .bar elements
Contact Form Note

The contact form currently only shows a confirmation message in the browser (js/contact.js); it does not send emails. To receive messages, connect a service such as Formspree, EmailJS or Web3Forms.

Deploy on GitHub Pages
Push the project to GitHub.
Go to Settings → Pages.
Under Build and deployment, choose Deploy from a branch, select main and / (root), then save.
Your site will be live at https://<your-username>.github.io/<repo-name>/.
Tech Stack
HTML5
CSS3 (Grid, Flexbox, custom properties, backdrop-filter, keyframe animations)
Vanilla JavaScript (ES6), Canvas API and Intersection Observer API
Google Fonts (Poppins), with Unsplash images for project thumbnails
Contact

Ahmad Khan Email: ahmadkhansa1075@gmail.com Location: Lahore, Pakistan
